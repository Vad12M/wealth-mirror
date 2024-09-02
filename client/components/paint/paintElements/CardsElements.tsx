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
          image.id = uuidv4();
          switch (card.type) {
            case 'credit':
              image.src = '/canvas/CC1.svg';
              break;
            case 'debit':
              image.src = '/canvas/DC1.svg';
              break;
            case 'metal':
              image.src = '/canvas/CC2.svg';
              break;
          }

          return (
            <Button typeButton={'none'} key={card._id}>
              <KonvaImage
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
