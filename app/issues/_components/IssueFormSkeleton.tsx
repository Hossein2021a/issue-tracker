import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function IssueFormSkeleton() {
  return (
    <div className="px-[350px] my-12 flex flex-col gap-4">
      <Skeleton className="w-[250px] h-[25px] " />
      <Skeleton className="w-full h-[295px] " />
      <Skeleton className="w-[150px] h-[65px]" />
    </div>
  );
}

export default IssueFormSkeleton;


