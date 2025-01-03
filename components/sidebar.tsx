"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  BarChart2,
  ChevronLeft,
  ChevronRight,
  Folder,
  Home,
  Menu,
  UsersRound,
} from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LayoutDashboard, FileText, BarChart, Clock, DollarSign, Calendar } from 'lucide-react';

interface SidebarProps {
  onItemClick: (item: string) => void;
  onCollapseChange: (collapsed: boolean) => void;
  role: string | null;
}

const adminMenuItems = [
  { href: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "grievances", label: "Grievances", icon: FileText },
  { href: "reports", label: "Reports", icon: BarChart },
];

const hrMenuItems = [
  { href: "personnel", label: "Personnel", icon: UsersRound },
  { href: "reports", label: "Reports", icon: BarChart },
  { href: "attendance", label: "Attendance", icon: Clock },
  { href: "payroll", label: "Payroll", icon: DollarSign },
];

// TODO: add grievance menu items and properly add conditionally rendering on role based access
// const grievanceMenuItems = [
//   { href: "dashboard", label: "Dashboard", icon: LayoutDashboard },
//   { href: "grievances", label: "Grievances", icon: FileText },
//   { href: "reports", label: "Reports", icon: BarChart },
// ];

const employeeMenuItems = [
  { href: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "attendance", label: "Attendance", icon: Clock },
  { href: "payroll", label: "Payroll", icon: DollarSign },
  { href: "grievances", label: "Grievances", icon: FileText },
];

// const links = [
//   { href: "dashboard", label: "Dashboard", icon: Home },
//   { href: "grievances", label: "Grievances", icon: Folder },
//   { href: "reports", label: "Reports", icon: BarChart2 },
// ];

export function Sidebar({ onItemClick, onCollapseChange, role }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("dashboard");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleLinkClick = (linkHref: string) => {
    setActiveItem(linkHref);
    onItemClick(linkHref);
  };

  const handleCollapseToggle = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    onCollapseChange(newCollapsedState);
  };

  const menuItems = role === 'admin' ? adminMenuItems : employeeMenuItems;

  if (!isDesktop) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          {menuItems.map((link) => (
            <DropdownMenuItem
              key={link.href}
              onSelect={() => link.href && handleLinkClick(link.href)}
            >
              <link.icon className="mr-2 h-4 w-4" />
              <span>{link.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <TooltipProvider>
      <motion.div
        className={cn(
          "hidden md:flex bg-card border-r h-screen p-4 flex-col transition-all duration-300 sticky top-0",
          isCollapsed ? "w-16" : "w-64"
        )}
        animate={{ width: isCollapsed ? 64 : 256 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between mb-8 relative">
          <span
            className={cn(
              "text-xl font-bold transition-opacity duration-500",
              isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
          >
            {/* <div className="relative"> */}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mr-2">
                People
              </span>
              <span className="bg-gradient-to-r from-muted-foreground to-slate-400 bg-clip-text text-transparent">
                Talk
              </span>
            {/* </div> */}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCollapseToggle}
            className="absolute -right-1 top-1"
          >
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
        <nav className="space-y-2 flex-1">
          {menuItems.map((link) => (
            <Tooltip key={link.href} delayDuration={0}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => link.href && handleLinkClick(link.href)}
                  className={cn(
                    "w-full flex items-center justify-start p-2 rounded-md text-sm font-medium transition-colors duration-300",
                    activeItem === link.href
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-muted",
                    isCollapsed && "justify-center"
                  )}
                >
                  <link.icon
                    className={cn(
                      "h-4 w-4 transition-all duration-300",
                      isCollapsed ? "mr-0" : "mr-2"
                    )}
                  />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isCollapsed ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {!isCollapsed && link.label}
                  </motion.span>
                </button>
              </TooltipTrigger>
              {isCollapsed && (
                <TooltipContent side="right">{link.label}</TooltipContent>
              )}
            </Tooltip>
          ))}
        </nav>
      </motion.div>
    </TooltipProvider>
  );
}
