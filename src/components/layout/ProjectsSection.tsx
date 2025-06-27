import { Card, CardContent } from "../ui/card";

export function ProjectsSection() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <div className="relative mb-12">
        <div className="grid grid-cols-3 gap-4 ">
          <Card className="bg-gradient-to-br from-pink-400 to-purple-400 border-0 transform rotate-[-2deg] hover:rotate-0 transition-transform">
            <CardContent className="p-6 h-48 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl mb-2">😊</div>
                <div className="font-semibold">Healur</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-400 to-pink-500 border-0 transform rotate-[2deg] hover:rotate-0 transition-transform">
            <CardContent className="p-6 h-48 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl font-bold mb-2">123</div>
                <div className="font-semibold">Project</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-purple-600 border-0 transform rotate-[1deg] hover:rotate-0 transition-transform">
            <CardContent className="p-6 h-48 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="font-bold text-lg mb-2">SPURT</div>
                <div className="text-sm">Mobile App</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 transform rotate-[-1deg] hover:rotate-0 transition-transform">
            <CardContent className="p-6 h-48 flex items-center justify-center">
              <div className="text-center text-black">
                <div className="font-semibold mb-2">Dashboard</div>
                <div className="text-sm text-gray-600">Analytics Platform</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-purple-600 border-0 transform rotate-[1deg] hover:rotate-0 transition-transform">
            <CardContent className="p-6 h-48 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="font-bold text-lg mb-2">SPURT</div>
                <div className="text-sm">Mobile App</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-purple-600 border-0 transform rotate-[1deg] hover:rotate-0 transition-transform">
            <CardContent className="p-6 h-48 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="font-bold text-lg mb-2">SPURT</div>
                <div className="text-sm">Mobile App</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
