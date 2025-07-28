const Entry = ({ imageURL, title, date }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-2xl m-4">
      <figure>
        <img src={imageURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Entry;
