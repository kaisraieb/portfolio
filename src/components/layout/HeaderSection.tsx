import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Copy, MapPin, Check } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useState } from "react";

export function HeaderSection() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText("kaissraieb@gmail.com");
    toast.success("Email copied to clipboard !");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <div className="flex items-center sm:items-start gap-6 mb-8 flex-col sm:flex-row">
        <Avatar className="w-50 h-50 sm:w-16 sm:h-16">
          <AvatarImage
            src="/kais.png"
            className="rounded-full"
            alt="Kais Sraieb"
          />
          <AvatarFallback>KS</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center sm:justify-start justify-center gap-2 mb-1 ">
            <h1 className="text-2xl font-bold">KAIS SRAIEB</h1>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-gray-400 mb-4 sm:text-start text-center">
            Full-Stack Web Developer
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4 sm:justify-start justify-center">
            <div className="flex items-center gap-1 ">
              <MapPin className="w-4 h-4" />
              Based in Zarzis, Tunisia 🇹🇳
            </div>
          </div>
          <p className="text-gray-300 mb-6 max-w-2xl flex-wrap sm:text-start text-center">
            I'm Kais Sraieb, a Full-Stack Web Developer 🧠💻 I build powerful,
            user-friendly web apps with React.js on the front and Python
            (FastAPI/Flask) on the back. Based in Tunisia 🇹🇳, I blend clean
            UX/UI design with scalable code that just works — mobile, desktop,
            wherever you are. From interactive interfaces to rock-solid APIs, I
            craft seamless experiences that make both users and servers happy.
            <br />
            Always learning, always building, always pushing the web forward 🚀
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-1 sm:justify-start justify-center">
            <Button
              onClick={copyToClipboard}
              disabled={copied}
              className={`ml-1 text-gray-300 hover:text-white transition cursor-pointer flex items-center gap-2 select-none`}
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
              {copied ? "Copied" : "Copy Email"}
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
}
