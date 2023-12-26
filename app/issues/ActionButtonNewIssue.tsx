import { Button } from "@/components/ui/button"
import Link from "next/link"

function ActionButtonNewIssue() {
  return (
    <Link href="/issues/new">
        <Button>New Issue</Button>
    </Link>
  )
}

export default ActionButtonNewIssue