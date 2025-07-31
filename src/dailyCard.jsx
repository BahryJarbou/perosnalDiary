const DailyCard = ({ entry, onClick }) => {
  return (
    <div
      className="card bg-base-100 h-[40vh] shadow-[0_0_35px_rgb(0_0_0_/_0.5)] m-4"
      onClick={onClick}
    >
      <figure>
        <img src={entry.url} alt="image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-md">{entry.title}</h2>
        <p>{entry.date}</p>
      </div>
    </div>
  );
};

export default DailyCard;
