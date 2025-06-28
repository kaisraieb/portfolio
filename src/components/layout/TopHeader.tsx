import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

export function TopHeader() {
  const getDateWithGMTOffset = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    // get GMT Offset in hours
    const timeZoneOffsetMin = now.getTimezoneOffset(); // in minutes
    const offsetHours = -timeZoneOffsetMin / 60;
    const gmt = `GMT${offsetHours >= 0 ? "+" : ""}${offsetHours}`;

    return `${hours}:${minutes}:${seconds} ${gmt}`;
  };

  const [date, setDate] = useState("");

  useEffect(() => {
    setInterval(() => {
      setDate(getDateWithGMTOffset().toString());
    });
  }, []);

  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-800">
      <div className="text-sm text-gray-400">KAIS • SRAIEB</div>
      <div className="flex items-center gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {date}
        </div>
      </div>
    </header>
  );
}
