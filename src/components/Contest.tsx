import {useEffect, useState} from "react"
import { fetchSingleContests } from "../api-client";
import Header from "./Header";


const Contest = ({id}) => {
    const [contest, setContests] = useState({});

    useEffect(() => {
        fetchSingleContests(id).then((contest) => {
            setContests(contest);
        });
    },[id]);
    // console.log(contest);
    
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