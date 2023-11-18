import {useEffect, useState} from "react"
import { fetchSingleContests } from "../api-client";
import Header from "./Header";


const Contest = ({initialContest}) => {
    const [contest, setContests] = useState(initialContest);

    useEffect(() => {
        if (!contest.names) {
            fetchSingleContests(contest.id).then((contest) => {
                setContests(contest);
            });
        }
        
    },[contest.id, contest.name]);
    
    return (
        <>
            <Header message={contest.contestName}/>
            <div className="contest">
                <div className="title">Contest Description</div>
                <div className="description">{contest.description}</div>
            </div>
            </>
    )
}
export default Contest;