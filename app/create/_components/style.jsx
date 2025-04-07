"use client";

import { useState } from "react";

export default function Style({ handleChange }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    {
      name: "Realistic",
      image: "/realistic.png",
    },
    {
      name: "Cartoon",
      image: "/cartoon.png",
    },
    {
      name: "Comic",
      image: "/comic.png",
    },
    {
      name: "GTA",
      image: "/gta.png",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold text-purple-400">Style</h1>
      <p className="text-gray-400">Select your video style</p>

      <div className="flex items-center gap-2">
        {options.map((option) => (
          <div
            key={option.name}
            className={`${
              selectedOption === option.name
                ? "border-2 border-purple-400"
                : "border-2"
            } flex flex-col items-center gap-2 p-2 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300`}
            onClick={() => {
              setSelectedOption(option.name);
              handleChange("style", option.name);
            }}
          >
            <img
              src={option.image}
              alt={option.name}
              className="size-14 sm:size-28 object-cover rounded-2xl"
            />
            <span
              className={`${
                selectedOption === option.name
                  ? "text-purple-400"
                  : "text-accent-foreground"
              } text-xs sm:text-sm`}
            >
              {option.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
