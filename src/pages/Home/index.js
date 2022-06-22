import { useEffect, useState } from "react"

import './styles.scss'
import { Game } from "../../components/Game";
import { Search } from "../../components/Search"

export function Home() {
    
    const [games, setGames] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function getGames() {
            const response = await fetch('https://www.freetogame.com/api/games');
            const data = await response.json();
            setGames(data);
        }
        getGames()
    }, [])

    const filteredGames = games.filter( game => game.title.toLowerCase().includes(search))

    function getSearchValue(e){
        e.preventDefault()
        setSearch(e.target.value.toLowerCase())
    }

    return(
       <main className="home">
        
            <div className="">
                <Search 
                    search={getSearchValue}
                />
            </div>
            
            <div className="container">
                {filteredGames.map( game =>
                    <Game 
                        key={game.id}
                        id={game.id}
                        thumbnail={game.thumbnail}
                        name={game.title}
                    />
                )}
            </div>
        </main> 
          
    )
}