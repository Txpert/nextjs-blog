import { getPosts } from "@/src/data/posts";
import PostCard from "@/src/components/PostCard";
import { Post } from "@/src/types/post";



export default async function Home() {

  const posts: Post[] = await getPosts();


  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Akuelle Blogbeiträge</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    
        </div>
    </main>
  )
}