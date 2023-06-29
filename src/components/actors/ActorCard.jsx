export default function ActorCard({data}){
    const {image,name,gender,country,birthday,deathday}=data.person;
    return <div>
        <div>
        <img src={image ? image.medium:"/not-found-image.png"} alt={name}/>
        </div>
        <h2>{name} {!!gender && `(${gender})`}</h2>
        {!!country && <p>Comes from {country.name}</p>}
        {!!birthday && <p>Born {birthday}</p>}
        {!!deathday && <p>Died {deathday}</p>}
    </div>;
}