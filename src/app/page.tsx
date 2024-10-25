import Link from "next/link";

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const POSTS_PER_PAGE = 10;

async function getPosts(page: number): Promise<Post[]> {
  const start = (page - 1) * POSTS_PER_PAGE;
  const res = await fetch(`${process.env.URL_POSTS_API}/posts?_start=${start}&_limit=${POSTS_PER_PAGE}`);
  return res.json();
}

export default async function HomePage({ searchParams }: { searchParams: { page?: string } }) {
  const { page } = await searchParams;
  const currentPage = parseInt(page || '1');
  const posts = await getPosts(+currentPage);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Últimos Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post: Post) => (
          <div key={post.id} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Link href={`/posts/${post.id}`} className="block">
                <h2 className="text-xl font-semibold mb-2 uppercase">{post.title}</h2>
                <p className="text-gray-600 mb-2">
                  {post.body.length > 100 ? post.body.substring(0, 100) + '...' : post.body}
                </p>
                <p className="text-primary font-semibold">Leia mais</p>
            </Link>
          </div>
        ))}
      </div>
      {/* Paginação */}
      <div className="flex justify-center mt-8 space-x-4">
        {currentPage > 1 && (
          <Link href={`/?page=${currentPage - 1}`} className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary">
            Anterior
          </Link>
        )}
        <Link href={`/?page=${currentPage + 1}`} className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary">
          Próximo
        </Link>
      </div>
    </div>
  );
}