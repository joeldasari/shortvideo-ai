"use client";

import { LayoutDashboard, Loader2 } from "lucide-react";
import ProtectedRoute from "../_components/protected-route";
import Duration from "./_components/duration";
import Style from "./_components/style";
import Topic from "./_components/topic";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function Create() {
  const [formData, setFormData] = useState({
    topic: "",
    style: "",
    duration: "",
  });
  const [loading, setLoading] = useState(false);
  const [videoScript, setVideoScript] = useState(null);
  const handleChange = (fieldName, fieldValue) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue,
    }));
  };

  const getVideoScript = async () => {
    if (!formData.topic || !formData.style || !formData.duration) {
      if (!formData.topic) {
        toast.error("Please enter a topic");
      }
      if (!formData.style) {
        toast.error("Please select a style");
      }
      if (!formData.duration) {
        toast.error("Please select a duration");
      }
      return;
    }
    try {
      setLoading(true);
      const prompt = `Write a Script to Generate ${formData.duration} Video on Topic : Interesting ${formData.topic} Story along with AI Image Prompts in ${formData.style} Format for each scene and give the result in a JSON format with imagePrompt and contentText fields`;

      const result = await axios.post("/api/generate-script", {
        prompt,
      });

      console.log(result.data.VideoScript);
      setVideoScript(result.data.VideoScript);
      toast.success("Video script generated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
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
          <Button
            onClick={getVideoScript}
            disabled={loading}
            className="bg-purple-500 text-accent-foreground hover:bg-purple-600 cursor-pointer w-max"
          >
            <Loader2
              className={`${loading ? "block animate-spin size-4" : "hidden"}`}
            />
            <span>Generate</span>
          </Button>
        </div>
      </div>
    </ProtectedRoute>
  );
}
