"use client";

import React from "react";
import { BsBrowserEdge } from "react-icons/bs";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  const PathName = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { id: 1, title: "Dashboard", href: "/" },
    { id: 2, title: "Issues", href: "/issues" },
  ];
  return (
    <div className="px-[150px] border-b-[1px] border-zinc-300 py-3 flex items-center justify-between ">
      <div className="flex items-center gap-6">
        <Link href="/">
          <BsBrowserEdge className="text-4xl text-zinc-700" />
        </Link>

        <div>
          <ul className=" flex items-center gap-5">
            {links.map((item) => (
              <li key={item.id}>
                <Link
                  className={classNames({
                    "text-blue-500": item.href === PathName,
                    "text-zinc-700": item.href !== PathName,
                  })}
                  href={item.href}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {status === "authenticated" && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <img
                className=" select-none relative top-[3px] rounded-2xl size-[40px]"
                src={session.user!.image!}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="px-8">
              <DropdownMenuLabel className="py-2">
                {session.user!.email!}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="py-2 text-center">
                <Link className="w-full" href="/api/auth/signout">Log out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Sign in</Link>
        )}
        {status === "loading" && <Skeleton className="w-[80px] h-[10px]" />}
      </div>
    </div>
  );
}

export default Navbar;
