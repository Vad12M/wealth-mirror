import { v4 as uuidv4 } from "uuid";
import { Group, Image as KonvaImage, Rect, Text } from "react-konva";
import { IMutualFund } from "@/interfaces/IMutualFund";
import { useRef, useState } from "react";
import { GRID_SIZE } from "@/components/paint/Paint";
import { Button } from "@/ui/button/Button";

export default function MutualFundsElements({
  mutualFunds,
  isDraggable,
  updateItem,
  handleActiveItem,
  zoomLevel,
}: {
  mutualFunds: IMutualFund[];
  isDraggable: boolean;
  updateItem: (id: string, type: string, x: number, y: number) => void;
  handleActiveItem: (item: IMutualFund, type: string) => void;
  zoomLevel: number;
}) {
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    stock: IMutualFund | undefined;
    x: number;
    y: number;
  }>({
    visible: false,
    stock: undefined,
    x: 0,
    y: 0,
  });

  const tooltipRef = useRef(null);
  if (!mutualFunds.length) {
    return null;
  }

  return (
    <>
      {mutualFunds.map((mutualFund) => {
          const image = new Image(GRID_SIZE * 2, GRID_SIZE * 2);
          image.src = mutualFund.image;
          image.id = uuidv4();
          return (
            <Button typeButton={'none'} key={mutualFund._id}>
              <KonvaImage
                key={mutualFund._id}
                image={image}
                x={mutualFund.position.x}
                y={mutualFund.position.y}
                height={180}
                width={90}
                draggable={isDraggable}
                onDragMove={(e) => e.cancelBubble = true}
                onDragStart={(e) => e.cancelBubble = true}
                onDragEnd={(e) => {
                  e.cancelBubble = true;
                  const node = e.target;
                  const { x, y } = node.absolutePosition();
                  updateItem(mutualFund._id, 'mutualFund', x / zoomLevel, y / zoomLevel)
                }}
                onClick={(e) => {
                  e.cancelBubble = true;
                  handleActiveItem(mutualFund, 'mutualFund');
                }}
                onMouseEnter={() => {
                  setTooltip({
                    visible: true,
                    stock: mutualFund,
                    x: mutualFund.position.x + 80,
                    y: mutualFund.position.y,
                  });
                }}
                onMouseLeave={() => {
                  setTooltip({
                    visible: false,
                    stock: undefined,
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
            text={tooltip.stock?.name}
            fill="white"
            fontSize={14}
          />
          <Text
            x={tooltip.x + 10}
            y={tooltip.y + 30}
            text={'Code: ' + tooltip.stock?.code}
            fill="white"
            fontSize={14}
          />
        </Group>
      )}
    </>
  )
}
