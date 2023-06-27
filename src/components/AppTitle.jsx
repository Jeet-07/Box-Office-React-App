export default function AppTitle(props){
    const {
        title="Box Office",
        subtitle="Search movie or actor"
    }= props;

    return <div>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
    </div>;
}