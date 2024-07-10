import { useCallback, useEffect, useRef, useState } from "react";
import { DrawAction } from "@/components/paint/Paint.constants";
import { KonvaEventObject } from "konva/lib/Node";
import { v4 as uuidv4 } from "uuid";
import useGetUser from "@/hooks/useGetUser";
import { useRouter } from "next/router";
import { useGetCarsQuery, useUpdateCarMutation } from "@/store/api/apiSlice";


const downloadURI = (uri: string | undefined, name: string) => {
  const link = document.createElement("a");
  link.download = name;
  link.href = uri || "";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function usePaint() {
  const router = useRouter();
  const { isPaid } = useGetUser();
  const [updateCar] = useUpdateCarMutation();
  const { data: cars } = useGetCarsQuery();

  const [drawAction, setDrawAction] = useState<DrawAction>(DrawAction.Select);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imageObjects, setImageObjects] = useState<HTMLImageElement[]>([]);
  const [SIZE, setSIZE] = useState<number>(1)
  const isPaintRef = useRef(false);
  const stageRef = useRef<any>(null);
  const transformerRef = useRef<any>(null);
  const [carsItems, setCarsItems] = useState<any[]>([]);

  useEffect(() => {
    if (cars) {
      setCarsItems(cars);
    }
  }, [cars]);


  const onExportClick = useCallback(() => {
    if (!isPaid) {
      router.push('/payment');
      return;
    }

    const dataUri = stageRef?.current?.toDataURL({ pixelRatio: 3 });
    downloadURI(dataUri, "image.png");
  }, []);

  useEffect(() => {
    if (SIZE === 1) {
      setSIZE((window.innerWidth - 200) as any)
    }

    const handleResize = () => {
      setSIZE((window.innerWidth - 200) as any)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  const addNewImage = (type: string) => {
    let imageUrl = '';

    switch (type) {
      case 'car':
        imageUrl = '/canvas/Car.svg';
        break;
      case 'realEstate':
        imageUrl = '/canvas/Home-1.svg';
        break;
      case 'card':
        imageUrl = '/canvas/CC1.svg';
        break;
    }

    const image = new Image(SIZE / 2, SIZE / 2);
    image.src = imageUrl;
    image.id = uuidv4();
    setImageObjects([...imageObjects, image]);
  };

  const onClear = useCallback(() => {
    setImageObjects([]);
  }, []);

  const onStageMouseUp = useCallback((type: string, id: string) => {
    isPaintRef.current = false;
    const stage = stageRef?.current;
    const pos = stage?.getPointerPosition();
    const x = pos?.x || 0;
    const y = pos?.y || 0;
    currentShapeRef.current = id;

    if (type === 'car') {
      updateCar({
        id: id,
        position: {
          x: x,
          y: y,
        }
      })
    }
  }, []);

  const currentShapeRef = useRef<string>();

  const onStageMouseDown = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      // if (drawAction === DrawAction.Select) return;
      isPaintRef.current = true;
      const stage = stageRef?.current;
      const pos = stage?.getPointerPosition();
      const x = pos?.x || 0;
      const y = pos?.y || 0;
      const id = uuidv4();
      currentShapeRef.current = id;

      console.log('onStageMouseDown', { x, y, id })
    },
    [drawAction]
  );

  const onStageMouseMove = useCallback(() => {
    if (drawAction === DrawAction.Select || !isPaintRef.current) return;

    const stage = stageRef?.current;
    const id = currentShapeRef.current;
    const pos = stage?.getPointerPosition();
    const x = pos?.x || 0;
    const y = pos?.y || 0;

  }, [drawAction]);

  const isDraggable = drawAction === DrawAction.Select;

  const onBgClick = useCallback(() => {
      transformerRef?.current?.nodes([]);
    },
    []
  );

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => prevZoom * 1.1);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => prevZoom / 1.1);
  };


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
    handleZoomIn,
    handleZoomOut,
    zoomLevel,
    SIZE,
    cars
  }
}
