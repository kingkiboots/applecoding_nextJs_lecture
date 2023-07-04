"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default () => {
  return (
    <div>
      <h1>장바구니입니다.</h1>
      <Link href={`${usePathname()}/payment`}>결제화면으로 이동</Link>
    </div>
  );
};
