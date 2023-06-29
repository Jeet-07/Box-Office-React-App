import { useState } from "react";
import { searchForShows ,searchForActors } from "../api/TvMazeAPI";
import SearchForm from "../components/SearchForm";
import Shows from "../components/shows/ShowsGrid";
import Actors from "../components/actors/ActorsGrid";

function Home(){

    const [apiData,setApiData] = useState(null);
    const [apiError,setApiError] = useState(null);

    async function formSubmit(options){
        let result = null;
        const {q,searchOpt}=options;
        try{
            setApiError(null);
            if( searchOpt === "shows")
                result = await searchForShows(q);
            else if( searchOpt === "actors")
                result = await searchForActors(q);
        }catch(error){
            setApiError(error);
        }
        setApiData(result);
    }

    

    function renderApiData(){
        if(apiError){
            return <div>Error Occurred : {apiError.message}</div>;
        }

        if(apiData?.length === 0)return <div>No results</div>;
        
        if(apiData){
            return apiData[0].show ? <Shows shows={apiData}/> : <Actors actors={apiData}/>; 
            
        }
        return null;
    }

    return <>
        <SearchForm formSubmit={formSubmit}/>
        {renderApiData()}
    </>;
}
export default Home;