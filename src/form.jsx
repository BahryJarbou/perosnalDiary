import { useState, useEffect, use } from "react";
const Form = ({ entries, setEntries }) => {
  const [entryData, setEntryData] = useState({
    title: "",
    date: "",
    imageURL: "",
    content: "",
  });

  const handlerChange = (e) => {
    setEntryData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (
      !e.target.elements.title.value ||
      !e.target.elements.date.value ||
      !e.target.elements.url.value ||
      !e.target.elements.content.value
    ) {
      alert("please fill all fields");
      return;
    }
    setEntryData((prev) => ({
      ...prev,
      title: e.target.elements.title.value,
      date: e.target.elements.date.value,
      imageURL: e.target.elements.url.value,
      content: e.target.elements.content.value,
    }));
    setEntries((prev) => [...prev, entryData]);
    localStorage.setItem("entries", JSON.stringify(entries));
  };
  return (
    <form
      className="grid grid-cols-2 gap-4 m-12 border-1 p-4 justify-around items-center h-11/12 max-h-5xl"
      onSubmit={handlerSubmit}
    >
      <label htmlFor="userName" className="row-start-1 col-start-1">
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
        name="date"
        placeholder="enter date"
        className="row-start-2 col-start-2 border-1 p-1 rounded"
      />
      <label htmlFor="telephone" className="row-start-3 col-start-1">
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
      <label htmlFor="message" className="row-start-4 col-start-1">
        Content
      </label>
      <textarea
        onChange={handlerChange}
        name="content"
        id="content"
        placeholder="what's on your mind?"
        className="row-start-4 col-start-2 border-1 p-1 rounded h-11/12 max-h-5xl"
      ></textarea>
      <button className="row-start-5 col-start-1 bg-blue-500 rounded-md w-[10vw] p-2">
        add Entry
      </button>
    </form>
  );
};

export default Form;
