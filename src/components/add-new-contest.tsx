import { useState } from "react";
import { addContest } from "../api-client";

const AddNewContest = ({ onSuccess }) => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const newContestData = {
      contestName: form.contestName.value,
      categoryName: form.categoryName.value,
      description: form.description.value,
    };
    const newContest = await addContest(newContestData);
    if (newContest?.id) {
      form.reset();
      onSuccess(newContest);
    }
  };

  return (
    <div className="add-new-contest">
      {!showForm && (
        <div className="link" onClick={() => setShowForm(true)}>
          Add New Contest
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Contest Name"
            name="contestName"
          />
          <input
            type="text"
            placeholder="Contest Category"
            name="categoryName"
          />
          <textarea
            placeholder="Contest Description"
            name="description"
            rows={5}
          />
          <button type="submit">Sumbit</button>
        </form>
      )}
    </div>
  );
};

export default AddNewContest;
