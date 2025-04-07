"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Topic({ topic, handleChange }) {
  const options = [
    "Custom Prompt",
    "Fun Facts",
    "Thriller",
    "Horror",
    "Historical",
    "Comedy",
    "Romance",
    "Adventure",
    "Fantasy",
    "Sci-Fi",
    "Mystery",
    "Drama",
    "Random Story",
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold text-purple-400">Content</h1>
      <p className="text-gray-400">What is the topic of your video?</p>
      <Select
        onValueChange={(value) => {
          setSelectedOption(value);
          value !== "Custom Prompt" && handleChange("topic", value);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedOption === "Custom Prompt" && (
        <Textarea
          type="text"
          placeholder="Enter your custom prompt"
          className="w-full mt-2"
          onChange={(e) => handleChange("topic", e.target.value)}
        />
      )}
    </div>
  );
}
