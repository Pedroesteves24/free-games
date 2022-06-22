import { Link } from "react-router-dom";
import './styles.scss'

export function Game({id, thumbnail, name}){
    return(
        <article className="card">
            <Link to ={`game/${id}`}>
            <div className="card-image"><img src={thumbnail} alt={id} /></div>
            <div className="card-title">{name}</div>
            </Link>
        </article>
    )
}