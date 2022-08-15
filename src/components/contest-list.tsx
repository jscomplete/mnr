import ContestPreview from "./contest-preview";

const ContestList = ({ contests }) => {
  return (
    <div className="contest-list">
      {contests.map((contest) => {
        return <ContestPreview contest={contest} />;
      })}
    </div>
  );
};

export default ContestList;
