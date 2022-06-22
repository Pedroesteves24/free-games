import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import './styles.scss'

export function Game() {

    const { id } = useParams();
    const [ game, setGames] = useState([]);


    useEffect(() => {
        async function getGames() {
            const response = await fetch(`https://www.freetogame.com/api/game?id=${id}`)
            const data = await response.json();
            setGames(data);
        }
        getGames()
    }, [id])

    return(
        <>
        <div className="game-container">
            
            <div className="thumbnail"><img src={game?.thumbnail} alt={game.title} /></div>
            
            <div className="game-main">
                <div className="title">{game.title}</div>
                <div className="release-date">{game.release_date}</div>
             
            <div className="game-info">
                <div className="game-info-title">
                    Genre
                </div>

                <div className="genre-content">
                    {game.genre}
                </div>
            </div> 
            
                
            <div className="game-info">
                <div className="game-info-title">
                    Platform
                </div>

                <div className="platform-content">
                    {game.platform}
                </div>
            </div> 
            
                
            <div className="game-info">
                <div className="game-info-title">
                    Publisher
                </div>

                <div className="publisher-content">
                    {game.publisher}
                </div>
            </div> 
            
                
            <div className="game-info">
                <div className="game-info-title">
                    Developer
                </div>

                <div className="developer-content">
                    {game.developer}
                </div>
            </div> 

            <div className="description">
                {game.short_description}
            </div>
            
            <div className="game-button-url">
                <a 
                    href={game.game_url}
                    target="_blank"
                    rel="noreferrer"
                >
                    Game Url
                </a>
            </div>
            
            </div>
        </div>
        </>
    )
}