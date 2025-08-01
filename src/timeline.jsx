import { useState } from "react";
const TimeLine = () => {
  let direction = true;
  const entries = JSON.parse(localStorage.getItem("entries")) || [];
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical p-10">
      {entries.map((entry) => {
        direction = !direction;

        return (
          <li key={entry.date}>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={`timeline-${
                direction ? "start" : "end"
              } mb-10 md:text-end`}
            >
              <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure>
                  <img src={entry.url} alt="Entry Image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{entry.title}</h2>
                  <p>{entry.date}</p>
                  <p>{entry.content}</p>
                </div>
              </div>
            </div>
            <hr />
          </li>
        );
      })}
    </ul>
  );
};
export default TimeLine;
