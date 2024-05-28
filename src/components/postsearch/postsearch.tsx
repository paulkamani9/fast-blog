import "./postsearch.css";

const PostSearch = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("search");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault;
    console.log(`Post Id: ${id}`);
  };
  return (
    <div className="blog-page">
      <form className="search-bar">
        <input type="text" placeholder="Search..." onChange={handleChange} />
        <button onClick={handleClick}>Search</button>
      </form>
      <div className="post-area">
        <section>
          <h4>First post Lorem</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ipsam aliquam laborum culpa iusto quo reiciendis quam
            consectetur odit, dicta distinctio nostrum saepe totam eos aliquid
            perferendis est ab ipsa.
          </p>
          <button onClick={(e) => handleDelete(e, 1)}>Delete</button>
        </section>
        <section>
          <h4>Second post Lorem</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ipsam aliquam laborum culpa iusto quo reiciendis quam
            consectetur odit, dicta distinctio nostrum saepe totam eos aliquid
            perferendis est ab ipsa.
          </p>
          <button onClick={(e) => handleDelete(e, 2)}>Delete</button>
        </section>
      </div>
    </div>
  );
};
export default PostSearch;
