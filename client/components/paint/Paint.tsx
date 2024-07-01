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

interface PaintProps {
}

const SIZE = 1200;
const GRID_SIZE = 67;

export const Paint: React.FC<PaintProps> = React.memo(function Paint({}) {
  const {

    imageObjects,
    isDraggable,
    onStageMouseUp,
    onStageMouseDown,
    onStageMouseMove,
    onBgClick,
    onExportClick,
    transformerRef,
    onClear,
    addNewImage,
    stageRef,
  } = usePaint();

  const [showOptions, setShowOptions] = useState(false);
  const [optionsPosition, setOptionsPosition] = useState({ x: 0, y: 0 });
  const [settingPopup, setSettingPopup] = useState(false);


  const handleCanvasClick = useCallback((e: any) => {
    const stage = e.target.getStage();
    const pos = stage.getPointerPosition();
    setOptionsPosition({ x: pos.x, y: pos.y });
    setShowOptions(true);
  }, []);

  const handleCloseOptions = useCallback(() => {
    setShowOptions(false);
  }, []);

  const drawGrid = () => {
    const lines = [];
    for (let i = 0; i < SIZE / GRID_SIZE; i++) {
      lines.push(
        <KonvaLine
          key={`v-${i}`}
          points={[i * GRID_SIZE, 0, i * GRID_SIZE, SIZE]}
          stroke="#D1D1D1"
          strokeWidth={1}
        />
      );
      lines.push(
        <KonvaLine
          key={`h-${i}`}
          points={[0, i * GRID_SIZE, SIZE, i * GRID_SIZE]}
          stroke="#D1D1D1"
          strokeWidth={1}
        />
      );
    }
    return lines;
  };

  return (
    <Box m={4} width={`${SIZE}px`}>
     <div className="bg-black p-4 flex  justify-between">
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
      <Box
        width={`${SIZE}px`}
        height={`${SIZE}px`}
        border="1px solid black"
        mt={4}
        overflow="hidden"
        position="relative"
      >
        <Stage
          height={SIZE}
          width={SIZE}
          ref={stageRef}
          onMouseUp={onStageMouseUp}
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
            {imageObjects.map((image) => (
              <KonvaImage
                key={image.id}
                image={image}
                x={0}
                y={0}
                height={GRID_SIZE * 2}
                width={GRID_SIZE * 2}
                draggable={isDraggable}
                onClick={(e) => {
                  e.cancelBubble = true;
                  setSettingPopup(true);
                  console.log('image clicked')
                }}
              />
            ))}

            {/*{image && (*/}
            {/*  <KonvaImage*/}
            {/*    key={image.id}*/}
            {/*    image={image}*/}
            {/*    x={0}*/}
            {/*    y={0}*/}
            {/*    height={SIZE / 2}*/}
            {/*    width={SIZE / 2}*/}
            {/*    draggable={isDraggable}*/}
            {/*  />*/}
            {/*)}*/}
            {/*{arrows.map((arrow) => (*/}
            {/*  <KonvaArrow*/}
            {/*    key={arrow.id}*/}
            {/*    id={arrow.id}*/}
            {/*    points={arrow.points}*/}
            {/*    fill={arrow.color}*/}
            {/*    stroke={arrow.color}*/}
            {/*    strokeWidth={4}*/}
            {/*    onClick={onShapeClick}*/}
            {/*    draggable={isDraggable}*/}
            {/*  />*/}
            {/*))}*/}
            {/*{rectangles.map((rectangle) => (*/}
            {/*  <KonvaRect*/}
            {/*    key={rectangle.id}*/}
            {/*    x={rectangle?.x}*/}
            {/*    y={rectangle?.y}*/}
            {/*    height={rectangle?.height}*/}
            {/*    width={rectangle?.width}*/}
            {/*    stroke={rectangle?.color}*/}
            {/*    id={rectangle?.id}*/}
            {/*    strokeWidth={4}*/}
            {/*    onClick={onShapeClick}*/}
            {/*    draggable={isDraggable}*/}
            {/*  />*/}
            {/*))}*/}
            {/*{circles.map((circle) => (*/}
            {/*  <KonvaCircle*/}
            {/*    key={circle.id}*/}
            {/*    id={circle.id}*/}
            {/*    x={circle?.x}*/}
            {/*    y={circle?.y}*/}
            {/*    radius={circle?.radius}*/}
            {/*    stroke={circle?.color}*/}
            {/*    strokeWidth={4}*/}
            {/*    onClick={onShapeClick}*/}
            {/*    draggable={isDraggable}*/}
            {/*  />*/}
            {/*))}*/}
            {/*{scribbles.map((scribble) => (*/}
            {/*  <KonvaLine*/}
            {/*    key={scribble.id}*/}
            {/*    id={scribble.id}*/}
            {/*    lineCap="round"*/}
            {/*    lineJoin="round"*/}
            {/*    stroke={scribble?.color}*/}
            {/*    strokeWidth={4}*/}
            {/*    points={scribble.points}*/}
            {/*    onClick={onShapeClick}*/}
            {/*    draggable={isDraggable}*/}
            {/*  />*/}
            {/*))}*/}
            <Transformer ref={transformerRef}/>
          </Layer>
        </Stage>
        {showOptions && (
          <Box
            position="absolute"
            left={optionsPosition.x}
            top={optionsPosition.y}
            className={'p-4 shadow-lg bg-white'}
          >
            <ul className="p-2 flex items-center flex-col space-y-3 text-black">
              <button onClick={() => {
                setShowOptions(false)
                addNewImage('car')
              }}>
                {'Car'}
              </button>
              <button onClick={() => {
                setShowOptions(false)
                addNewImage('house')
              }}>
                {'Real estate'}
              </button>
              <li>Fortune</li>
              <li>Card</li>
              <button
                onClick={() => handleCloseOptions()}
                className={'bg-red-500 text-white p-2 rounded-md'}
              >
                {'Close'}
              </button>
            </ul>
          </Box>
        )}
        <Dialog isOpen={settingPopup} onRequestClose={() => setSettingPopup(false)} className={'p-6'}>
          <Typography text={'Setting Form'}/>
        </Dialog>
      </Box>
    </Box>
  );
});
