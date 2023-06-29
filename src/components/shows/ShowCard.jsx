export default function ShowCard({data}){
    const {image,name,summary}=data.show;
    const shortSummary = summary?.split(' ').slice(1,10).join(' ').replace(/<.+?>/g,'');
    return <div>
        <div>
        <img src={image ? image.medium:"/not-found-image.png"} alt={name}/>
        </div>
        <h2>{name}</h2>
        <p>{shortSummary}</p>
    </div>;
}