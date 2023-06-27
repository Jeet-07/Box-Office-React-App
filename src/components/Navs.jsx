import {Link} from "react-router-dom"

const LINKS=[
    {
        text:"Home",
        to:"/"
    },
    {
        text:"Starred",
        to:"/starred"
    }
]

const Navs = ()=>{
    return <>
        <div>
            <ul>
                {LINKS.map(link=>{
                    return <li key={link.to}>
                        <Link to={link.to}>{link.text}</Link>
                    </li>
                })}
            </ul>
        </div>
    </>;
}

export default Navs;