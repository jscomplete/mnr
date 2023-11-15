/* eslint-disable no-debugger */
import ContestPreview from "./ContestPreview";
import {useEffect, useState} from "react"
import { fetchContests } from "../api-client";

const ContestList = ({initialContest, onContestClick}) => {
    const [contests, setContests] = useState(initialContest );
    
    
    useEffect(() => {
        fetchContests().then((contests) => {
            setContests(contests);
        });
    }, []);

    return(
        <div className="contest-list">
            {contests.map((contest)=>{
                return <ContestPreview key={contest.id} contest={contest} onClick = {onContestClick}/>
            })}
        </div>
    )
}
export default ContestList;