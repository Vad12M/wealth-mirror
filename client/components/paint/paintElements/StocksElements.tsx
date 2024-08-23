import { v4 as uuidv4 } from "uuid";
import { Image as KonvaImage } from "react-konva";
import React from "react";
import { GRID_SIZE } from "@/components/paint/Paint";
import { IFortune } from "@/interfaces/IFortune";
import Tooltip from "@/ui/tooltip/tooltip";

export default function StocksElements({
  stocks,
  isDraggable,
  updateItem,
  handleActiveItem,
  zoomLevel,
}: {
  stocks: IFortune[];
  isDraggable: boolean;
  updateItem: (id: string, type: string, x: number, y: number) => void;
  handleActiveItem: (item: IFortune, type: string) => void;
  zoomLevel: number;
}) {

  if (!stocks.length) {
    return null;
  }

  return (
    <>
      {stocks.map((stock) => {
          const image = new Image(GRID_SIZE * 2, GRID_SIZE * 2);
          image.src = stock.image;
          image.id = uuidv4();
          return (
            <KonvaImage
              key={stock._id}
              image={image}
              x={stock.position.x}
              y={stock.position.y}
              height={180}
              width={90}
              draggable={isDraggable}
              onDragMove={(e) => e.cancelBubble = true}
              onDragStart={(e) => e.cancelBubble = true}
              onDragEnd={(e) => {
                e.cancelBubble = true;
                const node = e.target;
                const { x, y } = node.absolutePosition();
                updateItem(stock._id, 'stock', x / zoomLevel, y / zoomLevel)
              }}
              onClick={(e) => {
                e.cancelBubble = true;
                handleActiveItem(stock, 'stock');
              }}
            />
          )
        }
      )}
    </>
  )
}
