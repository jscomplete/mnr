import {useState} from "react";
import ContestList from "./ContestList";
import Header from "./Header";

const App = ({initialData}) => {
    // console.log(initialData);
    const [page, setPage] = useState("contestList");

    const pageContent = () => {
        switch (page) {
            case "contestList":
                return(
                    <ContestList initialContest={initialData.contests} onContestClick= {navigateToContest}/>);
            case "contest":
                return "";
        }
    }
    const navigateToContest = () => {
        setPage("contest")
    }

    return(
        <div className="container">
            <Header message = "Naming Contest"/>
           {pageContent()}
        </div>
    );
};
export default App;