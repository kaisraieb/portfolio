import { Clock } from "lucide-react";

export function TopHeader() {
  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-800">
      <div className="text-sm text-gray-400">EST • 2022</div>
      <div className="flex items-center gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          13:14:28 GMT+1
        </div>
      </div>
    </header>
  );
}
