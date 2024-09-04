import { useCallback, useEffect, useRef, useState } from "react";
import { DrawAction } from "@/components/paint/Paint.constants";
import { KonvaEventObject } from "konva/lib/Node";
import { v4 as uuidv4 } from "uuid";
import useGetUser from "@/hooks/useGetUser";
import { useRouter } from "next/router";
import useCanvas from "@/hooks/useCanvas";


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
  const {
    updateItem, clearAll,
    cars, cards,
    realEstates, stocks,
    mutualFunds, incomes,
    fixedDeposits
  } = useCanvas();

  const [drawAction, setDrawAction] = useState<DrawAction>(DrawAction.Select);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [sizeWidth, setSizeWidth] = useState<number>(1);
  const [sizeHeight, setSizeHeight] = useState<number>(1);

  const isPaintRef = useRef(false);
  const stageRef = useRef<any>(null);
  const transformerRef = useRef<any>(null);

  const onExportClick = useCallback(() => {
    if (!isPaid) {
      router.push('/payment');
      return;
    }

    const dataUri = stageRef?.current?.toDataURL({ pixelRatio: 3 });
    downloadURI(dataUri, "image.png");
  }, []);

  useEffect(() => {
    if (sizeWidth === 1) {
      setSizeWidth((window.innerWidth) as any)
    }

    if (sizeHeight === 1) {
      setSizeHeight((window.innerHeight) as any)
    }

    const handleResize = () => {
      setSizeWidth((window.innerWidth) as any)
      setSizeHeight((window.innerHeight) as any)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []);


  const onClear = useCallback(() => {
    clearAll();
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
    setZoomLevel((prevZoom) => {
      const newZoom = prevZoom + 0.1;
      return newZoom <= 3 ? newZoom : 3;
    });
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => {
      const newZoom = prevZoom - 0.1;
      return newZoom >= 0.1 ? newZoom : 0.1;
    });
  };

  return {
    onStageMouseDown,
    onStageMouseMove,
    stageRef,
    isDraggable,
    transformerRef,
    onBgClick,
    onClear,
    onExportClick,
    handleZoomIn,
    handleZoomOut,
    zoomLevel,
    sizeWidth,
    sizeHeight,
    updateItem,
    cars, cards, realEstates, stocks,
    mutualFunds, incomes, fixedDeposits
  }
}
