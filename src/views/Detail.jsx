import { useLoaderData } from "react-router-dom";

export default function Detail() {
  const [post, comments] = useLoaderData();
  // console.log(post);
  // console.log(comments);

  return (
    <>
      <section className="container py-5">
        <div className="row justify-content-center">
          <article className="col-12 col-md-7">
            <h1 className="mb-4">Dettaglio</h1>
            <h4>Titolo: {post.title}</h4>
            <p>
              <strong>Descrizione:</strong> {post.body}
            </p>
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>
                  {comment.name} - {comment.email}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
