import React from "react";

export default function ChevroneDownIcon({
  color = '#667085',
}: {
  color?: string;
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
      <path d="M1 1.5L6 6.5L11 1.5" stroke={color} strokeWidth="1.66667" strokeLinecap="round"
            strokeLinejoin="round"/>
    </svg>
  )
}
