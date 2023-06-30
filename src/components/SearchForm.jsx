import { useState } from "react";

export default function SearchForm({formSubmit}){
    const [searchStr,setSearchStr] = useState('');
    const [searchOpt,setSearchOpt] = useState('shows');

    async function onSubmit(event){
        event.preventDefault();
        formSubmit({q:searchStr,searchOpt});
    }
    
    function changeSearchStr(event){
        setSearchStr(event.target.value);
    }

    function changeSearchOpt(event){
        setSearchOpt(event.target.value);
    }



    return <>
        <div>
            <form onSubmit={onSubmit}>
                <input name="search" type="text" value={searchStr} onChange={changeSearchStr}/>
                <input type="radio" name="searchOpt" value="shows" onChange={changeSearchOpt} checked={searchOpt ==="shows"}/>Shows
                <input type="radio" name="searchOpt" value="actors" onChange={changeSearchOpt} checked={searchOpt ==="actors"}/>Actors
                <button type="submit">Search</button>
            </form>
        </div>
    </>;
}