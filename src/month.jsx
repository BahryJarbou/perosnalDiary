import FormModal from "./formModal";
import DailyCard from "./dailyCard";
import { useEffect, useState } from "react";

const Month = () => {
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem("entries")) || []
  );
  // const localEntries = JSON.parse(localStorage.getItem("entries")) || [];
  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);
  localStorage.getItem("");
  return (
    <>
      <h1 className="text-center text-[6rem] font-bold font-[cursive] text-red-600">
        Welcome To your Diary!
      </h1>
      <div className="card bg-base-300 shadow-[0_0_35px_rgb(0_0_0_/_0.5)] grid grid-rows-5 grid-cols-7 grid-flow-row gap-8 m-5 p-8">
        {entries.map((entry) => {
          return (
            <DailyCard
              key={entry.date}
              imageURL={entry.url}
              title={entry.title}
              date={entry.date}
            />
          );
        })}
      </div>
      <FormModal entries={entries} setEntries={setEntries} />
    </>
  );
};

export default Month;
