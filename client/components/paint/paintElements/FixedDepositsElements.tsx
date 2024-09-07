import { v4 as uuidv4 } from "uuid";
import { Group, Image as KonvaImage, Rect, Text } from "react-konva";
import { useRef, useState } from "react";
import { GRID_SIZE } from "@/components/paint/Paint";
import { Button } from "@/ui/button/Button";
import { IFixedDeposit } from "@/interfaces/wealths/IFixedDeposit";

export default function FixedDepositsElements({
  fixedDeposits,
  isDraggable,
  updateItem,
  handleActiveItem,
  zoomLevel,
}: {
  fixedDeposits: IFixedDeposit[];
  isDraggable: boolean;
  updateItem: (id: string, type: string, x: number, y: number) => void;
  handleActiveItem: (item: IFixedDeposit, type: string) => void;
  zoomLevel: number;
}) {
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    fixedDeposit: IFixedDeposit | undefined;
    x: number;
    y: number;
  }>({
    visible: false,
    fixedDeposit: undefined,
    x: 0,
    y: 0,
  });

  const tooltipRef = useRef(null);
  if (!fixedDeposits.length) {
    return null;
  }

  return (
    <>
      {fixedDeposits.map((fixedDeposit) => {
          const image = new Image(GRID_SIZE * 2, GRID_SIZE * 2);
          image.src = '/canvas/FixedDeposit.svg';
          image.id = uuidv4();
          return (
            <Button typeButton={'none'} key={fixedDeposit._id}>
              <KonvaImage
                key={fixedDeposit._id}
                image={image}
                x={fixedDeposit.position.x}
                y={fixedDeposit.position.y}
                height={70}
                width={70}
                draggable={isDraggable}
                onDragMove={(e) => e.cancelBubble = true}
                onDragStart={(e) => e.cancelBubble = true}
                onDragEnd={(e) => {
                  e.cancelBubble = true;
                  const node = e.target;
                  const { x, y } = node.absolutePosition();
                  updateItem(fixedDeposit._id, 'fixedDeposit', x / zoomLevel, y / zoomLevel)
                }}
                onClick={(e) => {
                  e.cancelBubble = true;
                  handleActiveItem(fixedDeposit, 'fixedDeposit');
                }}
                onMouseEnter={() => {
                  setTooltip({
                    visible: true,
                    fixedDeposit,
                    x: fixedDeposit.position.x + 80,
                    y: fixedDeposit.position.y,
                  });
                }}
                onMouseLeave={() => {
                  setTooltip({
                    visible: false,
                    fixedDeposit: undefined,
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
            text={tooltip.fixedDeposit?.name}
            fill="white"
            fontSize={14}
          />
          <Text
            x={tooltip.x + 10}
            y={tooltip.y + 30}
            text={'Amount: ' + tooltip.fixedDeposit?.amount}
            fill="white"
            fontSize={14}
          />
        </Group>
      )}
    </>
  )
}