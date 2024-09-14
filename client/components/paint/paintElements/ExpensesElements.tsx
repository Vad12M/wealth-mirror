import { v4 as uuidv4 } from "uuid";
import { Group, Image as KonvaImage, Rect, Text } from "react-konva";
import { useRef, useState } from "react";
import { GRID_SIZE } from "@/components/paint/Paint";
import { Button } from "@/ui/button/Button";
import { IExpenses } from "@/interfaces/wealths/IExpenses";

export default function ExpensesElements({
  expenses,
  isDraggable,
  updateItem,
  handleActiveItem,
  zoomLevel,
}: {
  expenses: IExpenses[];
  isDraggable: boolean;
  updateItem: (id: string, type: string, x: number, y: number) => void;
  handleActiveItem: (item: IExpenses, type: string) => void;
  zoomLevel: number;
}) {
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    expense: IExpenses | undefined;
    x: number;
    y: number;
  }>({
    visible: false,
    expense: undefined,
    x: 0,
    y: 0,
  });

  const tooltipRef = useRef(null);
  if (!expenses.length) {
    return null;
  }

  return (
    <>
      {expenses.map((expense) => {
          const image = new Image(GRID_SIZE * 2, GRID_SIZE * 2);
          image.src = '/canvas/Expenses.svg';
          image.id = uuidv4();
          return (
            <Button typeButton={'none'} key={expense._id}>
              <KonvaImage
                key={expense._id}
                image={image}
                x={expense.position.x}
                y={expense.position.y}
                height={100}
                width={80}
                draggable={isDraggable}
                onDragMove={(e) => e.cancelBubble = true}
                onDragStart={(e) => e.cancelBubble = true}
                onDragEnd={(e) => {
                  e.cancelBubble = true;
                  const node = e.target;
                  const { x, y } = node.absolutePosition();
                  updateItem(expense._id, 'expense', x / zoomLevel, y / zoomLevel)
                }}
                onClick={(e) => {
                  e.cancelBubble = true;
                  handleActiveItem(expense, 'expense');
                }}
                onMouseEnter={() => {
                  setTooltip({
                    visible: true,
                    expense,
                    x: expense.position.x + 80,
                    y: expense.position.y,
                  });
                }}
                onMouseLeave={() => {
                  setTooltip({
                    visible: false,
                    expense: undefined,
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
            text={tooltip.expense?.category}
            fill="white"
            fontSize={14}
          />
          <Text
            x={tooltip.x + 10}
            y={tooltip.y + 30}
            text={'Type: ' + tooltip.expense?.type}
            fill="white"
            fontSize={14}
          />
        </Group>
      )}
    </>
  )
}
