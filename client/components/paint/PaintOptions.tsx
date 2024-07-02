import { Box } from "@chakra-ui/react";
import React from "react";


export default function PaintOptions({
  optionsPosition,
  setShowOptions,
  addNewImage,
}: {
  optionsPosition: {
    x: number;
    y: number;
  },
  setShowOptions: (show: boolean) => void,
  addNewImage: (type: string) => void,
}) {

  return (
    <Box
      position="absolute"
      left={optionsPosition.x}
      top={optionsPosition.y}
      className={'p-4 shadow-lg bg-white'}
    >
      <ul className="p-2 flex items-center flex-col space-y-3 text-black">
        <button onClick={() => {
          setShowOptions(false)
          addNewImage('car')
        }}>
          {'Car'}
        </button>
        <button onClick={() => {
          setShowOptions(false)
          addNewImage('house')
        }}>
          {'Real estate'}
        </button>
        <li>Card</li>
        <li>Fortune</li>
        <button onClick={() => setShowOptions(false)} className={'bg-red-500 text-white p-2 rounded-md'}>
          {'Close'}
        </button>
      </ul>
    </Box>
  )
}
