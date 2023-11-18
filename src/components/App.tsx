import {useState, useEffect} from "react";
import ContestList from "./ContestList";
import Contest from "./Contest";

const App = ({initialData}) => {
    // console.log(initialData);
    const [page, setPage] = useState<"contestList"| "contest">(initialData.currentContest ? "contest":"contestList");
    const [currentContest, setcurrentContest] = useState<object| undefined>(initialData.currentContest);

    useEffect(() => {
      window.onpopstate = (event) => {
        const newPage = event.state?.contestId ? "contest":"contestList";
        setPage(newPage);
        setcurrentContest({id: event.state?.contestId})
      }
    }, [])
    

    const navigateToContest = (contestId) => {
        window.history.pushState({contestId},"", `/contest/${contestId}`)
        setPage("contest");
        setcurrentContest({id: contestId})
    }

    const navigateToContestList = () => {
        window.history.pushState({},"", "/");
        setPage("contestList");
        setcurrentContest(undefined);
    }

    const pageContent = () => {
        switch (page) {
            case "contestList":
                return(
                    <ContestList initialContest={initialData.contests} onContestClick= {navigateToContest}/>);
            case "contest":
                return <Contest initialContest={currentContest} navigatecontest={navigateToContestList}/>;
        }
    }
    

    return(
        <div className="container">
           {pageContent()}
        </div>
    );
};
export default App;