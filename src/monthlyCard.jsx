const MonthlyCard = ({ month }) => {
  return (
    <div className="card bg-base-100 w-[20rem] h-[20rem] shadow-2xl flex justify-center items-center justify-self-center">
      <h1 className="text-center text-[3rem] font-bold font-[cursive] text-green-600">
        {month}
      </h1>
    </div>
  );
};

export default MonthlyCard;
