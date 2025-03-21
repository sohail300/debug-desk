"use client";

// import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Bell, Dot, LogOutIcon } from "lucide-react";
// import { useQuery } from "@tanstack/react-query";
import { GradientSpinner } from "./Loader";
import { useAuth } from "@clerk/nextjs";

async function getUnreadNotificationsCount() {
  const response = await fetch("/api/notifications/unread-count");
  if (!response.ok) {
    throw new Error("Failed to fetch unread notifications count");
  }
  return response.json();
}

export function DashboardNavbar() {
  const { isLoaded, isSignedIn, signOut } = useAuth();
  console.log(isSignedIn);

  // if (!isLoaded) return <GradientSpinner />;

  //   const { data: unreadCount } = useQuery({
  //     queryKey: ['unreadNotificationsCount'],
  //     queryFn: getUnreadNotificationsCount,
  //     refetchInterval: 60000, // Refetch every minute
  //   })

  const unreadCount = 5;

  return (
    <nav className="flex items-center justify-between p-4 bg-background-main fixed top-0 w-full z-50">
      <div className=" font-semibold text-lg">Debug Desk</div>
      {isSignedIn && (
        <div className="flex items-center space-x-8">
          <div className="relative cursor-pointer">
            <Bell size={20} fill="text-gray-800" />
            {unreadCount > 0 && (
              <Dot
                color="#60a5fa"
                size={48}
                className="absolute -top-6 -right-6"
              />
            )}
          </div>
          <Button
            onClick={() => signOut()}
            variant="outline"
            className="silver-gradient-btn hover:text-gray-800"
          >
            <LogOutIcon className="h-4 w-8 " />
            Logout
          </Button>
        </div>
      )}
    </nav>
  );
}
