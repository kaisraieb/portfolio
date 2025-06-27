import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Copy, MapPin } from "lucide-react";
import { Button } from "../ui/button";

export function HeaderSection() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <div className="flex items-start gap-6 mb-8">
        <Avatar className="w-16 h-16">
          <AvatarImage
            src="/kais.png"
            className="rounded-full"
            alt="Kais Sraieb"
          />
          <AvatarFallback>KS</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-xl font-semibold">KAIS SRAIEB</h1>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          </div>
          <p className="text-gray-400 mb-4">Full-Stack Web Developer</p>
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Based in Zarzis, Tunisia 🇹🇳
            </div>
          </div>
          <p className="text-gray-300 mb-4 max-w-2xl">
            I'm Kais Sraieb, a Full-Stack Web Developer 🧠💻 I build powerful,
            user-friendly web apps with React.js on the front and Python
            (FastAPI/Flask) on the back. Based in Tunisia 🇹🇳, I blend clean
            UX/UI design with scalable code that just works — mobile, desktop,
            wherever you are. From interactive interfaces to rock-solid APIs, I
            craft seamless experiences that make both users and servers happy.
            <br />
            Always learning, always building, always pushing the web forward 🚀
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-1">
            <Button
              // onClick={copyToClipboard}
              className="ml-1 text-gray-300 hover:text-white transition cursor-pointer"
            >
              <Copy size={20} />
              Copy Email
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
}
