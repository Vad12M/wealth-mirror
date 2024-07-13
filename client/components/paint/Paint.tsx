import React, { useCallback, useState } from "react";
import {
  Stage,
  Layer,
  Rect as KonvaRect,
  Image as KonvaImage,
  Line as KonvaLine,
  Transformer,
} from "react-konva";
import {
  Box,
} from "@chakra-ui/react";
import usePaint from "../../hooks/usePaint";
import Dialog from "@/ui/dialog/dialog.component";
import Typography from "@/ui/typography/Typography";
import PaintMenu from "@/components/paint/PaintMenu";
import PaintOptions from "@/components/paint/PaintOptions";
import CanvasHandlerForms from "@/components/paint/CanvasHandlerForms";
import { v4 as uuidv4 } from "uuid";
import CarForm from "@/components/paint/CarForm";
import { ICar } from "@/interfaces/ICar";
import { ICard } from "@/interfaces/ICard";
import CardForm from "@/components/paint/CardForm";

interface PaintProps {
}

const GRID_SIZE = 67;
const LIMIT = 10000;

export const Paint: React.FC<PaintProps> = React.memo(function Paint({}) {
  const {
    isDraggable,
    onStageMouseUp,
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
    SIZE,
    cars,
    cards
  } = usePaint();

  const [showOptions, setShowOptions] = useState(false);
  const [optionsPosition, setOptionsPosition] = useState({ x: 0, y: 0 });
  const [settingPopup, setSettingPopup] = useState(false);
  const [newItemType, setNewItemType] = useState<string>('');
  const [activeCar, setActiveCar] = useState<ICar>();
  const [activeCard, setActiveCard] = useState<ICard>();


  const handleCanvasClick = useCallback((e: any) => {
    const stage = e.target.getStage();
    const pos = stage.getPointerPosition();
    setOptionsPosition({ x: pos.x, y: pos.y });
    setShowOptions(true);
  }, []);

  const drawGrid = () => {
    const lines = [];
    for (let i = -LIMIT; i <= LIMIT; i += GRID_SIZE) {
      lines.push(
        <KonvaLine
          key={`v-${i}`}
          points={[i, -LIMIT, i, LIMIT]}
          stroke="#D1D1D1"
          strokeWidth={1}
        />
      );
      lines.push(
        <KonvaLine
          key={`h-${i}`}
          points={[-LIMIT, i, LIMIT, i]}
          stroke="#D1D1D1"
          strokeWidth={1}
        />
      );
    }

    return lines;
  };

  return (
    <Box m={4} width={`${SIZE}px`}>
      <div className="bg-black p-4 flex justify-between">
        <Typography text={'Canvas'} type={'heading3'}/>
        <PaintMenu
          // setDrawAction={setDrawAction}
          // drawAction={drawAction}
          // color={color}
          // setColor={setColor}
          onClear={onClear}
          // fileRef={fileRef}
          // onImportImageSelect={onImportImageSelect}
          // onImportImageClick={onImportImageClick}
          onExportClick={onExportClick}
        />
      </div>
      <Box mb={2} className={'space-x-2 flex py-2'}>
        <button onClick={handleZoomIn} className='text-black px-4 py-2 border rounded-full'>{'+'}</button>
        <button onClick={handleZoomOut} className='text-black px-4 py-2 border rounded-full'>{'-'}</button>
      </Box>

      <Box
        width={`${SIZE}px`}
        height={`${SIZE}px`}
        border="1px solid black"
        overflow="hidden"
        position="relative"
      >
        <Stage
          height={SIZE}
          width={SIZE}
          ref={stageRef}
          scale={{ x: zoomLevel, y: zoomLevel }}
          // onMouseUp={onStageMouseUp}
          onMouseDown={onStageMouseDown}
          onMouseMove={onStageMouseMove}
          onClick={handleCanvasClick}
        >
          <Layer>
            {drawGrid()}
            <KonvaRect
              x={0}
              y={0}
              height={SIZE}
              width={SIZE}
              fill="transparent"
              id="bg"
              onClick={onBgClick}
            />
          </Layer>
          <Layer>
            {(cars || []).map((car) => {
                const image = new Image(SIZE / 2, SIZE / 2);
                image.src = car.image;
                image.id = uuidv4();
                return (
                  <KonvaImage
                    key={car._id}
                    image={image}
                    x={car.position.x}
                    y={car.position.y}
                    height={GRID_SIZE}
                    width={GRID_SIZE}
                    draggable={isDraggable}
                    onMouseUp={() => onStageMouseUp('car', car._id)}
                    onClick={(e) => {
                      e.cancelBubble = true;
                      setActiveCar(car);
                    }}
                  />
                )
              }
            )}

            {(cards || []).map((card) => {
                const image = new Image(SIZE / 2, SIZE / 2);
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
                    onMouseUp={() => onStageMouseUp('card', card._id)}
                    onClick={(e) => {
                      e.cancelBubble = true;
                      setActiveCard(card);
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
              setNewItemType(type)
              setShowOptions(false)
              setSettingPopup(true)
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
      </Box>
    </Box>
  );
});
