import { IRealEstate } from "@/interfaces/IRealEstate";
import { v4 as uuidv4 } from "uuid";
import { Image as KonvaImage } from "react-konva";
import React from "react";
import { GRID_SIZE } from "@/components/paint/Paint";
import { Button } from "@/ui/button/Button";

export default function RealEstateElements({
  realEstates,
  isDraggable,
  updateItem,
  handleActiveItem,
  zoomLevel,
}: {
  realEstates: IRealEstate[];
  isDraggable: boolean;
  updateItem: (id: string, type: string, x: number, y: number) => void;
  handleActiveItem: (item: IRealEstate, type: string) => void;
  zoomLevel: number;
}) {

  if (!realEstates.length) {
    return null;
  }

  return (
    <>
      {(realEstates || []).map((realEstate) => {
          const image = new Image(GRID_SIZE, GRID_SIZE);
          // @ts-ignore
          image.src = realEstate.image;
          image.id = uuidv4();
          return (
            <Button typeButton={'none'}  key={realEstate._id}>
            <KonvaImage
                key={realEstate._id}
                image={image}
                x={realEstate.position.x}
                y={realEstate.position.y}
                height={550}
                width={450}
                draggable={isDraggable}
                onDragMove={(e) => e.cancelBubble = true}
                onDragStart={(e) => e.cancelBubble = true}
                onDragEnd={(e) => {
                  e.cancelBubble = true;
                  const node = e.target;
                  const { x, y } = node.absolutePosition();
                  updateItem(realEstate._id, 'realEstate', x / zoomLevel, y / zoomLevel)
                }}
                onClick={(e) => {
                  e.cancelBubble = true;
                  handleActiveItem(realEstate, 'realEstate');
                }}
              />
            </Button>
          )
        }
      )}
    </>
  )
}
