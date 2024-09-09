import { v4 as uuidv4 } from "uuid";
import { Group, Image as KonvaImage, Rect, Text } from "react-konva";
import { useRef, useState } from "react";
import { GRID_SIZE } from "@/components/paint/Paint";
import { Button } from "@/ui/button/Button";
import { ILiquidCash } from "@/interfaces/wealths/ILiquidCash";

export default function LiquideCashElements({
  liquidCashs,
  isDraggable,
  updateItem,
  handleActiveItem,
  zoomLevel,
}: {
  liquidCashs: ILiquidCash[];
  isDraggable: boolean;
  updateItem: (id: string, type: string, x: number, y: number) => void;
  handleActiveItem: (item: ILiquidCash, type: string) => void;
  zoomLevel: number;
}) {
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    liquidCash: ILiquidCash | undefined;
    x: number;
    y: number;
  }>({
    visible: false,
    liquidCash: undefined,
    x: 0,
    y: 0,
  });

  const tooltipRef = useRef(null);
  if (!liquidCashs.length) {
    return null;
  }

  return (
    <>
      {liquidCashs.map((liquidCash) => {
          const image = new Image(GRID_SIZE * 2, GRID_SIZE * 2);
          image.src = '/canvas/LiquidCash.svg';
          image.id = uuidv4();
          return (
            <Button typeButton={'none'} key={liquidCash._id}>
              <KonvaImage
                key={liquidCash._id}
                image={image}
                x={liquidCash.position.x}
                y={liquidCash.position.y}
                height={60}
                width={60}
                draggable={isDraggable}
                onDragMove={(e) => e.cancelBubble = true}
                onDragStart={(e) => e.cancelBubble = true}
                onDragEnd={(e) => {
                  e.cancelBubble = true;
                  const node = e.target;
                  const { x, y } = node.absolutePosition();
                  updateItem(liquidCash._id, 'liquidCash', x / zoomLevel, y / zoomLevel)
                }}
                onClick={(e) => {
                  e.cancelBubble = true;
                  handleActiveItem(liquidCash, 'liquidCash');
                }}
                onMouseEnter={() => {
                  setTooltip({
                    visible: true,
                    liquidCash,
                    x: liquidCash.position.x + 80,
                    y: liquidCash.position.y,
                  });
                }}
                onMouseLeave={() => {
                  setTooltip({
                    visible: false,
                    liquidCash: undefined,
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
            text={'Bank Name: ' + tooltip.liquidCash?.bankName}
            fill="white"
            fontSize={14}
          />
          <Text
            x={tooltip.x + 10}
            y={tooltip.y + 30}
            text={'Amount: ' + tooltip.liquidCash?.amount}
            fill="white"
            fontSize={14}
          />
        </Group>
      )}
    </>
  )
}
