import { Box } from "@chakra-ui/react";
import React from "react";
import CarForm from "@/components/paint/CarForm";
import HouseForm from "@/components/paint/HouseForm";
import CardForm from "@/components/paint/CardForm";


export default function CanvasHandlerForms({
  type,
}: {
  type: string;
}) {

  switch (type) {
    case 'car':
      return <CarForm/>
    case 'house':
      return <HouseForm/>
    case 'card':
      return <CardForm/>
  }
}
