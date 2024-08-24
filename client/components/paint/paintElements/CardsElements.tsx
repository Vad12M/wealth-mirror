import { v4 as uuidv4 } from "uuid";
import { Image as KonvaImage } from "react-konva";
import React from "react";
import { GRID_SIZE } from "@/components/paint/Paint";
import { ICard } from "@/interfaces/ICard";
import { Button } from "@/ui/button/Button";

export default function CardsElements({
  cards,
  isDraggable,
  updateItem,
  handleActiveItem,
  zoomLevel,
}: {
  cards: ICard[];
  isDraggable: boolean;
  updateItem: (id: string, type: string, x: number, y: number) => void;
  handleActiveItem: (item: ICard, type: string) => void;
  zoomLevel: number;
}) {

  if (!cards.length) {
    return null;
  }

  return (
    <>
      {cards.map((card) => {
          const image = new Image(GRID_SIZE * 2, GRID_SIZE * 2);
          image.src = card.image || '';
          image.id = uuidv4();
          return (
            <Button typeButton={'none'}>
              <KonvaImage
                key={card._id}
                image={image}
                x={card.position.x}
                y={card.position.y}
                height={90}
                width={70}
                draggable={isDraggable}
                onDragMove={(e) => e.cancelBubble = true}
                onDragStart={(e) => e.cancelBubble = true}
                onDragEnd={(e) => {
                  e.cancelBubble = true;
                  const node = e.target;
                  const { x, y } = node.absolutePosition();
                  updateItem(card._id, 'card', x / zoomLevel, y / zoomLevel)
                }}
                onClick={(e) => {
                  e.cancelBubble = true;
                  handleActiveItem(card, 'card');
                }}
              />
            </Button>
          )
        }
      )}
    </>
  )
}
