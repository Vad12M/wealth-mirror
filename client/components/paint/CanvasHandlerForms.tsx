import React from "react";
import CarForm from "@/components/paint/CarForm";
import HouseForm from "@/components/paint/HouseForm";
import CardForm from "@/components/paint/CardForm";


export default function CanvasHandlerForms({
  type,
  position,
  onClose
}: {
  type: string;
  position: {
    x: number;
    y: number;
  };
  onClose: () => void;
}) {

  switch (type) {
    case 'car':
      return <CarForm position={position} onClose={onClose}/>
    case 'realEstate':
      return <HouseForm/>
    case 'card':
      return <CardForm/>
  }
}
