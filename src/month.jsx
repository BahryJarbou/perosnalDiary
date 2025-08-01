import FormModal from "./formModal";
import DailyCard from "./dailyCard";
import EntryModal from "./entryModal";
import { useEffect, useState } from "react";

const Month = ({ entries, setEntries }) => {
  const localEntries = JSON.parse(localStorage.getItem("entries")) || [];
  useEffect(() => {
    setEntries(JSON.parse(localStorage.getItem("entries")) || []);
  }, []);
  return (
    <>
      <div className="card bg-base-300 shadow-[0_0_35px_rgb(0_0_0_/_0.5)] grid grid-cols-3 grid-flow-row gap-4 m-5 p-4">
        {entries
          .sort(
            (entry1, entry2) => new Date(entry2.date) - new Date(entry1.date)
          )
          .map((entry) => {
            return <EntryModal key={entry.date} entry={entry} />;
          })}
      </div>
      <FormModal entries={entries} setEntries={setEntries} />
    </>
  );
};

export default Month;
