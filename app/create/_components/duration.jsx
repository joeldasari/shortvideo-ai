import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Duration({ handleChange }) {
  const options = ["30 Seconds", "60 Seconds"];
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold text-purple-400">Duration</h1>
      <p className="text-gray-400">Select the duration of your video?</p>
      <Select
        onValueChange={(value) => {
          handleChange("duration", value);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Duration" />
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
