import Entry from "./entry";
import { useState } from "react";

const Month = () => {
  const [monthDays, setMonthDays] = useState([
    {
      imageURL: "https://placehold.co/600x400",
      title: "placeholder title",
      date: new Date().getDate(),
    },
    {
      imageURL: "https://placehold.co/600x400",
      title: "placeholder title",
      date: new Date().getDate(),
    },
  ]);
  return monthDays.map((day) => {
    return <Entry imageURL={day.imageURL} title={day.title} date={day.date} />;
  });
};

export default Month;
