import React, { useCallback, useState } from "react";
import {
  Stage,
  Layer,
  Rect as KonvaRect,
  Image as KonvaImage,
  Circle as KonvaCircle,
  Line as KonvaLine,
  Arrow as KonvaArrow,
  Transformer,
} from "react-konva";
import {
  Box,
} from "@chakra-ui/react";
import PaintMenu from "@/components/paint/PaintMenu";
import usePaint from "../../hooks/usePaint";

interface PaintProps {
}


const SIZE = 500;

export const Paint: React.FC<PaintProps> = React.memo(function Paint({}) {
  const {
    color,
    setColor,
    drawAction,
    setDrawAction,
    scribbles,
    rectangles,
    circles,
    arrows,
    image,
    isDraggable,
    onStageMouseUp,
    onStageMouseDown,
    onStageMouseMove,
    onBgClick,
    onShapeClick,
    fileRef,
    onImportImageSelect,
    onImportImageClick,
    onExportClick,
    transformerRef,
    onClear,
    stageRef
  } = usePaint();

  const [showOptions, setShowOptions] = useState(false);
  const [optionsPosition, setOptionsPosition] = useState({ x: 0, y: 0 });

  const handleCanvasClick = useCallback((e) => {
    const stage = e.target.getStage();
    const pos = stage.getPointerPosition();
    setOptionsPosition({ x: pos.x, y: pos.y });
    setShowOptions(true);
  }, []);

  const handleCloseOptions = useCallback(() => {
    setShowOptions(false);
  }, []);

  return (
    <Box m={4} width={`${SIZE}px`}>
      <PaintMenu
        setDrawAction={setDrawAction}
        drawAction={drawAction}
        color={color}
        setColor={setColor}
        onClear={onClear}
        fileRef={fileRef}
        onImportImageSelect={onImportImageSelect}
        onImportImageClick={onImportImageClick}
        onExportClick={onExportClick}
      />

      <Box
        width={`${SIZE}px`}
        height={`${SIZE}px`}
        border="1px solid black"
        mt={4}
        overflow="hidden"
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
            <KonvaRect
              x={0}
              y={0}
              height={SIZE}
              width={SIZE}
              fill="white"
              id="bg"
              onClick={onBgClick}
            />
            {image && (
              <KonvaImage
                image={image}
                x={0}
                y={0}
                height={SIZE / 2}
                width={SIZE / 2}
                draggable={isDraggable}
              />
            )}
            {arrows.map((arrow) => (
              <KonvaArrow
                key={arrow.id}
                id={arrow.id}
                points={arrow.points}
                fill={arrow.color}
                stroke={arrow.color}
                strokeWidth={4}
                onClick={onShapeClick}
                draggable={isDraggable}
              />
            ))}
            {rectangles.map((rectangle) => (
              <KonvaRect
                key={rectangle.id}
                x={rectangle?.x}
                y={rectangle?.y}
                height={rectangle?.height}
                width={rectangle?.width}
                stroke={rectangle?.color}
                id={rectangle?.id}
                strokeWidth={4}
                onClick={onShapeClick}
                draggable={isDraggable}
              />
            ))}
            {circles.map((circle) => (
              <KonvaCircle
                key={circle.id}
                id={circle.id}
                x={circle?.x}
                y={circle?.y}
                radius={circle?.radius}
                stroke={circle?.color}
                strokeWidth={4}
                onClick={onShapeClick}
                draggable={isDraggable}
              />
            ))}
            {scribbles.map((scribble) => (
              <KonvaLine
                key={scribble.id}
                id={scribble.id}
                lineCap="round"
                lineJoin="round"
                stroke={scribble?.color}
                strokeWidth={4}
                points={scribble.points}
                onClick={onShapeClick}
                draggable={isDraggable}
              />
            ))}
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
            <ul className="p-2 flex items-center flex-col space-y-3">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <button
                onClick={() => handleCloseOptions()}
                className={'bg-red-500 text-white p-2 rounded-md'}
              >
                Close
              </button>
            </ul>
          </Box>
        )}
      </Box>
    </Box>
  );
});
