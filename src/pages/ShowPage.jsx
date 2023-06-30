// import { useEffect, useState } from "react";
import { useQuery } from "react-query"
import {useParams} from "react-router-dom"
import { searchShowById } from "../api/TvMazeAPI";
import ShowMainData from "../components/shows/ShowMainData";
import Seasons from "../components/shows/Seasons";
import Cast from "../components/shows/Cast";
import ShowDetails from "../components/shows/ShowDetails";

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

    if(showData)
        return <div>
            <ShowMainData
                image={showData.image}
                name={showData.name}
                rating={showData.rating}
                summary={showData.summary}
                genres={showData.genres}
            />

            <div>
            <h2>Details</h2>
            <ShowDetails
                status={showData.status}
                premiered={showData.premiered}
                network={showData.network}
            /> 
            </div>

            <div>
                <h2>Seasons</h2>
                <Seasons
                    seasons={showData._embedded.seasons}
                />
            </div>

            <div>
                <h2>Casts</h2>
                <Cast
                    cast={showData._embedded.cast}
                />
            </div>
        </div>;

    return <div>Data is loading</div>;
}