import React, { useState } from "react";
import { Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

const NotificationItem: React.FC<Notification> = ({ title, message, timestamp, read }) => (
    <div className={`p-4 ${read ? 'bg-muted/30' : 'bg-background'} border-b hover:bg-accent/10 transition-colors`}>
        <h4 className="font-semibold text-foreground">{title}</h4>
        <p className="text-sm text-foreground/80">{message}</p>
        <span className="text-xs text-foreground/70">{timestamp}</span>
    </div>
);

import { AnimatedList } from "@/components/ui/animated-list";

const NotificationDropdown: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "New Message",
      message: "You have received a new message",
      timestamp: "5m ago",
      read: false,
    },
    {
        id: "2",
        title: "System Update",
        message: "System update available",
        timestamp: "10m ago",
        read: false,
    },
    {
        id: "3",
        title: "Meeting Reminder",
        message: "Meeting with the team at 3 PM",
        timestamp: "15m ago",
        read: true,
    },
    {
        id: "4",
        title: "New Comment",
        message: "Someone commented on your post",
        timestamp: "20m ago",
        read: false,
    },
    {
        id: "5",
        title: "New Like",
        message: "Someone liked your post",
        timestamp: "25m ago",
        read: true,
    },
    {
        id: "6",
        title: "Friend Request",
        message: "You have a new friend request",
        timestamp: "30m ago",
        read: false,
    },
    {
        id: "7",
        title: "Event Invitation",
        message: "You are invited to an event",
        timestamp: "35m ago",
        read: true,
    },
    {
        id: "8",
        title: "New Follower",
        message: "You have a new follower",
        timestamp: "40m ago",
        read: false,
    },
    {
        id: "9",
        title: "Password Change",
        message: "Your password was changed",
        timestamp: "45m ago",
        read: true,
    },
    {
        id: "10",
        title: "Security Alert",
        message: "New login from an unknown device",
        timestamp: "50m ago",
        read: false,
    },
    // Add more mock notifications as needed
  ]);

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>  
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-[1.2rem] h-[1.2rem]" />
          {notifications.some((n) => !n.read) && (
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="p-4 border-b">
          <h3 className="text-lg font-medium">Notifications</h3>
        </div>
        <div className="max-h-96 overflow-y-auto">
          <AnimatedList>
            {notifications.map((item, idx) => (
              <div onClick={() => markAsRead(item.id)} key={idx}>
                <NotificationItem {...item} />
              </div>
            ))}
          </AnimatedList>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropdown;
