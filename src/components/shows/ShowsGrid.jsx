import ShowCard from "./ShowCard";

export default function Shows({shows}){
    return <div>
        {shows.map( show =>{
            return <ShowCard key={show.show.id} data={show}/>;
        })}
    </div>;
}