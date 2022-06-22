import { ImSearch } from 'react-icons/im';

import './styles.scss';

export function Search({ search }) {
    return (
        <div className="search-container">
            <div className="search">
                <form className="search-form">
                    <input
                        placeholder="Search for the game.."
                        type="text"
                        onChange={search}
                    />
                    <div className="search-form-icon">
                        <ImSearch />
                    </div>

                </form>

            </div>
        </div>
    )
}