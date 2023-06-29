import ActorCard from "./ActorCard";

export default function Actors({actors}){
    return <div>
        {actors.map( actor =>{
        return <ActorCard key={actor.person.id} data={actor}/>;
        })}
    </div>;
}