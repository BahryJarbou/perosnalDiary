import Entry from "./entry";
import DailyCard from "./dailyCard";
const EntryModal = ({ entry }) => {
  return (
    <div className="cursor-pointer">
      <DailyCard
        entry={entry}
        onClick={() => document.getElementById("my_modal_5").showModal()}
      />
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="modal-action">
            <Entry entry={entry} />
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default EntryModal;
