import React from "react";
import CarForm from "@/components/paint/CarForm";
import HouseForm from "@/components/paint/HouseForm";
import CardForm from "@/components/paint/CardForm";


export default function CanvasHandlerForms({
  type,
  position
}: {
  type: string;
  position: {
    x: number;
    y: number;
  };
}) {

  switch (type) {
    case 'car':
      return <CarForm position={position}/>
    case 'realEstate':
      return <HouseForm/>
    case 'card':
      return <CardForm/>
  }
}
