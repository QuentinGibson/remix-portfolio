import { Form, Link } from "@remix-run/react";
import { BsArrowRight } from 'react-icons/bs'
import draftCSS from "quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";
import { useEffect, useState } from "react";
import { DataFunctionArgs, unstable_composeUploadHandlers, unstable_createFileUploadHandler, unstable_createMemoryUploadHandler, unstable_parseMultipartFormData, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getSession, requireUser, sessionStorage } from "~/session.server";
import { createBlog } from "~/models/blog.server";

export const links = () => [{ rel: "stylesheet", href: draftCSS }];

export default function NewBlogRoute() {
  const { quill, quillRef } = useQuill();
  const [content, setContent] = useState<string>("")

  useEffect(() => {
    quill?.on('text-change', () => {
      setContent(quill?.root.innerHTML)
    })
  }, [quill])

  return (
    <main className="bg-cream py-8 px-4">
      <Link to="admin" className="flex gap-1 items-center">
        <p className="py-4 text-lg">Back </p>
        <BsArrowRight />
      </Link>
      <h1 className="text-5xl font-bold">New Blog</h1>
      <Form method="POST" className="mt-8" encType="multipart/form-data">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <label className="text-lg" htmlFor="title">Title</label>
            <input required type="text" name="title" id="title" />
          </div>
          <div className="flex gap-2">
            <label className="text-lg" htmlFor="slug">Slug</label>
            <input required type="text" name="slug" id="slug" />
          </div>
          <div className="flex gap-2">
            <label className="text-lg" htmlFor="date">Date</label>
            <input required type="date" name="date" id="date" />
          </div>
          <div className="flex gap-2">
            <label className="text-lg" htmlFor="category">Category</label>
            <input required type="text" name="category" id="category" />
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

export const action = async ({ request, params }: DataFunctionArgs) => {
  const user = await requireUser(request)
  const session = await getSession(request);
  const uploadHandler = unstable_composeUploadHandlers(
    unstable_createFileUploadHandler({
      maxPartSize: 5_000_000,
      directory: "./public/uploads/blog",
      avoidFileConflicts: true,
      file: ({ filename }) => filename,
    }),
    // parse everything else into memory
    unstable_createMemoryUploadHandler()
  );
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );

  const image = formData.get("image") as any
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const date = formData.get("date") as string;
  const dateObj = new Date(date)
  const content = formData.get("content") as string;
  const publicIndex = image.filepath.indexOf("uploads")
  const category = formData.get("category") as string;

  const url = image.filepath.slice(publicIndex)

  invariant(image, "Image is required")
  invariant(title, "Title is required")
  invariant(slug, "Slug is required")
  invariant(content, "Content is required")

  invariant(image.filepath.includes("/uploads"), "Image must be uploaded")
  invariant(title.length > 0, "Title must be longer than 0")
  invariant(slug.length > 0, "Slug must be longer than 0")
  invariant(content.length > 0, "Content must be longer than 0")

  invariant(url.endsWith(".png") || url.endsWith(".jpg") || url.endsWith(".jpeg") || url.endsWith(".jfif") || url.endsWith("webp"), "Image must be a png, jpg, or jpeg")
  invariant(slug.match(/^[a-z0-9]+(?:-[a-z0-9]+)*$/), "Slug must be a valid slug")
  invariant(title.length < 100, "Title must be less than 100 characters")
  invariant(content.length > 100, "Content must be more than 100 characters")

  await createBlog({
    image: url,
    title,
    slug,
    content,
    date: dateObj,
    category,

  })

  session.flash("globalMessage", "Post created sucessfully!")
  return redirect("/blog", { headers: { "Set-Cookie": await sessionStorage.commitSession(session) } })
};