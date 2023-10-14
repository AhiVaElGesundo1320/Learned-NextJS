import Link from "next/link";

const fetchComments = async (id) => {
  await new Promise( resolve => setTimeout (resolve, 3000))
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function Post({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul style={{ background: '#eee', fontSize:'10px', borderRadius:'10px'}}>      
      {
        comments.slice(0, 3).map(comment => (
            <li key={comment.id}>
              <h2>{comment.name}</h2>
              <small>{comment.body}</small>
            </li>
        ))}
    </ul>
  );
}
