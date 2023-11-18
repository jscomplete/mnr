/* eslint-disable no-debugger */
import ContestPreview from "./ContestPreview";
import {useEffect, useState} from "react"
import { fetchContests } from "../api-client";
import Header from "./Header";

const ContestList = ({initialContest, onContestClick}) => {
    const [contests, setContests] = useState(initialContest ?? []);
    
    
    useEffect(() => {
        if (!initialContest) {
            fetchContests().then((contests) => {
                setContests(contests);
            });
        }
        
    }, [ initialContest]);

    return(
        <>
            <Header message = "Naming Contest"/>

            <div className="contest-list link">
                {contests.map((contest)=>{
                    return <ContestPreview key={contest.id} contest={contest} onClick = {onContestClick}/>
                })}
            </div>
        </>
    )
}
export default ContestList;