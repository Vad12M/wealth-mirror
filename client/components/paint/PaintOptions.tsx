import { Box } from "@chakra-ui/react";
import React from "react";

export default function PaintOptions({
  optionsPosition,
  addNewItem,
  onClose
}: {
  optionsPosition: {
    x: number;
    y: number;
  },
  addNewItem: (type: string) => void,
  onClose: () => void
}) {

  const optionClick = (type: string) => {
    addNewItem(type);
  }

  return (
    <Box
      position="absolute"
      left={optionsPosition.x}
      top={optionsPosition.y}
      className={'p-4 shadow-lg bg-white'}
    >
      <ul className="p-2 flex items-center flex-col space-y-3 text-black">
        <button onClick={() => optionClick('car')}>
          {'Car'}
        </button>
        <button onClick={() => optionClick('realEstate')}>
          {'Real estate'}
        </button>
        <li onClick={() => optionClick('card')}>
          {'Card'}
        </li>
        <li>Fortune</li>
        <button onClick={onClose} className={'bg-red-500 text-white p-2 rounded-md'}>
          {'Close'}
        </button>
      </ul>
    </Box>
  )
}
