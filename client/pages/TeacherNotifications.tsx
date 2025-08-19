import { useState } from "react";
import {
  ArrowLeft,
  Check,
  Archive,
  Trash2,
  Reply,
  Forward,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { link } from "fs";
import { Link } from "react-router-dom";

const notifications = [
  {
    id: 1,
    title: "Welcome to Sunshine Daycare",
    from: "Sarah Johnson - school admin",
    date: "Jul 5, 2023, 8:50 PM",
    content:
      "Welcome to our daycare family! We are excited to have your child join us. Please complete the enrollment forms by Friday.",
    type: "welcome",
    read: false,
    actions: ["Mark as Read", "Archive", "Delete"],
  },
  {
    id: 2,
    title: "Application Status Update",
    from: "Mountain View Academy",
    date: "Jul 3, 2023, 2:30 PM",
    content:
      "Your application has been received and is currently under review. We will contact you within 5-7 business days.",
    type: "status",
    read: true,
    actions: ["Archive", "Delete"],
  },
  {
    id: 3,
    title: "Waitlist Position Update",
    from: "Little Stars Preschool",
    date: "Jul 1, 2023, 10:15 AM",
    content:
      "Good news! You have moved up to position #3 on our waitlist. We expect to have availability soon.",
    type: "waitlist",
    read: false,
    actions: ["Mark as Read", "Archive", "Delete"],
  },
  {
    id: 3,
    title: "Waitlist Position Update",
    from: "Little Stars Preschool",
    date: "Jul 1, 2023, 10:15 AM",
    content:
      "Good news! You have moved up to position #3 on our waitlist. We expect to have availability soon.",
    type: "waitlist",
    read: false,
    actions: ["Mark as Read", "Archive", "Delete"],
  },
  {
    id: 3,
    title: "Waitlist Position Update",
    from: "Little Stars Preschool",
    date: "Jul 1, 2023, 10:15 AM",
    content:
      "Good news! You have moved up to position #3 on our waitlist. We expect to have availability soon.",
    type: "waitlist",
    read: false,
    actions: ["Mark as Read", "Archive", "Delete"],
  },
  {
    id: 3,
    title: "Waitlist Position Update",
    from: "Little Stars Preschool",
    date: "Jul 1, 2023, 10:15 AM",
    content:
      "Good news! You have moved up to position #3 on our waitlist. We expect to have availability soon.",
    type: "waitlist",
    read: false,
    actions: ["Mark as Read", "Archive", "Delete"],
  },
  {
    id: 3,
    title: "Waitlist Position Update",
    from: "Little Stars Preschool",
    date: "Jul 1, 2023, 10:15 AM",
    content:
      "Good news! You have moved up to position #3 on our waitlist. We expect to have availability soon.",
    type: "waitlist",
    read: false,
    actions: ["Mark as Read", "Archive", "Delete"],
  },
  {
    id: 3,
    title: "Waitlist Position Update",
    from: "Little Stars Preschool",
    date: "Jul 1, 2023, 10:15 AM",
    content:
      "Good news! You have moved up to position #3 on our waitlist. We expect to have availability soon.",
    type: "waitlist",
    read: false,
    actions: ["Mark as Read", "Archive", "Delete"],
  },
];

const sidebarItems = [
  { label: "All Filters", active: false },
  { label: "Parent Notifications", active: false, link: "/notifications" },
  { label: "School Administrator Notifications", active: false },
  {
    label: "Teacher Notifications",
    active: true,
    link: "/teacher-notifications",
  },
];

export default function TeacherNotifications() {
  const [selectedNotification, setSelectedNotification] = useState(
    notifications[0],
  );
  const [notificationList, setNotificationList] = useState(notifications);

  const markAsRead = (id: number) => {
    setNotificationList((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)),
    );
    if (selectedNotification?.id === id) {
      setSelectedNotification((prev) =>
        prev ? { ...prev, read: true } : prev,
      );
    }
  };

  const deleteNotification = (id: number) => {
    setNotificationList((prev) => prev.filter((notif) => notif.id !== id));
    if (selectedNotification?.id === id) {
      setSelectedNotification(notificationList[0] || null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-3 bg-purple-400 p-6 rounded-lg">
          <h2 className="text-lg font-bold text-black mb-6">Notifications</h2>
          <nav className="space-y-2">
            {sidebarItems.map((item, index) => (
              <Link to={item.link || "#"} key={index}>
                <button
                  key={index}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    item.active
                      ? "bg-black text-purple-400"
                      : "text-black hover:bg-black/10"
                  }`}
                >
                  {item.label}
                </button>
              </Link>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="col-span-9">
          <div className="flex items-center mb-6">
            <Button
              variant="outline"
              size="sm"
              className="mr-4 border-purple-200 text-purple-600 hover:bg-purple-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Messages
            </Button>
            <h1 className="text-2xl font-bold text-purple-900">
              Parent Notifications
            </h1>
          </div>

          {/* Notification List (could be shown in a sidebar or modal) */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-purple-900 mb-4">
              Teacher Notifications
            </h3>
            <div className="space-y-3">
              {notificationList.map((notif) => (
                <Card
                  key={notif.id}
                  className={`cursor-pointer border-purple-200 transition-all ${
                    selectedNotification?.id === notif.id
                      ? "ring-2 ring-purple-400"
                      : "hover:shadow-md"
                  }`}
                  onClick={() => setSelectedNotification(notif)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4
                            className={`font-medium ${notif.read ? "text-purple-700" : "text-purple-900 font-semibold"}`}
                          >
                            {notif.title}
                          </h4>
                          {!notif.read && (
                            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                          )}
                        </div>
                        <p className="text-sm text-purple-600">{notif.from}</p>
                        <p className="text-xs text-purple-500">{notif.date}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {!notif.read && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              markAsRead(notif.id);
                            }}
                            className="text-green-600 hover:bg-green-50"
                          >
                            <Check className="w-4 h-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteNotification(notif.id);
                          }}
                          className="text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
