import IssueStatusBadge from "@/components/IssueStatusBadge";
import { Issue } from "@prisma/client";
import Markdown from "react-markdown";

function IssueDetails({ issue }: { issue: Issue }) {
  return (
    <div className="flex flex-col gap-4  justify-between ">
      <div className="flex gap-4 flex-col">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
          {issue.title}
        </h1>
        <div className="flex items-center gap-4">
          <IssueStatusBadge status={issue.status} />
          <p>{issue.createAt.toDateString()}</p>
        </div>
      </div>
      
      <Markdown className="border-[1px] prose border-gray-400 rounded-md w-full p-3">
        {issue.description}
      </Markdown>
    </div>
  );
}

export default IssueDetails;
