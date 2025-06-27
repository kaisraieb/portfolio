import { HeaderSection } from "@/components/layout/HeaderSection";
import { ProjectsSection } from "./components/layout/ProjectsSection";
import { TopHeader } from "./components/layout/TopHeader";

function App() {
  return (
    // <main className="">

    // </main>

    // smooth scroll by section
    <div className="min-h-screen bg-black text-white">
      <TopHeader />
      <HeaderSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
