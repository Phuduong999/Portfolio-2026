import { projects } from '@/data/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 px-4 sm:px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
      <Link
        href="/projects"
        className="text-accent hover:text-accent-hover transition-colors text-sm font-medium mb-6 md:mb-8 inline-flex items-center min-h-[44px] py-2"
      >
        ← Back to Projects
      </Link>

      <h1 className="text-3xl sm:text-4xl md:text-6xl uppercase mb-4">
        {project.title}
      </h1>

      <p className="text-muted text-sm uppercase tracking-wider mb-6">
        {project.category}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium rounded-full bg-card-bg border border-card-border"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-lg leading-relaxed mb-12">
        {project.fullDesc}
      </p>

      {project.images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {project.images.map((img, i) => (
            <div
              key={i}
              className="aspect-video bg-card-bg border border-card-border rounded-xl overflow-hidden flex items-center justify-center"
            >
              <span className="text-muted text-sm">Image: {img}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-3 sm:gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent-hover transition-colors min-h-[44px] flex items-center"
          >
            View Live →
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-card-bg border border-card-border rounded-full text-sm font-medium hover:bg-card-border transition-colors min-h-[44px] flex items-center"
          >
            GitHub →
          </a>
        )}
      </div>
    </div>
  );
}
