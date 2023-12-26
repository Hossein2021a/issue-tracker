import React from "react";
import { Status } from "@prisma/client";
import { Badge } from "@/components/ui/badge";

const statusMap: Record<
  Status,
  { lable: string; variant: "destructive" | "outline" | "secondary" }> = {
  OPEN: { lable: "Open", variant: "destructive" },
  IN_PROGRESS: { lable: "In_Prpgress", variant: "outline" },
  CLOSED: { lable: "Closed", variant: "secondary" },
};

function IssueStatusBadge({ status }: { status: Status }) {
  return (
    <Badge variant={statusMap[status].variant}>{statusMap[status].lable}</Badge>
  );
}

export default IssueStatusBadge;
