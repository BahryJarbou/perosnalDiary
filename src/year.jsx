import MonthlyCard from "./monthlyCard";
import { useEffect, useState } from "react";

const Year = ({ year }) => {
  const [months, setMonths] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Decemeber",
  ]);
  return (
    <>
      <h1 className="text-center text-[6rem] font-bold font-[cursive] text-red-600">
        {year}
      </h1>
      <div className="card bg-base-300 shadow-[0_0_35px_rgb(0_0_0_/_0.5)] grid grid-rows-3 grid-cols-4 grid-flow-row gap-8 m-5 p-8">
        {months.map((month) => {
          return <MonthlyCard key={`2025/${month}`} month={month} />;
        })}
      </div>
    </>
  );
};

export default Year;
