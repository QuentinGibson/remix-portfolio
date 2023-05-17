import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Project } from "~/models/project.server";
import { Parallax } from "react-parallax";

export const loader = async ({ request, params }: LoaderArgs) => {
  const project: Project = {
    id: "1",
    title: "Remix Run",
    date: new Date('2022-10-20'),
    type: "Web Development",
    content: "Remix Run is an all-in-one web development solution that lets you build production-ready websites and web apps with a single, integrated suite of tools.",
    category: "Remix Run",
    image: `https://picsum.photos/id/237/1000/1000`,
    link: "https://remix.run",
    slug: "remix-run",
    gallery: [
      "https://picsum.photos/id/239/1000/1000",
      "https://picsum.photos/id/240/1000/1000",
    ]
  }
  return json({ project });
};

export default function SingleProjectRoute() {
  const { project } = useLoaderData<typeof loader>();
  const dateObj = new Date(project.date);
  const displayYear = dateObj.getFullYear();
  return (
    <main>
      <h1 className="text-5xl text-dark bg-cream py-8 px-4">{project.title}</h1>
      <section className="bg-cream text-dark font-serif px-4">
        <div className="flex flex-col gap-10">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <p className="text-lightDark font-thin">Year</p>
              <span className="font-bold text-dark leading-6">{displayYear}</span>
            </div>
            <div className="flex flex-col">
              <p className="text-lightDark font-thin">Technology</p>
              <span className="font-bold text-dark leading-6">{project.category}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-lightDark font-thin">Categories</p>
            <span className="font-bold text-dark leading-6">{project.type}</span>
          </div>
        </div>
      </section>
      <div className="py-10 bg-cream">
        <Parallax
          bgImage={project.image}
          strength={100}
          className="h-[300px] w-full md:h-[500px]"
        >
        </Parallax>
      </div>

      <section className="bg-cream px-4 pb-8">
        <h1 className="font-bold text-2xl">Project Details</h1>
        <div className="mt-8">
          <p className="font-thin text-lightDark font-serif">
            {project.content}
          </p>
        </div>
        <div className="grid gap-8 py-8">
          {project.gallery.map((image, index) => (
            <div key={index}>
              <img src={image} alt="" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
