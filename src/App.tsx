import { HeaderSection } from "@/components/layout/HeaderSection";
import { ProjectSection } from "./components/layout/ProjectsSection";

function App() {
  return (
    // <main className="">

    // </main>

    // smooth scroll by section
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll bg-black text-white my-auto min-h-screen">
      <HeaderSection />
      <ProjectSection />
    </div>
  );
}

export default App;
