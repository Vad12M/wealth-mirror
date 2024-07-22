import React, { useCallback, useState } from "react";
import {
  Stage,
  Layer,
  Rect as KonvaRect,
  Image as KonvaImage,
  Line as KonvaLine,
  Transformer,
} from "react-konva";
import { Box } from "@chakra-ui/react";
import usePaint from "../../hooks/usePaint";
import Dialog from "@/ui/dialog/dialog.component";
import Typography from "@/ui/typography/Typography";
import PaintOptions from "@/components/paint/PaintOptions";
import CanvasHandlerForms from "@/components/paint/CanvasHandlerForms";
import { v4 as uuidv4 } from "uuid";
import CarForm from "@/components/paint/CarForm";
import { ICar } from "@/interfaces/ICar";
import { ICard } from "@/interfaces/ICard";
import CardForm from "@/components/paint/CardForm";
import { IRealEstate } from "@/interfaces/IRealEstate";
import RealEstateForm from "@/components/paint/RealEstateForm";
import { IFortune } from "@/interfaces/IFortune";
import FortuneForm from "@/components/paint/FortuneForm";
import { Button } from "@/ui/button/Button";

interface PaintProps {
}

export const GRID_SIZE = 67;
const LIMIT = 10000;

export const Paint: React.FC<PaintProps> = React.memo(function Paint({}) {
  const {
    isDraggable,
    onStageMouseDown,
    onStageMouseMove,
    onBgClick,
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
  const [settingPopup, setSettingPopup] = useState(false);
  const [newItemType, setNewItemType] = useState<string>('');
  const [activeCar, setActiveCar] = useState<ICar>();
  const [activeCard, setActiveCard] = useState<ICard>();
  const [activeRealEstate, setActiveRealEstate] = useState<IRealEstate>();
  const [activeFortune, setActiveFortune] = useState<IFortune>();
  const [stagePosition, setStagePosition] = useState({ x: 0, y: 0 });

  const handleCanvasClick = useCallback((e: any) => {
    const stage = e.target.getStage();
    const pos = stage.getPointerPosition();
    setOptionsPosition({ x: pos.x, y: pos.y });
    setShowOptions(true);
  }, []);

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
          rotation={45}
        />
      );
      lines.push(
        <KonvaLine
          key={`h-${i}`}
          points={[-LIMIT, i, LIMIT, i + 1]}
          stroke="#334E46"
          strokeWidth={1}
          dash={dashPattern}
          rotation={30}
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
      {/*<div className="bg-black p-4 flex justify-between">*/}
      {/*  <Typography text={'Canvas'} type={'heading3'}/>*/}
      {/*  <PaintMenu*/}
      {/*    onClear={onClear}*/}
      {/*    onExportClick={onExportClick}*/}
      {/*  />*/}
      {/*</div>*/}
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
          <KonvaRect
            x={-LIMIT}
            y={-LIMIT}
            width={2 * LIMIT}
            height={2 * LIMIT}
            fill="#233B34"
            cla
          />
          {drawGrid()}
          <KonvaRect
            x={0}
            y={0}
            height={sizeHeight}
            width={sizeWidth}
            fill="transparent"
            id="bg"
            onClick={onBgClick}
          />
        </Layer>
        <Layer>
          {(cars || []).map((car) => {
            const image = new Image(GRID_SIZE, GRID_SIZE);
            image.src = car.image;
            image.id = uuidv4();
            return (
              <KonvaImage
                key={car._id}
                image={image}
                x={car.position.x}
                y={car.position.y}
                height={64}
                width={64}
                draggable={isDraggable}
                onDragEnd={(e) => {
                  const node = e.target;
                  const { x, y } = node.absolutePosition();
                  updateItem(car._id, 'car', x / zoomLevel, y / zoomLevel)
                }}
                onClick={(e) => {
                  e.cancelBubble = true;
                  setActiveCar(car);
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
                  height={GRID_SIZE}
                  width={GRID_SIZE}
                  draggable={isDraggable}
                  onDragEnd={(e) => {
                    const node = e.target;
                    const { x, y } = node.absolutePosition();
                    updateItem(card._id, 'card', x / zoomLevel, y / zoomLevel)
                  }}
                  onClick={(e) => {
                    e.cancelBubble = true;
                    setActiveCard(card);
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
                  height={104}
                  width={68}
                  draggable={isDraggable}
                  onDragEnd={(e) => {
                    const node = e.target;
                    const { x, y } = node.absolutePosition();
                    updateItem(realEstate._id, 'realEstate', x / zoomLevel, y / zoomLevel)
                  }}
                  onClick={(e) => {
                    e.cancelBubble = true;
                    setActiveRealEstate(realEstate);
                  }}
                />
              )
            }
          )}

          {(fortunes || []).map((fortune) => {
              const image = new Image(GRID_SIZE * 2, GRID_SIZE * 2);
              // @ts-ignore
              image.src = fortune.image;
              image.id = uuidv4();
              return (
                <KonvaImage
                  key={fortune._id}
                  image={image}
                  x={fortune.position.x}
                  y={fortune.position.y}
                  height={GRID_SIZE * 3 }
                  width={GRID_SIZE * 2}
                  draggable={isDraggable}
                  onDragEnd={(e) => {
                    const node = e.target;
                    const { x, y } = node.absolutePosition();
                    updateItem(fortune._id, 'fortune', x / zoomLevel, y / zoomLevel)
                  }}
                  onClick={(e) => {
                    e.cancelBubble = true;
                    setActiveFortune(fortune);
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
          addNewItem={(type) => {
            setNewItemType(type);
            setSettingPopup(true);
          }}
          onClose={() => setShowOptions(false)}
        />
      )}
      <Dialog isOpen={settingPopup} onRequestClose={() => setSettingPopup(false)} className={'p-12'}>
        <CanvasHandlerForms type={newItemType} position={optionsPosition} onClose={() => setSettingPopup(false)}/>
      </Dialog>

      <Dialog isOpen={!!activeCar} onRequestClose={() => setActiveCar(undefined)} className={'p-12'}>
        <CarForm defaultForm={activeCar} onClose={() => setActiveCar(undefined)}/>
      </Dialog>

      <Dialog isOpen={!!activeCard} onRequestClose={() => setActiveCard(undefined)} className={'p-12'}>
        <CardForm defaultForm={activeCard} onClose={() => setActiveCard(undefined)}/>
      </Dialog>

      <Dialog isOpen={!!activeRealEstate} onRequestClose={() => setActiveRealEstate(undefined)} className={'p-12'}>
        <RealEstateForm defaultForm={activeRealEstate} onClose={() => setActiveRealEstate(undefined)}/>
      </Dialog>

      <Dialog isOpen={!!activeFortune} onRequestClose={() => setActiveFortune(undefined)} className={'p-12'}>
        <FortuneForm defaultForm={activeFortune} onClose={() => setActiveFortune(undefined)}/>
      </Dialog>
      <Box
        className='space-x-2 flex items-center absolute right-2 bottom-4 rounded-[45px] p-2'
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.50)',
        }}
      >
        <Button
          onClick={handleZoomOut}
          typeButton="none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4.16675 10H15.8334" stroke="white" strokeWidth="1.66667" strokeLinecap="round"
                  strokeLinejoin="round"/>
          </svg>
        </Button>
        <Typography
          text={`${Math.round(zoomLevel * 100)}%`}
          type={'body2'}
        />
        <Button
          onClick={handleZoomIn}
          typeButton="none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M9.99984 15.8332V9.99984M9.99984 9.99984V4.1665M9.99984 9.99984L4.1665 9.99984M9.99984 9.99984L15.8332 9.99984"
              stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
      </Box>
    </Box>

  );
});

export default Paint;
