import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Duration() {
  const options = [
    "Custom Prompt",
    "Random Story",
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
  ];
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold text-purple-400">Content</h1>
      <p className="text-gray-400">What is the topic of your video?</p>
      <Select>
        <SelectTrigger className="w-[180px]">
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
    </div>
  );
}
