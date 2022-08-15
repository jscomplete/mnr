import { useEffect, useState } from "react";

import { fetchContests } from "../api-client";

import ContestPreview from "./contest-preview";

const ContestList = ({ initialContests, onContestClick }) => {
  const [contests, setContests] = useState(initialContests);

  useEffect(() => {
    // fetchContests().then((contests) => {
    //   setContests(contests);
    // });
  }, []);

  return (
    <div className="contest-list">
      {contests.map((contest) => {
        return (
          <ContestPreview
            key={contest.id}
            contest={contest}
            onClick={onContestClick}
          />
        );
      })}
    </div>
  );
};

export default ContestList;
