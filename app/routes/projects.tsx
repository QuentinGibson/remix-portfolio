import { LoaderArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  category: string;
  image: string;
  link: string;
  slug: string;
}

function Work({ project }: { project: Project }) {
  return (
    <article className="px-4">
      <Link to={`/projects/${project.slug}`}>
        <div className="flex flex-col gap-6 text-dark justify-center items-center">
          <div className="flex">
            <img className="w-full" src={project.image} alt="" />
          </div>
          <h2 className="text-4xl">{project.title}</h2>
          <div className="font-serif font-thin text-lightDark flex flex-col items-center">
            <p>{project.type}</p>
            <p>{project.category}</p>
          </div>
        </div>
      </Link>
    </article>
  )
}


export const loader = async ({ request, params }: LoaderArgs) => {
  const projects: Project[] = [
    {
      id: "1",
      title: "Remix Run",
      description: "Remix Run is an all-in-one web development solution that lets you build production-ready websites and web apps with a single, integrated suite of tools.",
      type: "Web Development",
      category: "Remix Run",
      image: `https://picsum.photos/id/237/700/700`,
      link: "https://remix.run",
      slug: "remix-run"
    },
    {
      id: "2",
      title: "Remix Run",
      description: "Remix Run is an all-in-one web development solution that lets you build production-ready websites and web apps with a single, integrated suite of tools.",
      type: "Web Development",
      category: "Remix Run",
      image: `https://picsum.photos/id/137/700/700`,
      link: "https://remix.run",
      slug: "remix-run"
    },
    {
      id: "3",
      title: "Remix Run",
      description: "Remix Run is an all-in-one web development solution that lets you build production-ready websites and web apps with a single, integrated suite of tools.",
      type: "Web Development",
      category: "Remix Run",
      image: `https://picsum.photos/id/211/700/700`,
      link: "https://remix.run",
      slug: "remix-run"
    }
  ]
  return json({ projects });
};

export default function ProjectsRoute() {
  const { projects } = useLoaderData<typeof loader>();
  return (
    <main>
      <h1 className="text-5xl text-dark bg-cream py-8 px-4">Projects</h1>
      <section className="bg-cream text-dark">
        <p className="px-4 mb-8"> A Collection of my favorites project I’ve designed recently. Feeling great while sharing here.
        </p>
        <div className="grid gap-8">
          {projects.map((project) => (
            <Work key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
};