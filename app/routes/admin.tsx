import { LoaderArgs, json, redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useEffect } from "react";
import { requireUser } from "~/session.server";
import { useUser } from "~/utils";

export const loader = async ({ request, params }: LoaderArgs) => {
  const user = await requireUser(request)
  if (user.role !== "ADMIN") {
    redirect("/")
  }
  return json({})
};

export default function ComponentName() {
  const user = useUser()
  return (
    <main className="bg-cream">
      <h1>Admin</h1>
      <ul>
        <li><Link to="/admin/new_blog">Create Blog Post</Link></li>
        <li><Link to="/admin/blogs">Edit Blog</Link></li>
        <li><Link to="/admin/new_project">Create Project</Link></li>
        <li><Link to="/admin/projects">Edit Projects</Link></li>
        <li><Link to="/admin/contacts">View Contacts</Link></li>
      </ul>
    </main>
  );
};