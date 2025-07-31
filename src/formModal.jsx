import Form from "./form";
const FormModal = ({ entries, setEntries }) => (
  <div className="justify-self-center">
    <button
      className="btn"
      onClick={() => {
        const dates = JSON.parse(localStorage.getItem("dates")) || [];
        if (dates.includes(new Date().toISOString().split("T")[0])) {
          alert(
            "an entry for this day was already added, please come back tomorrow!"
          );
          return;
        }
        document.getElementById("my_modal_2").showModal();
      }}
    >
      Add Entry
    </button>
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box w-11/12 max-w-5xl h-11/12 max-h-5xl">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click outside to close</p>
        <Form entries={entries} setEntries={setEntries} />
      </div>
    </dialog>
  </div>
);

export default FormModal;
