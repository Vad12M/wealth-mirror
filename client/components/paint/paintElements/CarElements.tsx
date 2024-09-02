import { v4 as uuidv4 } from "uuid";
import { Image as KonvaImage } from "react-konva";
import React from "react";
import { GRID_SIZE } from "@/components/paint/Paint";
import { ICar } from "@/interfaces/wealths/ICar";
import { Button } from "@/ui/button/Button";

export default function CarElements({
  cars,
  isDraggable,
  updateItem,
  handleActiveItem,
  zoomLevel,
}: {
  cars: ICar[];
  isDraggable: boolean;
  updateItem: (id: string, type: string, x: number, y: number) => void;
  handleActiveItem: (item: ICar, type: string) => void;
  zoomLevel: number;
}) {

  if (!cars.length) {
    return null;
  }

  return (
    <>
      {cars.map((car) => {
          const image = new Image(GRID_SIZE * 2, GRID_SIZE * 2);
          image.id = uuidv4();
          let height = 100;
          let width = 100;

          switch (car.type) {
            case 'car':
              image.src = '/canvas/Car.svg';
              height = 105;
              width = 100;
              break;
            case 'oldCar':
              image.src = '/canvas/OldCar.svg';
              height = 105;
              width = 100;
              break;
            case 'bike':
              image.src = '/canvas/Bike.svg';
              height = 70;
              width = 70;
              break;
            case 'scooter':
              image.src = '/canvas/Scooter.svg';
              height = 70;
              width = 70;
              break;
          }

          return (
            <Button typeButton={'none'} key={car._id}>
              <KonvaImage
                key={car._id}
                image={image}
                x={car.position.x}
                y={car.position.y}
                height={height}
                width={width}
                draggable={isDraggable}
                onDragMove={(e) => e.cancelBubble = true}
                onDragStart={(e) => e.cancelBubble = true}
                onDragEnd={(e) => {
                  e.cancelBubble = true;
                  const node = e.target;
                  const { x, y } = node.absolutePosition();
                  updateItem(car._id, 'car', x / zoomLevel, y / zoomLevel)
                }}
                onClick={(e) => {
                  e.cancelBubble = true;
                  handleActiveItem(car, 'car');
                }}
              />
            </Button>
          )
        }
      )}
    </>
  )
}
