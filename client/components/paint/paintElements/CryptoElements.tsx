import { v4 as uuidv4 } from "uuid";
import { Group, Image as KonvaImage, Rect, Text } from "react-konva";
import { useRef, useState } from "react";
import { GRID_SIZE } from "@/components/paint/Paint";
import { Button } from "@/ui/button/Button";
import { ICrypto } from "@/interfaces/ICrypto";

export default function CryptoElements({
  cryptos,
  isDraggable,
  updateItem,
  handleActiveItem,
  zoomLevel,
}: {
  cryptos: ICrypto[];
  isDraggable: boolean;
  updateItem: (id: string, type: string, x: number, y: number) => void;
  handleActiveItem: (item: ICrypto, type: string) => void;
  zoomLevel: number;
}) {
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    crypto: ICrypto | undefined;
    x: number;
    y: number;
  }>({
    visible: false,
    crypto: undefined,
    x: 0,
    y: 0,
  });

  const tooltipRef = useRef(null);
  if (!cryptos.length) {
    return null;
  }

  return (
    <>
      {cryptos.map((crypto) => {
          const image = new Image(GRID_SIZE * 2, GRID_SIZE * 2);
          image.src = '/canvas/Crypto.svg';
          image.id = uuidv4();
          return (
            <Button typeButton={'none'} key={crypto._id}>
              <KonvaImage
                key={crypto._id}
                image={image}
                x={crypto.position.x}
                y={crypto.position.y}
                height={60}
                width={40}
                draggable={isDraggable}
                onDragMove={(e) => e.cancelBubble = true}
                onDragStart={(e) => e.cancelBubble = true}
                onDragEnd={(e) => {
                  e.cancelBubble = true;
                  const node = e.target;
                  const { x, y } = node.absolutePosition();
                  updateItem(crypto._id, 'crypto', x / zoomLevel, y / zoomLevel)
                }}
                onClick={(e) => {
                  e.cancelBubble = true;
                  handleActiveItem(crypto, 'crypto');
                }}
                onMouseEnter={() => {
                  setTooltip({
                    visible: true,
                    crypto,
                    x: crypto.position.x + 80,
                    y: crypto.position.y,
                  });
                }}
                onMouseLeave={() => {
                  setTooltip({
                    visible: false,
                    crypto: undefined,
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
            text={'Currency Name: ' + tooltip.crypto?.currencyName}
            fill="white"
            fontSize={14}
          />
          <Text
            x={tooltip.x + 10}
            y={tooltip.y + 30}
            text={'Code: ' + tooltip.crypto?.code}
            fill="white"
            fontSize={14}
          />
        </Group>
      )}
    </>
  )
}
