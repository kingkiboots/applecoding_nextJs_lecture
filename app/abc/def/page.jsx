"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default () => {
  const pathname = usePathname;
  return (
    <div>
      <h1 className="title">
        {pathname().split("/").pop()}입니다. 안녕하세요?
      </h1>
    </div>
  );
};
