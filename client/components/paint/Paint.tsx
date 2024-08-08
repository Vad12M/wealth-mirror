import React, { useState } from "react";
import {
  Stage,
  Layer,
  Rect as KonvaRect,
  Image as KonvaImage,
  Line as KonvaLine,
  Transformer, Rect,
} from "react-konva";
import { Box } from "@chakra-ui/react";
import usePaint from "../../hooks/usePaint";
import Typography from "@/ui/typography/Typography";
import PaintOptions from "@/components/paint/PaintOptions";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/ui/button/Button";
import PaintHeader from "@/components/paint/PaintHeader";
import PaintLeftMenu from "@/components/paint/PaintLeftMenu";

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
    cars,
    cards,
    realEstates,
    fortunes,
    updateItem
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
  }

  const handleActiveItem = (item: any, type: string) => {
    setOptionsPosition({ x: item.position.x, y: item.position.y });
    setShowOptions(!showOptions);
    setActiveType(type);
    setActiveItem(item);
  }

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


  const handleDragEnd = (e: any) => {
    if (!isDraggable) {
      setStagePosition(e.target.position());
    }
  };

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
        onDragEnd={handleDragEnd}
        onMouseDown={onStageMouseDown}
        onMouseMove={onStageMouseMove}
        onClick={handleCanvasClick}
      >
        <Layer>
          <Rect
            x={-LIMIT}
            y={-LIMIT}
            width={2 * LIMIT}
            height={2 * LIMIT}
            // fill="#233B34"
            fillLinearGradientStartPoint={{ x: 0, y: 0 }}
            fillLinearGradientEndPoint={{ x: 0, y: sizeHeight }}
            fillLinearGradientColorStops={[0, '#065145', 1, '#7FC440']}
          />
          <Rect
            x={0}
            y={0}
            width={sizeWidth}
            height={sizeHeight}
          />
          {drawGrid()}
        </Layer>

        <Layer>
          {(cars || []).map((car) => {
            const image = new Image(GRID_SIZE, GRID_SIZE);
            image.src = car.image;
            image.id = uuidv4();
            let height = 100;
            let width = 100;

            switch (car.type) {
              case 'car':
              case 'oldCar':
                height = 105;
                width = 100;
                break;
              case 'bike':
              case 'scooter':
                height = 70;
                width = 70;
                break;
            }

            return (
              <KonvaImage
                key={car._id}
                image={image}
                x={car.position.x}
                y={car.position.y}
                height={height}
                width={width}
                draggable={isDraggable}
                onDragEnd={(e) => {
                  const node = e.target;
                  const { x, y } = node.absolutePosition();
                  updateItem(car._id, 'car', x / zoomLevel, y / zoomLevel)
                }}
                onClick={(e) => {
                  e.cancelBubble = true;
                  handleActiveItem(car, 'car');
                }}
              />
            )
          })}

          {(cards || []).map((card) => {
              const image = new Image(GRID_SIZE, GRID_SIZE);
              // @ts-ignore
              image.src = card.image;
              image.id = uuidv4();
              return (
                <KonvaImage
                  key={card._id}
                  image={image}
                  x={card.position.x}
                  y={card.position.y}
                  height={90}
                  width={70}
                  draggable={isDraggable}
                  onDragEnd={(e) => {
                    const node = e.target;
                    const { x, y } = node.absolutePosition();
                    updateItem(card._id, 'card', x / zoomLevel, y / zoomLevel)
                  }}
                  onClick={(e) => {
                    e.cancelBubble = true;
                    handleActiveItem(card, 'card');
                  }}
                />
              )
            }
          )}

          {(realEstates || []).map((realEstate) => {
              const image = new Image(GRID_SIZE, GRID_SIZE);
              // @ts-ignore
              image.src = realEstate.image;
              image.id = uuidv4();
              return (
                <KonvaImage
                  key={realEstate._id}
                  image={image}
                  x={realEstate.position.x}
                  y={realEstate.position.y}
                  height={550}
                  width={450}
                  draggable={isDraggable}
                  onDragEnd={(e) => {
                    const node = e.target;
                    const { x, y } = node.absolutePosition();
                    updateItem(realEstate._id, 'realEstate', x / zoomLevel, y / zoomLevel)
                  }}
                  onClick={(e) => {
                    e.cancelBubble = true;
                    handleActiveItem(realEstate, 'realEstate');
                  }}
                />
              )
            }
          )}

          {(fortunes || []).map((fortune) => {
              const image = new Image(GRID_SIZE * 2, GRID_SIZE * 2);
              let height = 100;
              let width = 100;

              switch (fortune.type) {
                case 'stock':
                  height = 180;
                  width = 90;
                  break;
                case 'mutualFund':
                  height = 190;
                  width = 100;
                  break;
                case 'bond':
                  height = 190;
                  width = 105;
                  break;
                case 'epf':
                case 'ppf':
                case 'nps':
                  height = 100;
                  width = 100;
                  break;
              }

              // @ts-ignore
              image.src = fortune.image;
              image.id = uuidv4();
              return (
                <KonvaImage
                  key={fortune._id}
                  image={image}
                  x={fortune.position.x}
                  y={fortune.position.y}
                  height={height}
                  width={width}
                  draggable={isDraggable}
                  onDragEnd={(e) => {
                    const node = e.target;
                    const { x, y } = node.absolutePosition();
                    updateItem(fortune._id, 'fortune', x / zoomLevel, y / zoomLevel)
                  }}
                  onClick={(e) => {
                    e.cancelBubble = true;
                    handleActiveItem(fortune, 'fortune');
                  }}
                />
              )
            }
          )}
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
      <Box
        className='space-x-2 flex items-center absolute right-8 bottom-6 rounded-[45px] p-2'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.50)' }}
      >
        <Button onClick={handleZoomOut} typeButton="none">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4.16675 10H15.8334" stroke="white" strokeWidth="1.66667" strokeLinecap="round"
                  strokeLinejoin="round"/>
          </svg>
        </Button>
        <Typography text={`${Math.round(zoomLevel * 100)}%`} type={'body2'}/>
        <Button onClick={handleZoomIn} typeButton="none">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M9.99984 15.8332V9.99984M9.99984 9.99984V4.1665M9.99984 9.99984L4.1665 9.99984M9.99984 9.99984L15.8332 9.99984"
              stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
      </Box>
      <Box className={`absolute top-0 left-0`} width={`${sizeWidth - 100}px`}>
        <PaintHeader exportClick={onExportClick}/>
      </Box>
      <Box className={`absolute left-10 transform -translate-x-1/2 -translate-y-1/2`} style={{ top: '50%' }}>
        <PaintLeftMenu exportClick={onExportClick} addClick={() => {
          setOptionsPosition({
            x: 80,
            y: (sizeHeight / 2) - 100
          })
          setShowOptions(!showOptions)
        }}/>
      </Box>
    </Box>
  );
});

export default Paint;
