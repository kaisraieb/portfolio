import { HeaderSection } from "@/components/layout/HeaderSection";

function App() {
  return (
    <main className="bg-black text-white my-auto min-h-screen">
      <HeaderSection />
    </main>

    // smooth scroll by section
    /*
    <div className="h-screen snap-y snap-mandatory overflow-scroll">
      <section className="h-screen snap-start bg-black text-white">Section 1</section>
      <section className="h-screen snap-start bg-gray-900 text-white">Section 2</section>
      <section className="h-screen snap-start bg-gray-800 text-white">Section 3</section>
    </div>
    */
  );
}

export default App;
