import { useState, useEffect, use } from "react";
const Form = ({ entries, setEntries }) => {
  const [entryData, setEntryData] = useState({
    title: "",
    date: "",
    url: "",
    content: "",
  });

  const handlerChange = (e) => {
    setEntryData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const dates = JSON.parse(localStorage.getItem("dates")) || [];
    if (dates.includes(entryData.date)) {
      alert(
        "an entry for this day was already added, please come back tomorrow!"
      );
      return;
    }
    if (
      !e.target.elements.title.value ||
      !e.target.elements.date.value ||
      !e.target.elements.url.value ||
      !e.target.elements.content.value
    ) {
      alert("please fill all fields");
      return;
    }
    localStorage.setItem("dates", JSON.stringify([...dates, entryData.date]));
    setEntries((prev) => [entryData, ...prev]);
    console.log(entries);
    const localEntries = JSON.parse(localStorage.getItem("entries")) || [];
    localStorage.setItem(
      "entries",
      JSON.stringify([...localEntries, entryData])
    );
    e.target.elements.title.value = "";
    e.target.elements.date.value = "";
    e.target.elements.url.value = "";
    e.target.elements.content.value = "";
  };
  return (
    <form
      className="grid grid-cols-2 gap-4 m-12 border-1 p-4 justify-around items-center h-11/12 max-h-5xl"
      method="dialog"
      onSubmit={handlerSubmit}
    >
      <label htmlFor="title" className="row-start-1 col-start-1">
        Title:
      </label>
      <input
        onChange={handlerChange}
        type="text"
        name="title"
        id="title"
        placeholder="enter your name"
        className="row-start-1 col-start-2 border-1 p-1 rounded"
      />
      <label htmlFor="date" className="row-start-2 col-start-1">
        Date:
      </label>
      <input
        onChange={handlerChange}
        type="date"
        id="date"
        min={new Date().toISOString().split("T")[0]}
        // max={new Date().toISOString().split("T")[0]}
        name="date"
        placeholder="enter date"
        className="row-start-2 col-start-2 border-1 p-1 rounded"
      />
      <label htmlFor="url" className="row-start-3 col-start-1">
        Image URL:
      </label>
      <input
        onChange={handlerChange}
        type="url"
        id="url"
        name="url"
        placeholder="enter img url"
        className="row-start-3 col-start-2 border-1 p-1 rounded"
      />
      <label htmlFor="content" className="row-start-4 col-start-1">
        Content
      </label>
      <textarea
        onChange={handlerChange}
        name="content"
        id="content"
        placeholder="what's on your mind?"
        className="row-start-4 col-start-2 border-1 p-1 rounded h-11/12 max-h-5xl"
      ></textarea>
      <button className="btn col-span-2">add Entry</button>
    </form>
  );
};

export default Form;
