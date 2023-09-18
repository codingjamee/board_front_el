const Feed = ({ feed }) => {
  return (
    <div className="card">
      <div style={{ display: "flex" }}>
        <h1>{feed.title}</h1>
        <div>{feed.writer}</div>
      </div>
      <div>{feed.content}</div>
    </div>
  );
};

export default Feed;
