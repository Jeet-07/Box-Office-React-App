import { Link } from "react-router-dom";

export default function ShowCard({data}){
    const {id,image,name,summary}=data.show;
    const shortSummary = summary?.split(' ').slice(1,10).join(' ').replace(/<.+?>/g,'');
    return <div>
        <div>
        <img src={image ? image.medium:"/not-found-image.png"} alt={name}/>
        </div>
        <h2>{name}</h2>
        <p>{shortSummary}</p>
        <Link to={`/show/${id}`}>Read More</Link>
        <button >Star me</button>
    </div>;
}