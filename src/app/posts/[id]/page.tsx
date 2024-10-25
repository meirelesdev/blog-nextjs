import { Post } from "../../page";

async function getPost(id: string) {
  const res = await fetch(`${process.env.URL_POSTS_API}/posts/${id}`);
  return res.json();
}


export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = await params

  const post: Post = await getPost(id);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
}