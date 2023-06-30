// import { useEffect, useState } from "react";
import { useQuery } from "react-query"
import {useParams} from "react-router-dom"
import { searchShowById } from "../../api/TvMazeAPI";

//custom react hook
// const useShowData = (showId)=>{
//     const [showData,setShowData]= useState(null);
//     const [showDataError,setShowDataError]= useState(null);

//     useEffect(()=>{
//         async function getShowData(){
//             try{
//                 const data = await searchShowById(showId);
//                 setShowData(data);
//             }catch(error){
//                 setShowDataError(error);
//             }
//         }
//         getShowData();
//     },[showId]);

//     return {showData,showDataError};
// }

export default function ShowPage(){
    const {showId} = useParams();
    
    // const {showData,showDataError}= useShowData(showId);

    const {data:showData,error:showDataError} = useQuery({queryKey:['show',showId],queryFn:()=>searchShowById(showId)});

    if(showDataError)return <div>Some Error Occurred : {showDataError.message}</div>;

    if(showData)return <div>{showData.name}</div>;

    return <div>Data is loading</div>;
}