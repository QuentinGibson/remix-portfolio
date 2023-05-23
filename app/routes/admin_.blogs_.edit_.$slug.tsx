import { LoaderArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import draftCSS from "quill/dist/quill.snow.css";
import invariant from "tiny-invariant";
import { getPostBySlug } from "~/models/blog.server";
import { getCurrentDateInput } from "~/utils";

export const links = () => [{ rel: "stylesheet", href: draftCSS }];

export const loader = async ({ request, params }: LoaderArgs) => {
  const slug = params.slug
  invariant(slug, "No slug found")
  const post = await getPostBySlug(slug)
  return { post }
};

export default function AdminEditPost() {
  const { post } = useLoaderData<typeof loader>()
  const { quill, quillRef } = useQuill();
  const [content, setContent] = useState<string>("")

  useEffect(() => {
    quill?.on('text-change', () => {
      setContent(quill?.root.innerHTML)
    })
  }, [quill])

  return (
    <main className="bg-cream py-8 px-4">
      <h1 className="text-5xl font-bold">Edit Blog - {post.title}</h1>
      <Form method="POST" className="mt-8" encType="multipart/form-data">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <label className="text-lg" htmlFor="title">Title</label>
            <input required type="text" name="title" id="title" defaultValue={post.title} />
          </div>
          <div className="flex gap-2">
            <label className="text-lg" htmlFor="slug">Slug</label>
            <input required type="text" name="slug" id="slug" defaultValue={post.slug} />
          </div>
          <div className="flex gap-2">
            <label className="text-lg" htmlFor="date">Date</label>
            <input required type="date" name="date" id="date" defaultValue={getCurrentDateInput(post.date)} />
          </div>
          <div className="flex gap-2">
            <label className="text-lg" htmlFor="category">Category</label>
            <input required type="text" name="category" id="category" defaultValue={post.category} />
          </div>
          <div className="flex gap-2">
            <label className="text-lg" htmlFor="image">Image</label>
            <input required type="file" name="image" id="image" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="content" className="text-lg">Content</label>
            <div className="mt-2 mb-8">
              <div className="w-full h-[500px] bg-slate-300">
                <div ref={quillRef} className="bg-white"></div>
                <input required type="hidden" name="content" value={content} />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-yellow-700" type="submit">Submit</button>
          </div>
        </div>
      </Form>
    </main>
  );
};