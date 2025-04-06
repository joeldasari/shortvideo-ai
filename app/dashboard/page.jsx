"use client";

import { CirclePlus } from "lucide-react";
import ProtectedRoute from "../_components/protected-route";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [videos, setVideos] = useState([]);
  return (
    <ProtectedRoute>
      <div className="flex flex-col gap-8">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
            Dashboard
          </h1>
          <Link href="/create">
            <Button className="cursor-pointer bg-purple-500 hover:bg-purple-600 text-white">
              <CirclePlus />
              Create
            </Button>
          </Link>
        </div>
        <div>
          {videos.length === 0 ? (
            <p className="text-center text-gray-500">
              No videos found. Create a new video.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {videos.map((video) => (
                <div key={video.id} className="card">
                  <img src={video.thumbnail} alt={video.title} />
                  <h2>{video.title}</h2>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
