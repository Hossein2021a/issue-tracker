"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SchemaIssu } from "../../SchemaIssu";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ErrorMessage from "@/components/ErrorMessage";
import Spiner from "@/components/Spiner";
import { Issue } from "@prisma/client";
import SimpleMDE from "react-simplemde-editor" 



type IsseFormProps = z.infer<typeof SchemaIssu>;

function SingleIssueForm({ issue }: { issue?: Issue }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IsseFormProps>({ resolver: zodResolver(SchemaIssu) });

  const router = useRouter();
  const [showSpiner, setshowspiner] = useState(false);

  const onSubmit: SubmitHandler<IsseFormProps> = async (data) => {
    try {
      setshowspiner(true);
      if (issue) await axios.patch("/api/issues/" + issue.id, data);
      else await axios.post("/api/issues", data);
      router.push("/issues");
      router.refresh()
    } catch (error) {
      setshowspiner(false);
    }
  };

  return (
    <div className="px-[350px] my-12 ">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
        </div>
        <Input
          defaultValue={issue?.title}
          {...register("title")}
          placeholder="title"
        />

        <Controller
          defaultValue={issue?.description}
          name="description"
          control={control}
          render={({ field }) => <SimpleMDE {...field} />}
        ></Controller>

        <div>
          <ErrorMessage>{errors.description?.message}</ErrorMessage>
        </div>

        <Button disabled={showSpiner} type="submit">
          {issue ? "update Issue" : "Send Issue"} {' '}{showSpiner ? <Spiner /> : ""}
        </Button>
      </form>
    </div>
  );
}

export default SingleIssueForm;
