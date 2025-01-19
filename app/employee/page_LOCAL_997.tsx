"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Clock, DollarSign, FileText } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";

interface EmployeeDashboardProps {
  activeItem: string;
}
const EmployeeDashboard: React.FC<EmployeeDashboardProps> = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [grievances, setGrievances] = useState([    
    { id: 1, title: "Work Environment Concern", status: "In Progress" },
    { id: 2, title: "Salary Discrepancy", status: "Resolved" },
  ]);

  useEffect(() => {
    setIsClient(true);
    setDate(new Date());
  }, []);
  

  const updateGrievanceStatus = (id: number, newStatus: string) => {
    setGrievances((prevGrievances) =>
      prevGrievances.map((grievance) =>
        grievance.id === id ? { ...grievance, status: newStatus } : grievance
      )
    );
  };
  useEffect(() => {
    // Ensure the script is loaded
    const script = document.createElement('script');
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    script.type = 'text/javascript';
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '67634ea7f1c0c8cb3f219575' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };
    document.body.appendChild(script);

    return () => {
     
      document.body.removeChild(script);
    };
  }, []);
  const renderContent = () => {
    switch (activeItem) {
      case "dashboard":
        return (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Attendance</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {attendanceMarked ? "Marked" : "Not Marked"}
                </div>
                <Button
                  onClick={() => setAttendanceMarked(true)}
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
                <CardTitle className="text-sm font-medium">Leave Balance</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15 days</div>
                <p className="text-xs text-muted-foreground">Remaining paid leave</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Grievances</CardTitle>
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
        <div className="flex flex-col items-center space-y-4">
  
          
          <div className="flex justify-between w-full">
            <button className="text-sm font-medium px-2 py-1 bg-gray-200 rounded">&larr; Previous</button>
            <button className="text-sm font-medium px-2 py-1 bg-gray-200 rounded">Next &rarr;</button>
          </div>
  
        
          <div className="w-full border p-4 rounded-md">
            {Array.from({ length: 12 }, (_, monthIndex) => {
              const firstDayOfMonth = new Date(2025, monthIndex, 1);
              const daysInMonth = new Date(2025, monthIndex + 1, 0).getDate();
  
              return (
                <div key={monthIndex} className="mb-6">
                  <div className="text-lg font-semibold mb-2">
                    {firstDayOfMonth.toLocaleString("default", { month: "long" })}
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center text-xs">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="font-medium">
                        {day}
                      </div>
                    ))}
  
                   
                    {Array.from({ length: firstDayOfMonth.getDay() }, (_, i) => (
                      <div key={i}></div>
                    ))}
  
                    
                    {Array.from({ length: daysInMonth }, (_, dayIndex) => {
                      const day = new Date(2025, monthIndex, dayIndex + 1);
                      const isPresent = Math.random() > 0.2;
                      const isHoliday = day.getDay() === 0 || day.getDay() === 6;
                      const status = isHoliday
                        ? "Holiday"
                        : isPresent
                        ? "Present"
                        : "Absent";
                      const color = isHoliday
                        ? "bg-gray-400"
                        : isPresent
                        ? "bg-green-500"
                        : "bg-orange-500";
  
                      return (
                        <div
                          key={dayIndex}
                          className={`w-6 h-6 ${color} rounded-full flex items-center justify-center`}
                          title={`Date: ${day.toDateString()}, Status: ${status}`}
                        >
                          {dayIndex + 1}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
  
         
          <div className="flex w-full">
            {Array.from({ length: 12 }, (_, monthIndex) => (
              <div
                key={monthIndex}
                className="text-xs font-medium text-center gap-1 flex-1"
              >
                {new Date(2025, monthIndex, 1).toLocaleString("default", {
                  month: "short",
                })}
              </div>
            ))}
          </div>
  
          <div className="flex w-full ps-6">
            {Array.from({ length: 12 }, (_, monthIndex) => (
              <div key={monthIndex} className="flex-1 grid grid-cols-5 gap-0.5">
                {Array.from({ length: 30 }, (_, dayIndex) => {
                  const date = new Date(2025, monthIndex, dayIndex + 1);
                  const isPresent = Math.random() > 0.2;
                  const color = isPresent ? "bg-green-500" : "bg-orange-500";
  
                  return (
                    <div
                      key={dayIndex}
                      className={`w-4 h-4 ${color} rounded`}
                      title={`Date: ${date.toDateString()}, Status: ${isPresent ? "Present" : "Absent"}`}
                    >
                      <span className="sr-only">
                        {isPresent ? "Present" : "Absent"}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
  
        </div>
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
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <span>Basic Salary:</span>
                    </div>
                    <span className="text-lg font-semibold">$2,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5 text-green-500" />
                      <span>Allowances:</span>
                    </div>
                    <span className="text-lg font-semibold">$300</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5 text-red-500" />
                      <span>Deductions:</span>
                    </div>
                    <span className="text-lg font-semibold">$150</span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between items-center font-bold">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <span>Net Salary:</span>
                    </div>
                    <span className="text-xl">$2,150</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        
        return (
          <Card>
            <CardHeader>
              <CardTitle>Payroll Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
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
                  {grievances.map((grievance) => (
                    <div
                      key={grievance.id}
                      className="flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-800 rounded"
                    >
                      <span>{grievance.title}</span>
                      <span
                        className={`${
                          grievance.status === "Resolved"
                            ? "text-green-500"
                            : "text-yellow-500"
                        }`}
                      >
                        {grievance.status}
                      </span>
                      <div className="flex space-x-2">
                        {grievance.status !== "Resolved" && (
                          <Button
                            onClick={() =>
                              updateGrievanceStatus(grievance.id, "Resolved")
                            }
                            className="text-xs"
                          >
                            Mark as Resolved
                          </Button>
                        )}
                        {grievance.status !== "In Progress" && (
                          <Button
                            onClick={() =>
                              updateGrievanceStatus(grievance.id, "In Progress")
                            }
                            className="text-xs"
                          >
                            Mark as In Progress
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                  <Button className="w-full">
                    <FileText className="mr-2 h-4 w-4" /> File New Grievance
                  </Button>
                </div>
    
                
                <div>
      
      <div id="flat-chat"></div> 
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
      {showWelcomeMessage && isClient && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-accent rounded-lg shadow-lg p-8 w-[600px] h-[400px]">
            <h2 className="text-3xl font-bold mb-6">Welcome Mr. Aftab!</h2>
            <p className="text-lg text-gray-100 mb-6 mt-12">
              We’re excited to have you here! Explore the dashboard to manage
              your tasks effectively and efficiently.
            </p>
            <Button
              onClick={() => setShowWelcomeMessage(false)}
              className="w-full text-lg py-3 bg-primary text-gray-100"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
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
