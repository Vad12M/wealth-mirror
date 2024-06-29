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
  onClear,
  onExportClick
}: {
  onClear: any;
  onExportClick: any;
}) {


  return (
    <Flex justifyContent={"space-between"} alignItems="center">
      <Flex gap={4} alignItems="center" height="100%">
        <Button onClick={onClear} className={"ml-2"}>
          Clear
        </Button>
        <Button leftIcon={<Download/>} onClick={onExportClick} className={"ml-2"}>
          Export
        </Button>
      </Flex>
    </Flex>
  )
}
