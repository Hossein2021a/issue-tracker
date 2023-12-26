import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";
const SingleIssueForm = dynamic(
  () => import("@/app/issues/_components/SingleIssuepage"),
  { ssr: false ,
  loading : () => <IssueFormSkeleton /> }
);
function page() {
  return <SingleIssueForm />;
}

export default page;
