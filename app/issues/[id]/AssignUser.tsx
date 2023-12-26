"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Issue, User } from "@prisma/client";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner"


function AssignUser({ issue }: { issue: Issue }) {
  const { data, isLoading, error } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/user").then((res) => res.data),
    staleTime: 60 * 1000,
    retry: 3,
  });

  if (error) return null;
  if (isLoading) return <Skeleton className="w-[80px] h-[15px]" />;

  return (
    <Select
      onValueChange={(val) => {
        axios.patch("/api/issues/" + issue.id, {
          assignedToUserId: val ==="unsigned" ? null : val
        })
        .catch(()=> toast("error accured") )
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Assign..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>suggestion</SelectLabel>
          <SelectItem value='unsigned'>Unassigned</SelectItem>
          {data?.map((user) => (
            <SelectItem key={user.id} value={user.id}>
              {user.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default AssignUser;
