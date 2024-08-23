import { Button } from "@/ui/button/Button";
import Typography from "@/ui/typography/Typography";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function PaintZoom({
  zoomLevel,
  handleZoomIn,
  handleZoomOut,
}: {
  zoomLevel: number;
  handleZoomIn: () => void;
  handleZoomOut: () => void;
}) {
  return (
    <Box
      className='space-x-2 flex items-center absolute right-8 bottom-6 rounded-[45px] p-2'
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.50)' }}
    >
      <Button onClick={handleZoomOut} typeButton="none">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4.16675 10H15.8334" stroke="white" strokeWidth="1.66667" strokeLinecap="round"
                strokeLinejoin="round"
          />
        </svg>
      </Button>
      <Typography text={`${Math.round(zoomLevel * 100)}%`} type={'body2'}/>
      <Button onClick={handleZoomIn} typeButton="none">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M9.99984 15.8332V9.99984M9.99984 9.99984V4.1665M9.99984 9.99984L4.1665 9.99984M9.99984 9.99984L15.8332 9.99984"
            stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      </Button>
    </Box>
  )
}
