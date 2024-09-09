import { v4 as uuidv4 } from "uuid";
import { Group, Image as KonvaImage, Rect, Text } from "react-konva";
import { useRef, useState } from "react";
import { GRID_SIZE } from "@/components/paint/Paint";
import { Button } from "@/ui/button/Button";
import { IGold } from "@/interfaces/wealths/IGold";

export default function GoldElements({
  golds,
  isDraggable,
  updateItem,
  handleActiveItem,
  zoomLevel,
}: {
  golds: IGold[];
  isDraggable: boolean;
  updateItem: (id: string, type: string, x: number, y: number) => void;
  handleActiveItem: (item: IGold, type: string) => void;
  zoomLevel: number;
}) {
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    gold: IGold | undefined;
    x: number;
    y: number;
  }>({
    visible: false,
    gold: undefined,
    x: 0,
    y: 0,
  });

  const tooltipRef = useRef(null);
  if (!golds.length) {
    return null;
  }

  return (
    <>
      {golds.map((gold) => {
          const image = new Image(GRID_SIZE * 2, GRID_SIZE * 2);
          image.src = '/canvas/Gold.svg';
          image.id = uuidv4();
          return (
            <Button typeButton={'none'} key={gold._id}>
              <KonvaImage
                key={gold._id}
                image={image}
                x={gold.position.x}
                y={gold.position.y}
                height={70}
                width={70}
                draggable={isDraggable}
                onDragMove={(e) => e.cancelBubble = true}
                onDragStart={(e) => e.cancelBubble = true}
                onDragEnd={(e) => {
                  e.cancelBubble = true;
                  const node = e.target;
                  const { x, y } = node.absolutePosition();
                  updateItem(gold._id, 'gold', x / zoomLevel, y / zoomLevel)
                }}
                onClick={(e) => {
                  e.cancelBubble = true;
                  handleActiveItem(gold, 'gold');
                }}
                onMouseEnter={() => {
                  setTooltip({
                    visible: true,
                    gold,
                    x: gold.position.x + 80,
                    y: gold.position.y,
                  });
                }}
                onMouseLeave={() => {
                  setTooltip({
                    visible: false,
                    gold: undefined,
                    x: 0,
                    y: 0,
                  });
                }}
              />
            </Button>
          )
        }
      )}

      {tooltip.visible && (
        <Group ref={tooltipRef}>
          <Rect
            x={tooltip.x}
            y={tooltip.y}
            width={320}
            height={70}
            fill="black"
            opacity={0.75}
            cornerRadius={4}
          />
          <Text
            x={tooltip.x + 10}
            y={tooltip.y + 10}
            text={'Gold'}
            fill="white"
            fontSize={14}
          />
          <Text
            x={tooltip.x + 10}
            y={tooltip.y + 30}
            text={'Type: ' + tooltip.gold?.type}
            fill="white"
            fontSize={14}
          />
        </Group>
      )}
    </>
  )
}
