import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssuepage from "./DeleteIssuepage";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import AssignUser from "./AssignUser";
import { Toaster } from "@/components/ui/sonner"


interface Prop {
  params: { id: string };
}

export default async function SingleIssue(prop: Prop) {
  const session = await getServerSession(authOptions);

  const singleData = await prisma.issue.findUnique({
    where: { id: parseInt(prop.params.id) },
  });
  if (!singleData) return notFound();

  return (
    <div className="px-[50px] mt-12 grid grid-cols-2 ">
      <IssueDetails issue={singleData} />
      {session && (
        <div className=" flex  gap-2 ">
          <DeleteIssuepage id={singleData.id} />
          <EditIssueButton id={singleData.id} />
          <AssignUser issue={singleData} />
        </div>
      )}
        <Toaster />
    </div>
  );
}
