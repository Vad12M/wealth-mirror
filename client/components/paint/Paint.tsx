import React, { useState } from "react";
import {
  Stage,
  Layer,
  Rect as KonvaRect,
  Line as KonvaLine,
  Transformer, Rect,
} from "react-konva";
import { Box } from "@chakra-ui/react";
import usePaint from "../../hooks/usePaint";
import PaintOptions from "@/components/paint/PaintOptions";
import PaintHeader from "@/components/paint/PaintHeader";
import PaintLeftMenu from "@/components/paint/PaintLeftMenu";
import RealEstateElements from "@/components/paint/paintElements/RealEstateElements";
import StocksElements from "@/components/paint/paintElements/StocksElements";
import CardsElements from "@/components/paint/paintElements/CardsElements";
import CarElements from "@/components/paint/paintElements/CarElements";
import PaintZoom from "@/components/paint/PaintZoom";
import MutualFundsElements from "@/components/paint/paintElements/MutualFundsElements";
import IncomesElements from "@/components/paint/paintElements/IncomesElements";
import FixedDepositsElements from "@/components/paint/paintElements/FixedDepositsElements";
import ExpensesElements from "@/components/paint/paintElements/ExpensesElements";
import GoldElements from "@/components/paint/paintElements/GoldElements";
import CryptoElements from "@/components/paint/paintElements/CryptoElements";
import LiquideCashElements from "@/components/paint/paintElements/LiquideCashElements";

interface PaintProps {
}

export const GRID_SIZE = 67;
const LIMIT = 10000;

export const Paint: React.FC<PaintProps> = React.memo(function Paint({}) {
  const {
    isDraggable,
    onStageMouseDown,
    onStageMouseMove,
    onExportClick,
    transformerRef,
    onClear,
    stageRef,
    handleZoomIn,
    handleZoomOut,
    zoomLevel,
    sizeWidth,
    sizeHeight,
    updateItem,
    cars, cards, realEstates,
    stocks, incomes,
    mutualFunds, fixedDeposits,
    expenses, golds, cryptos,
    liquidCashs
  } = usePaint();

  const [showOptions, setShowOptions] = useState(false);
  const [optionsPosition, setOptionsPosition] = useState({ x: 0, y: 0 });
  const [activeItem, setActiveItem] = useState<any>();
  const [activeType, setActiveType] = useState<string>('');
  const [stagePosition, setStagePosition] = useState({ x: 0, y: 0 });

  const handleCanvasClick = (e: any) => {
    const stage = e.target.getStage();
    const pos = stage.getPointerPosition();
    setOptionsPosition({ x: pos.x, y: pos.y });
    setShowOptions(!showOptions);
    if (showOptions) {
      setActiveItem(null);
      setActiveType('');
    }
  };

  const handleActiveItem = (item: any, type: string) => {
    setOptionsPosition({ x: item.position.x, y: item.position.y });
    setShowOptions(!showOptions);
    setActiveType(type);
    setActiveItem(item);
  };

  const drawGrid = () => {
    const lines = [];
    const dashPattern = [10, 10];

    for (let i = -LIMIT; i <= LIMIT; i += GRID_SIZE) {
      lines.push(
        <KonvaLine
          key={`v-${i}`}
          points={[i, -LIMIT, i, LIMIT]}
          stroke="#334E46"
          strokeWidth={1}
          dash={dashPattern}
          rotation={50}
        />
      );
      lines.push(
        <KonvaLine
          key={`h-${i}`}
          points={[-LIMIT, i, LIMIT, i + 1]}
          stroke="#334E46"
          strokeWidth={1}
          dash={dashPattern}
          rotation={38}
        />
      );
    }

    return lines;
  };

  const updateGradientPosition = (position: { x: number, y: number }) => {
    const stage = stageRef.current;
    if (stage) {
      const width = sizeWidth / zoomLevel;
      const height = sizeHeight / zoomLevel;

      return (
        <KonvaRect
          x={-position.x / zoomLevel}
          y={-position.y / zoomLevel}
          width={width}
          height={height}
          fillLinearGradientStartPoint={{ x: 0, y: 0 }}
          fillLinearGradientEndPoint={{ x: 0, y: height }}
          fillLinearGradientColorStops={[0, '#065145', 1, '#7FC440']}
        />
      );
    }
  };

  const commonProps = {
    isDraggable,
    updateItem,
    handleActiveItem,
    zoomLevel
  }

  return (
    <Box
      width={`${sizeWidth}px`}
      height={`${sizeHeight}px`}
      border="1px solid black"
      overflow="hidden"
      position="relative"
    >
      <Stage
        height={sizeHeight}
        width={sizeWidth}
        ref={stageRef}
        scale={{ x: zoomLevel, y: zoomLevel }}
        position={stagePosition}
        draggable
        onDragMove={(e) => {
          setStagePosition(e.target.position());
        }}
        onMouseDown={onStageMouseDown}
        onMouseMove={onStageMouseMove}
        onClick={handleCanvasClick}
      >
        <Layer>
          <KonvaRect x={-LIMIT} y={-LIMIT} width={2 * LIMIT} height={2 * LIMIT} fill="#065145"/>
          {updateGradientPosition(stagePosition)}
          <Rect x={0} y={0} width={sizeWidth} height={sizeHeight}/>
          {drawGrid()}
        </Layer>

        <Layer>
          <CarElements cars={cars || []} {...commonProps}/>
          <CardsElements cards={cards || []}{...commonProps}/>
          <RealEstateElements realEstates={realEstates || []}{...commonProps}/>
          <StocksElements stocks={stocks || []}{...commonProps}/>
          <IncomesElements incomes={incomes || []}{...commonProps}/>
          <MutualFundsElements mutualFunds={mutualFunds || []}{...commonProps}/>
          <FixedDepositsElements fixedDeposits={fixedDeposits || []}{...commonProps}/>
          <ExpensesElements expenses={expenses || []}{...commonProps}/>
          <GoldElements golds={golds || []}{...commonProps}/>
          <CryptoElements cryptos={cryptos || []}{...commonProps}/>
          <LiquideCashElements liquidCashs={liquidCashs || []}{...commonProps}/>

          <Transformer ref={transformerRef}/>
        </Layer>
      </Stage>
      {showOptions && (
        <PaintOptions
          optionsPosition={optionsPosition}
          defaultForm={activeItem}
          type={activeType}
          onClose={() => {
            setShowOptions(false);
            setActiveItem(null);
            setActiveType('');
          }}
        />
      )}
      <Box className={`absolute top-0 left-0`} width={`${sizeWidth - 100}px`}>
        <PaintHeader exportClick={onExportClick}/>
      </Box>
      <Box className={`absolute left-10 transform -translate-x-1/2 -translate-y-1/2`} style={{ top: '50%' }}>
        <PaintLeftMenu exportClick={onExportClick} addClick={() => {
          setOptionsPosition({ x: 80, y: (sizeHeight / 2) - 100 })
          setShowOptions(!showOptions)
        }}/>
      </Box>
      <PaintZoom zoomLevel={zoomLevel} handleZoomIn={handleZoomIn} handleZoomOut={handleZoomOut}/>
    </Box>
  );
});

export default Paint;
