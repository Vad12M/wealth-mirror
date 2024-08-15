import { Button } from "@/ui/button/Button";
import React from "react";

export default function FormButtonsBlock({
  isLoading,
  isLoadingDelete,
  isEdit,
  deleteClick,
  handleClick,
  type,
}: {
  handleClick: () => void;
  deleteClick?: () => void;
  isLoading?: boolean;
  isLoadingDelete?: boolean;
  isEdit?: boolean;
  type?: string;
}) {
  return (
    <div className="flex flex-col w-full">
      <Button
        typeButton="none"
        className="bg-primary text-white px-3.5 py-2.5 rounded-[38px] w-full mt-4"
        onClick={handleClick}
        loading={isLoading}
      >
        {isEdit ? `Update ${type}` : `Add ${type}`}
      </Button>
      {isEdit && <Button
        typeButton="none"
        className="bg-danger text-white px-3.5 py-2.5 rounded-[38px] w-full mt-4"
        onClick={deleteClick}
        loading={isLoadingDelete}
      >
        {`Remove ${type}`}
      </Button>}
    </div>
  )
}
