"use client";

import { LayoutDashboard } from "lucide-react";
import ProtectedRoute from "../_components/protected-route";
import Duration from "./_components/duration";
import Style from "./_components/style";
import Topic from "./_components/topic";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Create() {
  const [formData, setFormData] = useState({
    topic: "",
    style: "",
    duration: "",
  });
  const handleChange = (fieldName, fieldValue) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue,
    }));
  };
  return (
    <ProtectedRoute>
      <div className="flex flex-col gap-8">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Create</h1>
          <Link href="/dashboard">
            <Button className="cursor-pointer bg-purple-500 hover:bg-purple-600 text-white">
              <LayoutDashboard />
              Dashboard
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-8 border rounded-2xl p-8 shadow-2xl">
          <Topic topic={formData.topic} handleChange={handleChange} />
          <Style style={formData.style} handleChange={handleChange} />
          <Duration duration={formData.duration} handleChange={handleChange} />
        </div>
      </div>
    </ProtectedRoute>
  );
}
