import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "../../_components/IssueFormSkeleton";

const SingleIssueForm = dynamic( () => import('@/app/issues/_components/SingleIssuepage') , 
{ssr : false , loading : () => <IssueFormSkeleton /> })

interface Prop {
  params: { id: string };
}

const EditIssuePage = async ({ params }: Prop) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return <SingleIssueForm issue={issue} />;
};

export default EditIssuePage;
