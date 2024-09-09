import { v4 as uuidv4 } from "uuid";
import { Group, Image as KonvaImage, Rect, Text } from "react-konva";
import { useRef, useState } from "react";
import { GRID_SIZE } from "@/components/paint/Paint";
import { Button } from "@/ui/button/Button";
import { ISaving } from "@/interfaces/wealths/ISaving";

export default function SavingElements({
  savings,
  isDraggable,
  updateItem,
  handleActiveItem,
  zoomLevel,
}: {
  savings: ISaving[];
  isDraggable: boolean;
  updateItem: (id: string, type: string, x: number, y: number) => void;
  handleActiveItem: (item: ISaving, type: string) => void;
  zoomLevel: number;
}) {
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    saving: ISaving | undefined;
    x: number;
    y: number;
  }>({
    visible: false,
    saving: undefined,
    x: 0,
    y: 0,
  });

  const tooltipRef = useRef(null);
  if (!savings.length) {
    return null;
  }

  return (
    <>
      {savings.map((saving) => {
          const image = new Image(GRID_SIZE * 2, GRID_SIZE * 2);
          image.src = '/canvas/Saving.svg';
          image.id = uuidv4();
          return (
            <Button typeButton={'none'} key={saving._id}>
              <KonvaImage
                key={saving._id}
                image={image}
                x={saving.position.x}
                y={saving.position.y}
                height={70}
                width={60}
                draggable={isDraggable}
                onDragMove={(e) => e.cancelBubble = true}
                onDragStart={(e) => e.cancelBubble = true}
                onDragEnd={(e) => {
                  e.cancelBubble = true;
                  const node = e.target;
                  const { x, y } = node.absolutePosition();
                  updateItem(saving._id, 'saving', x / zoomLevel, y / zoomLevel)
                }}
                onClick={(e) => {
                  e.cancelBubble = true;
                  handleActiveItem(saving, 'saving');
                }}
                onMouseEnter={() => {
                  setTooltip({
                    visible: true,
                    saving,
                    x: saving.position.x + 80,
                    y: saving.position.y,
                  });
                }}
                onMouseLeave={() => {
                  setTooltip({
                    visible: false,
                    saving: undefined,
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
            text={'Name: ' + tooltip.saving?.name}
            fill="white"
            fontSize={14}
          />
          <Text
            x={tooltip.x + 10}
            y={tooltip.y + 30}
            text={'Amount: ' + tooltip.saving?.amount}
            fill="white"
            fontSize={14}
          />
        </Group>
      )}
    </>
  )
}
