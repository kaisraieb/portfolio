import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { ProjectPreviewProps } from "@/types/project";

export function ProjectPreview({ project, onClose }: ProjectPreviewProps) {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 overflow-hidden" />
      <DialogContent className="max-w-lg w-full bg-white dark:bg-gray-900 p-6 rounded-xl">
        <img
          src={project.image}
          alt={project.title}
          className="mt-4 rounded-md mb-4 w-full h-48 object-cover"
        />
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
          <Button className="w-full">Live Demo 🚀</Button>
        </a>
      </DialogContent>
    </Dialog>
  );
}
