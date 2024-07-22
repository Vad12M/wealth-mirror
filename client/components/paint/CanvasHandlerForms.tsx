import React from "react";
import CarForm from "@/components/paint/CarForm";
import CardForm from "@/components/paint/CardForm";
import RealEstateForm from "@/components/paint/RealEstateForm";
import FortuneForm from "@/components/paint/FortuneForm";


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
      return <RealEstateForm position={position} onClose={onClose}/>
    case 'card':
      return <CardForm position={position} onClose={onClose}/>
    case 'fortune':
      return <FortuneForm position={position} onClose={onClose}/>
  }
}
