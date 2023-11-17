import {useState, useEffect} from "react";
import ContestList from "./ContestList";
import Contest from "./Contest";

const App = ({initialData}) => {
    // console.log(initialData);
    const [page, setPage] = useState("contestList");
    const [currentContestId, setcurrentContestId] = useState();

    useEffect(() => {
      window.onpopstate = (event) => {
        const newPage = event.state?.contestId ? "contest":"contestList";
        setPage(newPage);
        setcurrentContestId(event.state?.contestId)
      }
    }, [])
    

    const navigateToContest = (contestId) => {
        window.history.pushState({contestId},"", `/contest/${contestId}`)
        setPage("contest");
        setcurrentContestId(contestId)
    }

    const pageContent = () => {
        switch (page) {
            case "contestList":
                return(
                    <ContestList initialContest={initialData.contests} onContestClick= {navigateToContest}/>);
            case "contest":
                return <Contest id={currentContestId}/>;
        }
    }
    

    return(
        <div className="container">
           {pageContent()}
        </div>
    );
};
export default App;