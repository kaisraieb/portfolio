// No specific UI component imports are strictly necessary for this visual effect,
// but if you have a Card component that's just a styled div, you could use it.
// For simplicity, we'll just use divs.

// You'll need to make sure these image paths are correct for your project!
const projectVisuals = [
  {
    id: 1,
    src: "/project.jpg",
    alt: "Pink cloud themed project",
    rotation: "-rotate-6",
    left: "left-[5%]",
    top: "top-[10%]",
  },
  {
    id: 2,
    src: "/project.jpg",
    alt: "Mobile app project screens",
    rotation: "rotate-3",
    left: "left-[30%]",
    top: "top-[25%]",
  },
  {
    id: 3,
    src: "/project.jpg",
    alt: "Colorful abstract design project",
    rotation: "-rotate-3",
    left: "left-[55%]",
    top: "top-[15%]",
  },
  {
    id: 4,
    src: "/project.jpg",
    alt: "Dashboard interface project",
    rotation: "rotate-6",
    left: "left-[75%]",
    top: "top-[20%]",
  },
];

export function ProjectSection() {
  return (
    <section
      id="projects"
      className="relative snap-start w-full min-h-screen md:h-[50vh] overflow-hidden bg-zinc-950 flex items-center justify-center"
    >
      <div className="relative w-full h-[60%] max-w-6xl m-auto  flex items-center justify-center">
        {projectVisuals.map((visual) => (
          <div
            key={visual.id}
            className={`absolute w-[25%] md:w-[30%] aspect-video bg-zinc-800 rounded-xl shadow-2xl overflow-hidden
                        transform transition-all duration-500 ease-out hover:scale-105 hover:z-10
                        ${visual.rotation} ${visual.left} ${visual.top}
                        group`}
            style={{
              // Using arbitrary values for fine-tuning positioning if needed beyond Tailwind classes
              // For instance, if 'left-[5%]' isn't enough precision, you could do left: '5%'
              // This also ensures they are relative to their parent container
              transform: `rotate(${
                visual.rotation.replace("rotate-", "-") ||
                visual.rotation.replace("rotate-", "") ||
                "0deg"
              })`,
              left: visual.left.includes("[")
                ? visual.left.match(/\[(.*?)%\]/)?.[1] + "%"
                : visual.left,
              top: visual.top.includes("[")
                ? visual.top.match(/\[(.*?)%\]/)?.[1] + "%"
                : visual.top,
            }}
          >
            <img
              src={visual.src}
              alt={visual.alt}
              className="w-full h-full object-cover"
            />
            {/* Optional: Overlay for subtle effect or if images are not exactly right */}
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* A small "Work" heading or indicator could go here, or remain in the header section as before */}
      <div className="absolute bottom-8 text-sm text-zinc-500 tracking-widest uppercase flex items-center space-x-2">
        <span className="w-4 h-4 rounded-full bg-indigo-500 animate-pulse"></span>{" "}
        {/* Little pulsating dot */}
        <span className="text-zinc-400 font-bold text-lg">
          My Creations
        </span>{" "}
        {/* More impactful text */}
        <span className="w-4 h-4 rounded-full bg-indigo-500 animate-pulse"></span>
      </div>
    </section>
  );
}
