import { useState } from "react";
import { searchForShows ,searchForActors } from "../api/TvMazeAPI";
import SearchForm from "../components/SearchForm";
import Shows from "../components/shows/ShowsGrid";
import Actors from "../components/actors/ActorsGrid";
import { useQuery } from "react-query";

function Home(){
    const [filter,setFilter] = useState(null);
    const {data:apiData,error:apiError} = useQuery({
        queryKey:['apiData',filter],
        queryFn: ()=> filter.searchOpt === 'shows' ? searchForShows(filter.q):searchForActors(filter.q),
        enabled: !!filter,
        refetchOnWindowFocus:false
    })
    

    function formSubmit(options){
        setFilter(options);
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