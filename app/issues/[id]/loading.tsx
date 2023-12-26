import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function SingleIssueLoading() {
  return (
    <div className="px-[50px] mt-12 flex flex-col gap-3">
      <h1 className="">
        <Skeleton className="w-[50%] h-[25px]  rounded-full" />
      </h1>

      <div className="flex items-center gap-4 w-[50%]">
        <Skeleton className="w-[50%] h-[15px]  rounded-full" />
        <Skeleton className="w-[50%] h-[15px]  rounded-full" />
      </div>

      <div className="border-[1px] prose border-gray-400 rounded-md w-full p-3">
        <Skeleton className="w-full h-[15px]  rounded-full" />
      </div>
    </div>
  );
}

export default SingleIssueLoading;
