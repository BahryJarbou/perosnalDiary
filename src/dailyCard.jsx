const DailyCard = ({ imageURL, title, date }) => {
  return (
    <div className="card bg-base-100 shadow-[0_0_35px_rgb(0_0_0_/_0.5)] m-4">
      <figure>
        <img src={imageURL} alt="image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default DailyCard;
