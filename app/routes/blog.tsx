import { LoaderArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { blogPost } from "~/models/blog.server";


export const loader = async ({ request, params }: LoaderArgs) => {
  const posts: blogPost[] = [
    {
      id: "1",
      slug: "lorem-ipsum-dolor-sit-amet",
      category: "Remix Run",
      title: "Lorem ipsum dolor sit amet",
      date: new Date(2022, 10, 20),
      content: "Lorem ipsum dolor sit amet lah lah lah more content. Try to get 200 chars in this mofo content part here. Bear with me as I hate coming up with random stuff for this. Well I dont hate it but you might. 200 reached though so fuck it. Lets go and type things down.",
      image: `https://picsum.photos/id/237/700/700`
    }, {
      id: "2",
      slug: "another-one",
      category: "Remix Run",
      title: "Ippy random title",
      date: new Date(2022, 10, 20),
      content: "Aging is a natural process, but regular exercise can help slow down its effects. Studies have shown that those who engage in consistent physical activity tend to have a higher life expectancy and a reduced risk of age-related diseases. Regular exercise helps maintain muscle mass, bone density, and overall physical function as you age. It also improves cardiovascular health, reduces the risk of cognitive decline, and enhances mobility and balance. By incorporating exercise into your lifestyle, you can enjoy a higher quality of life and maintain independence as you grow older.",
      image: `https://picsum.photos/id/219/700/700`
    }, {
      id: "3",
      slug: "howdy-partner",
      category: "Fullstack",
      title: "Howdy Partner",
      date: new Date(2022, 10, 20),
      content: "Aging is a natural process, but regular exercise can help slow down its effects. Studies have shown that those who engage in consistent physical activity tend to have a higher life expectancy and a reduced risk of age-related diseases. Regular exercise helps maintain muscle mass, bone density, and overall physical function as you age. It also improves cardiovascular health, reduces the risk of cognitive decline, and enhances mobility and balance. By incorporating exercise into your lifestyle, you can enjoy a higher quality of life and maintain independence as you grow older.",
      image: `https://picsum.photos/id/209/700/700`
    }
  ]
  return json({ posts });
};

function Post({ blogPost }: { blogPost: any }) {
  const { title, date, content, category } = blogPost;
  const dateObj = new Date(date)
  const displayDate = new Intl.DateTimeFormat('en-US', { month: "long", day: "2-digit", year: "numeric" }).format(dateObj);
  function trimContent(content: string) {
    return content.slice(0, 200) + "...";
  }

  return (
    <article className={'flex flex-col relative overflow-hidden'}>
      <div className="absolute before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-full before:bg-[#ebe7e0] before:opacity-[.85] h-full">
        <img src={blogPost.image} className="h-full w-full object-fill" alt="" />
      </div>
      <div className="px-4 flex flex-col gap-6 py-8">
        <div className="flex gap-4 z-10 font-serif items-center">
          <p className="font-bold">{category}</p>
          <p className="text-lightDark font-thin">{displayDate}</p>
        </div>
        <div className="flex z-10">
          <Link to={`/blog/${blogPost.slug}`}>
            <h1 className="text-3xl font-bold text-dark underline-offset-2 hover:underline">{title}</h1>
          </Link>
        </div>
        <div className="flex z-10">
          <p>{trimContent(content)}</p>
        </div>
        <div className="flex z-10">
          <Link className="text-[#ff8059] font-bold font-serif underline-offset-2 hover:underline" to={`/blog/${blogPost.slug}`}>Read More</Link>
        </div>
      </div>
    </article>
  )

}
export default function BlogRoute() {
  const { posts } = useLoaderData<typeof loader>()
  return (
    <main>
      <h1 className="text-5xl text-dark bg-cream py-8 px-4">Blog</h1>
      <section className="bg-cream text-dark">
        <p className="px-4 mb-8">
          Suspendisse potenti. Sed egestas eros eu libero posuere ultrices. Nullam ut aliquet felis, sit amet imperdiet felis.
        </p>
        <div className="grid">
          {posts.map((post) => (
            <Post key={post.id} blogPost={post} />
          ))}
        </div>
      </section>
    </main>
  );
};