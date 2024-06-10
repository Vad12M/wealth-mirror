import {
  Box, Button,
  ButtonGroup,
  Flex,
  IconButton,
  Popover,
  PopoverArrow, PopoverCloseButton,
  PopoverContent,
  PopoverTrigger
} from "@chakra-ui/react";
import { PAINT_OPTIONS } from "@/components/paint/Paint.constants";
import { SketchPicker } from "react-color";
import { Download, Upload, XLg } from "react-bootstrap-icons";
import React from "react";


export default function PaintMenu({
  setDrawAction,
  drawAction,
  color,
  setColor,
  onClear,
  fileRef,
  onImportImageSelect,
  onImportImageClick,
  onExportClick
}: {
  setDrawAction: any;
  drawAction: any;
  color: any;
  setColor: any;
  onClear: any;
  fileRef: any;
  onImportImageSelect: any;
  onImportImageClick: any;
  onExportClick: any;
}) {


  return (
    <Flex justifyContent={"space-between"} alignItems="center">
      <ButtonGroup size="sm" isAttached variant="solid">
        {PAINT_OPTIONS.map(({ id, label, icon }) => (
          <IconButton
            aria-label={label}
            icon={icon}
            onClick={() => setDrawAction(id)}
            colorScheme={id === drawAction ? "whatsapp" : undefined}
          />
        ))}
        <Popover>
          <PopoverTrigger>
            <Box
              bg={color}
              h={"32px"}
              w={"32px"}
              borderRadius="sm"
              cursor="pointer"
            ></Box>
          </PopoverTrigger>
          <PopoverContent width="300">
            <PopoverArrow/>
            <PopoverCloseButton/>
            {/*@ts-ignore*/}
            <SketchPicker
              color={color}
              onChangeComplete={(selectedColor) =>
                setColor(selectedColor.hex)
              }
            />
          </PopoverContent>
        </Popover>
        <IconButton aria-label={"Clear"} icon={<XLg/>} onClick={onClear}/>
      </ButtonGroup>
      <Flex gap={4} alignItems="center" height="100%">
        <input
          type="file"
          ref={fileRef}
          onChange={onImportImageSelect}
          style={{ display: "none" }}
          accept="image/*"
        />
        <Button
          leftIcon={<Upload/>}
          variant="solid"
          onClick={onImportImageClick}
          size="sm"
        >
          Import Image
        </Button>
        <Button
          leftIcon={<Download/>}
          colorScheme="whatsapp"
          variant="solid"
          onClick={onExportClick}
          size="sm"
        >
          Export
        </Button>
      </Flex>
    </Flex>
  )
}
