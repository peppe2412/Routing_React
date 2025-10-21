import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Info = () => {
  const posts = useLoaderData();
  // console.log(posts);

  return (
    <>
      <header className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-7">
            <h1 className="text-center fw-bold display-1">Tutti i Posts</h1>
          </div>
        </div>
      </header>

      <section className="container">
        <div className="row justify-content-center">
          {posts.map((post) => (
            <div className="col-12 col-lg-3 col-md-6" key={post.id}>
              <div className="mx-2 mb-5 border border-black p-4">
                <h4 className="text-danger text-center mb-4 mt-2">
                  {post.title}
                </h4>
                <p className="fs-5">{post.body}</p>
                <Link className="btn btn-info w-100" to={`/info/detail/${post.id}`}>Dettagli</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Info;
