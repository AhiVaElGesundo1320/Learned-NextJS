import Link from "next/link";

const fetchPost = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
  .then(
    (res) => res.json()
  );
};

export default async function ListOfPost() {
  const posts = await fetchPost();
  return (
    <div>
      <h2>Aqui van los post</h2>
      {posts.slice(0, 5).map((post) => (
        <article key={post.id} style={{border:'black solid 2px'}}>
          <Link href={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            </Link>
            <p>{post.body}</p>            
        </article>
      ))}
    </div>
  );
}
