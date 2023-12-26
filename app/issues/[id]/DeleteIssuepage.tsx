"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spiner from "@/components/Spiner";

function DeleteIssuepage({ id }: { id: number }) {
  const router = useRouter();
  const [spiner, setspiner] = useState(false);
  const [open, setopen] = useState(false);

  const DeleteIssuepage = async () => {
    try {
      setspiner(true);
      await axios.delete("/api/issues/" + id);
      router.push("/issues");
      router.refresh();
    } catch (error) {}
  };

  return (
    <Dialog asChild={false} open={open} onOpenChange={setopen}>
      <DialogTrigger asChild>
        <Button onClick={() => setopen(true)} variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Issue</DialogTitle>
          <DialogDescription>
            Are you sure for delete this Issue?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button disabled={spiner} onClick={() => DeleteIssuepage()}>
            {spiner ? (
              <div className="mr-2">
                <Spiner />
              </div>
            ) : (
              ""
            )}
            Save changes
          </Button>
          <Button onClick={() => setopen(false)} variant="destructive">Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteIssuepage;
