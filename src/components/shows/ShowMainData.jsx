import ShowDetails from "./ShowDetails";

export default function ShowMainData({image,name,rating,summary,genres}){
    return <div>
        <img src={image ? image.original:"/not-found-image.png"}/>
        <div>{name}</div>
        <div>Rating : {rating.average || 'N/A'}</div>
        <div dangerouslySetInnerHTML={{__html:summary}}/>
        <div>
            Genres : <div>
                {genres.map( genre => <span key={genre}>{genre}</span> )}
            </div>    
        </div> 

        
    </div>;
}