import { v4 as uuidv4 } from "uuid";
import { Group, Image as KonvaImage, Rect, Text } from "react-konva";
import { useRef, useState } from "react";
import { GRID_SIZE } from "@/components/paint/Paint";
import { Button } from "@/ui/button/Button";
import { IIncome } from "@/interfaces/wealths/IIncome";

export default function IncomesElements({
  incomes,
  isDraggable,
  updateItem,
  handleActiveItem,
  zoomLevel,
}: {
  incomes: IIncome[];
  isDraggable: boolean;
  updateItem: (id: string, type: string, x: number, y: number) => void;
  handleActiveItem: (item: IIncome, type: string) => void;
  zoomLevel: number;
}) {
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    income: IIncome | undefined;
    x: number;
    y: number;
  }>({
    visible: false,
    income: undefined,
    x: 0,
    y: 0,
  });

  const tooltipRef = useRef(null);
  if (!incomes.length) {
    return null;
  }

  return (
    <>
      {incomes.map((income) => {
          const image = new Image(GRID_SIZE * 2, GRID_SIZE * 2);
          image.src = '/canvas/Income.svg';
          image.id = uuidv4();
          return (
            <Button typeButton={'none'} key={income._id}>
              <KonvaImage
                key={income._id}
                image={image}
                x={income.position.x}
                y={income.position.y}
                height={75}
                width={55}
                draggable={isDraggable}
                onDragMove={(e) => e.cancelBubble = true}
                onDragStart={(e) => e.cancelBubble = true}
                onDragEnd={(e) => {
                  e.cancelBubble = true;
                  const node = e.target;
                  const { x, y } = node.absolutePosition();
                  updateItem(income._id, 'income', x / zoomLevel, y / zoomLevel)
                }}
                onClick={(e) => {
                  e.cancelBubble = true;
                  handleActiveItem(income, 'income');
                }}
                onMouseEnter={() => {
                  setTooltip({
                    visible: true,
                    income,
                    x: income.position.x + 80,
                    y: income.position.y,
                  });
                }}
                onMouseLeave={() => {
                  setTooltip({
                    visible: false,
                    income: undefined,
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
            text={tooltip.income?.category}
            fill="white"
            fontSize={14}
          />
          <Text
            x={tooltip.x + 10}
            y={tooltip.y + 30}
            text={'Frequency: ' + tooltip.income?.frequency}
            fill="white"
            fontSize={14}
          />
        </Group>
      )}
    </>
  )
}
