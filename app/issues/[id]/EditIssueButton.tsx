import { Button } from "@/components/ui/button";
import { FaRegEdit } from "react-icons/fa";
import Link from "next/link";

function EditIssueButton({ id }: { id: number }) {
  return (
    <div  className="">
      <Link href={`/issues/${id}/edit`}>
        <Button className="flex items-center">
          <FaRegEdit className="mr-2 text-1xl" />
          Edit
        </Button>
      </Link>
    </div>
  );
}

export default EditIssueButton;
