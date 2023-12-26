import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import ActionButtonNewIssue from "./ActionButtonNewIssue";

async function LoadingIssuePage() {
  const allData = [1, 2, 3, 4, 5];
  return (
    <div className="px-[250px] mt-12 space-y-4">
      <ActionButtonNewIssue />

      <Table className="border-[1px]  border-zinc-300 rounded-md ">
        <TableHeader>
          <TableRow>
            <TableHead>Issue</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allData.map((item) => (
            <TableRow key={item}>
              <TableCell>
                <Skeleton className="w-[250px] h-[15px]  rounded-full" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-[250px] h-[15px]  rounded-full" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-[250px] h-[15px]  rounded-full" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default LoadingIssuePage;
