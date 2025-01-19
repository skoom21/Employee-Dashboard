"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Clock, DollarSign, FileText, CheckCircle } from "lucide-react";
import {Sidebar} from "@/components/sidebar";
import {Header} from "@/components/header";
import { useToast } from "@/hooks/use-toast";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
interface EmployeeDashboardProps {
  activeItem: string;
}

const EmployeeDashboard: React.FC<EmployeeDashboardProps> = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const toast = useToast();
//   const [isVisible, setIsVisible] = useState(true);

  const handleMarkAttendance = () => {
    setAttendanceMarked(true);
    toast.toast({
      title: "Attendence Marked!",
      description: "Your attendence has been marked successfully.",
    })
  }

  const renderContent = () => {
    switch (activeItem) {
      case "dashboard":
        return (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Quick Actions</MenubarTrigger>
              <MenubarContent>
                <MenubarMenu>
                  <MenubarItem icon={CheckCircle}>Mark Attendance</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Apply for Leave</MenubarItem>
                  <MenubarItem>View Payroll</MenubarItem>
                  <MenubarItem>View Grievances</MenubarItem>
                </MenubarMenu>
              </MenubarContent>
            </MenubarMenu>
            </Menubar> */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Attendance
                </CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {attendanceMarked ? "Marked" : "Not Marked"}
                </div>
                <Button
                  onClick={() => handleMarkAttendance()}
                  disabled={attendanceMarked}
                  className="mt-2"
                >
                  Mark Attendance
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Payroll</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2,345</div>
                <p className="text-xs text-muted-foreground">
                  Last month&apos;s salary
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Leave Balance
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15 days</div>
                <p className="text-xs text-muted-foreground">
                  Remaining paid leave
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Grievances
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">Open grievances</p>
              </CardContent>
            </Card>
          </div>
        );
      case "attendance":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Attendance Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
        );
      case "payroll":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Payroll Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="sp  ace-y-2">
                <div className="flex justify-between">
                  <span>Basic Salary:</span>
                  <span>$2,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Allowances:</span>
                  <span>$300</span>
                </div>
                <div className="flex justify-between">
                  <span>Deductions:</span>
                  <span>$150</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Net Salary:</span>
                  <span>$2,150</span>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      case "grievances":
        return (
          <Card>
            <CardHeader>
              <CardTitle>My Grievances</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-800 rounded">
                  <span>Work Environment Concern</span>
                  <span className="text-yellow-500">In Progress</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-800 rounded">
                  <span>Salary Discrepancy</span>
                  <span className="text-green-500">Resolved</span>
                </div>
                <Button className="w-full">
                  <FileText className="mr-2 h-4 w-4" /> File New Grievance
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar
        onItemClick={setActiveItem}
        onCollapseChange={setIsSidebarCollapsed}
        role={"employee"}
      />
      <div
        className={`flex-1 ${
          isSidebarCollapsed ? "collapsed" : ""
        } overflow-auto`}
      >
        <Header isSidebarCollapsed={isSidebarCollapsed} />
        <main className="p-1 md:p-2 lg:p-3 bg-slate-50 dark:bg-neutral-950 ">
          <div className="flex justify-between items-center mb-4">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Employee Dashboard</h1>
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
