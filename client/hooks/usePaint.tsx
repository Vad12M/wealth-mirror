import React, { useCallback, useRef, useState } from "react";
import { DrawAction } from "@/components/paint/Paint.constants";
import { KonvaEventObject } from "konva/lib/Node";
import { v4 as uuidv4 } from "uuid";

const SIZE = 500;


const downloadURI = (uri: string | undefined, name: string) => {
  const link = document.createElement("a");
  link.download = name;
  link.href = uri || "";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function usePaint() {
  const [color, setColor] = useState("#000");
  const [drawAction, setDrawAction] = useState<DrawAction>(DrawAction.Select);
  // const [scribbles, setScribbles] = useState<Scribble[]>([]);
  // const [rectangles, setRectangles] = useState<Rectangle[]>([]);
  // const [circles, setCircles] = useState<Circle[]>([]);
  // const [arrows, setArrows] = useState<Arrow[]>([]);
  // const [image, setImage] = useState<HTMLImageElement>();

  const [imageObjects, setImageObjects] = useState<HTMLImageElement[]>([]);

  const isPaintRef = useRef(false);
  const fileRef = useRef<HTMLInputElement>(null);
  // const onImportImageClick = useCallback(() => {
  //   fileRef?.current && fileRef?.current?.click();
  // }, []);

  const stageRef = useRef<any>(null);

  const onExportClick = useCallback(() => {
    const dataUri = stageRef?.current?.toDataURL({ pixelRatio: 3 });
    downloadURI(dataUri, "image.png");
  }, []);

  // const onImportImageSelect = useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>) => {
  //     if (e.target.files?.[0]) {
  //       const imageUrl = URL.createObjectURL(e.target.files?.[0]);
  //       const image = new Image(SIZE / 2, SIZE / 2);
  //       image.src = imageUrl;
  //       setImage(image);
  //     }
  //     e.target.files = null;
  //   },
  //   []
  // );

  const addNewImage = (type: string) => {
    let imageUrl = '';
    if (type === 'car') {
      imageUrl = '/canvas/car.svg';
    } else if (type === 'house') {
      imageUrl = '/canvas/house.svg';
    }

    const image = new Image(SIZE / 2, SIZE / 2);
    image.src = imageUrl;
    image.id = uuidv4();
    setImageObjects([...imageObjects, image]);
  };

  const onClear = useCallback(() => {
    // setRectangles([]);
    // setCircles([]);
    // setScribbles([]);
    // setArrows([]);
    // setImage(undefined);
    setImageObjects([]);
  }, []);


  const onStageMouseUp = useCallback(() => {
    isPaintRef.current = false;
  }, []);

  const currentShapeRef = useRef<string>();

  const onStageMouseDown = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      if (drawAction === DrawAction.Select) return;
      isPaintRef.current = true;
      const stage = stageRef?.current;
      const pos = stage?.getPointerPosition();
      const x = pos?.x || 0;
      const y = pos?.y || 0;
      const id = uuidv4();
      currentShapeRef.current = id;

      // switch (drawAction) {
      //   case DrawAction.Scribble: {
      //     setScribbles((prevScribbles) => [
      //       ...prevScribbles,
      //       {
      //         id,
      //         points: [x, y],
      //         color,
      //       },
      //     ]);
      //     break;
      //   }
      //   case DrawAction.Circle: {
      //     setCircles((prevCircles) => [
      //       ...prevCircles,
      //       {
      //         id,
      //         radius: 1,
      //         x,
      //         y,
      //         color,
      //       },
      //     ]);
      //     break;
      //   }
      //   case DrawAction.Rectangle: {
      //     setRectangles((prevRectangles) => [
      //       ...prevRectangles,
      //       {
      //         id,
      //         height: 1,
      //         width: 1,
      //         x,
      //         y,
      //         color,
      //       },
      //     ]);
      //     break;
      //   }
      //   case DrawAction.Arrow: {
      //     setArrows((prevArrows) => [
      //       ...prevArrows,
      //       {
      //         id,
      //         points: [x, y, x, y],
      //         color,
      //       },
      //     ]);
      //     break;
      //   }
      // }
    },
    [drawAction, color]
  );

  const onStageMouseMove = useCallback(() => {
    if (drawAction === DrawAction.Select || !isPaintRef.current) return;

    const stage = stageRef?.current;
    const id = currentShapeRef.current;
    const pos = stage?.getPointerPosition();
    const x = pos?.x || 0;
    const y = pos?.y || 0;

    // switch (drawAction) {
    //   case DrawAction.Scribble: {
    //     setScribbles((prevScribbles) =>
    //       prevScribbles?.map((prevScribble) =>
    //         prevScribble.id === id
    //           ? {
    //             ...prevScribble,
    //             points: [...prevScribble.points, x, y],
    //           }
    //           : prevScribble
    //       )
    //     );
    //     break;
    //   }
    //   case DrawAction.Circle: {
    //     setCircles((prevCircles) =>
    //       prevCircles?.map((prevCircle) =>
    //         prevCircle.id === id
    //           ? {
    //             ...prevCircle,
    //             radius:
    //               ((x - prevCircle.x) ** 2 + (y - prevCircle.y) ** 2) ** 0.5,
    //           }
    //           : prevCircle
    //       )
    //     );
    //     break;
    //   }
    //   case DrawAction.Rectangle: {
    //     setRectangles((prevRectangles) =>
    //       prevRectangles?.map((prevRectangle) =>
    //         prevRectangle.id === id
    //           ? {
    //             ...prevRectangle,
    //             height: y - prevRectangle.y,
    //             width: x - prevRectangle.x,
    //           }
    //           : prevRectangle
    //       )
    //     );
    //     break;
    //   }
    //   case DrawAction.Arrow: {
    //     setArrows((prevArrows) =>
    //       prevArrows.map((prevArrow) =>
    //         prevArrow.id === id
    //           ? {
    //             ...prevArrow,
    //             points: [prevArrow.points[0], prevArrow.points[1], x, y],
    //           }
    //           : prevArrow
    //       )
    //     );
    //     break;
    //   }
    // }
  }, [drawAction]);

  const transformerRef = useRef<any>(null);

  // const onShapeClick = useCallback(
  //   (e: KonvaEventObject<MouseEvent>) => {
  //     if (drawAction !== DrawAction.Select) return;
  //     const currentTarget = e.currentTarget;
  //     transformerRef?.current?.node(currentTarget);
  //   },
  //   [drawAction]
  // );

  const isDraggable = drawAction === DrawAction.Select;

  const onBgClick = useCallback(() => {
      transformerRef?.current?.nodes([]);
    },
    [drawAction]
  );


  return {
    imageObjects,
    onStageMouseUp,
    onStageMouseDown,
    onStageMouseMove,
    stageRef,
    isDraggable,
    transformerRef,
    onBgClick,
    addNewImage,
    onClear,
    onExportClick,

    // onImportImageClick,
    // onImportImageSelect,

    // onShapeClick,
    // fileRef,
    // image,
    // arrows,
    // circles,
    // rectangles,
    // scribbles,
    // setDrawAction,
    // drawAction,
    // color,
    // setColor,
    // addNewImage
  }
}
