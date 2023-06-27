import { useState } from "react";
import { searchForShows } from "../api/TvMazeAPI";

function Home(){

    const [searchStr,setSearchStr] = useState('');
    const [apiData,setApiData] = useState(null);
    const [apiError,setApiError] = useState(null);

    function changeSearch(event){
        setSearchStr(event.target.value);
    }

    async function formSubmit(event){
        event.preventDefault();
        setApiError(null);
        try{
            const result = await searchForShows(searchStr);
            setApiData(result);
        }catch(error){
            setApiError(error);
        }
    }

    function renderApiData(){
        if(apiError){
            return <div>Error Occurred : {apiError.message}</div>;
        }
        
        if(apiData){
            return <div>
                {apiData.map(   data => <div key={data.show.id}>{data.show.name}</div>)}
            </div>;
        }
        return null;
    }

    return <>
        <div>
            <form onSubmit={formSubmit}>
                <input name="search" type="text" value={searchStr} onChange={changeSearch}/>
                <button type="submit">Search</button>
            </form>
        </div>
        {renderApiData()}
    
    </>;
}
export default Home;