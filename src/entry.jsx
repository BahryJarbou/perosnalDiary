const Entry = ({ entry }) => {
  return (
    <>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={entry.url} alt="entry image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{entry.title}</h2>
          <h2 className="card-title">{entry.date}</h2>
          <p>{entry.content}</p>
        </div>
      </div>
    </>
  );
};

export default Entry;
