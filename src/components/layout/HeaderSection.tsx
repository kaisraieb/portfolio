import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Copy, Check, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner"; // Assuming 'sonner' is your toast notification library

export function HeaderSection() {
  const [copied, setCopied] = useState(false);
  const [timeNow, setTimeNow] = useState("");

  const handleCopy = () => {
    const email = "kaissraieb@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard! 📧", {
      description: "You're all set to connect!",
      duration: 2000,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  // format date like "H:M:S | DD:MM:AAAA"
  const formatDateTime = () => {
    let d = new Date();

    // date
    let days = d.getDate();
    let months = d.getMonth();
    let years = d.getFullYear();

    // time
    let hours = d.getHours();
    let minuts = d.getMinutes();
    let seconds = d.getSeconds();

    // set the time dynamically

    return `${hours}:${minuts}:${seconds} | ${days}/${months}/${years}`;
  };

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === "c" || event.key === "C") {
        handleCopy();
      }
    };
    document.addEventListener("keydown", handleKeyPress);

    // set time now span in the top bar
    setInterval(() => {
      setTimeNow(formatDateTime());
    });
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <section className="w-full snap-start flex flex-col items-center justify-center max-w-4xl mx-auto py-16 px-4 text-white min-h-screen">
      {/* Top right - "Est. 2020" */}
      <div className="absolute top-8 px-8 w-full flex items-center justify-between z-999 ">
        <span className="text-xs text-zinc-500 tracking-widest uppercase">
          KaisSraieb.DEV
        </span>
        <span className="text-xs text-zinc-500 tracking-widest uppercase flex items-center gap-3.5">
          <Clock size={17} />
          {timeNow}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 mb-8">
        <Avatar className="w-24 h-24 border-2 border-zinc-700">
          {" "}
          {/* Added a subtle border */}
          <AvatarImage src="/kais.png" alt="Kais Sraieb" />
          <AvatarFallback className="text-black font-bold text-2xl">
            KS
          </AvatarFallback>
        </Avatar>
        <div className="text-center space-y-1">
          <h1 className="text-3xl font-bold text-zinc-100">Kais Sraieb ✨</h1>
          <p className="text-lg text-zinc-400">Full Stack Web Developer</p>
        </div>
      </div>
      <p className="text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-6 text-center">
        Hey there! I'm Kais, a passionate full-stack developer currently
        crafting digital experiences at{" "}
        <strong className="text-indigo-400">Softylines</strong> 🟣, nestled in
        the vibrant tech scene of Zarzis, Tunisia 🇹🇳.
      </p>
      <p className="max-w-xl mx-auto text-sm text-zinc-500 leading-relaxed text-center mb-8">
        My jam? Building clean, intuitive, and scalable full-stack web
        applications, primarily leveraging the dynamic duo of{" "}
        <span className="text-blue-400">React.js</span> and{" "}
        <span className="text-green-400">Python</span>. I'm all about that
        seamless UX, thoughtful UI, and the kind of efficient backend logic that
        just *works* - whether you're on a tiny phone screen or a massive
        desktop monitor. It's about creating digital poetry, where form meets
        function in a beautiful dance.
      </p>
      <div className="flex items-center space-x-4 mb-8">
        <Button
          variant="outline" // Using outline for a more subtle look
          className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700 border-zinc-700 hover:border-zinc-600 transition-all duration-300 group"
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="w-4 h-4 mr-2 text-green-400 group-hover:text-green-300" />
          ) : (
            <Copy className="w-4 h-4 mr-2 text-zinc-400 group-hover:text-zinc-300" />
          )}
          <span className="text-sm font-medium">
            {copied ? "Email Copied!" : "Copy Email"}
          </span>
        </Button>
        <span className="text-xs text-zinc-500">
          Press{" "}
          <kbd className="bg-zinc-700 px-2 py-1 rounded text-white font-mono shadow-sm">
            C
          </kbd>{" "}
          to copy
        </span>
      </div>
    </section>
  );
}
