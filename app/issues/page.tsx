import IssueStatusBadge from "@/components/IssueStatusBadge";
import {
  Table,
  TableBody,

  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/prisma/client";
import Link from "next/link";
import ActionButtonNewIssue from "./ActionButtonNewIssue";

const Issues = async () => {
  const allData = await prisma.issue.findMany();


  return (
    <div className="px-[250px] my-12 space-y-4">
      <ActionButtonNewIssue />
      <Table className="border-[1px]  border-zinc-300 rounded-md">
        <TableHeader>
          <TableRow>
            <TableHead>Issue</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Link className=" hover:underline text-blue-700" href={`/issues/${item.id}`}>
                {item.title}
                </Link>
                </TableCell>
              <TableCell>
                <IssueStatusBadge status={item.status} />
              </TableCell>
              <TableCell>{item.createAt.toDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Issues;
