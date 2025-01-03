"use client";

import { UserNav } from "./user-nav";
import { ModeToggle } from "./mode-toggle";
// import { Button } from "./ui/button";
// import { Bell, Menu } from "lucide-react";
import  NotificationDropdown  from "./notification";
import Link from "next/link";

interface HeaderProps {
  isSidebarCollapsed: boolean;
}

export function Header({ isSidebarCollapsed }: HeaderProps) {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className=" flex-1 flex justify-center">
            <div
            className={`transition-opacity duration-500 flex ${
              isSidebarCollapsed ? "opacity-100" : "opacity-0"
            }`}
            >
            <Link
              href="/dashboard"
              className="font-bold text-3xl mr-4 flex items-center  transition-transform"
            >
              <div className="relative">  
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mr-2">
                People
              </span>
              <span className="bg-gradient-to-r from-muted-foreground to-slate-400 bg-clip-text text-transparent">
                Talk
              </span>
              </div>
            </Link>
            </div>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <NotificationDropdown />
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </div>
  );
}
