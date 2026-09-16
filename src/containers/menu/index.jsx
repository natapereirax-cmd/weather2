import { MenuStyled } from "./style"

export default function Menu () {
    return (
        <MenuStyled>
            <div className="title">
                <span className="h2-1">Your Weather,</span>
                <p> </p>
                <span className="h2-2">Anywhere</span>
                <div className="weather-icons">
                    <i className="bx bx-cloud"></i>
                    <i className="bx bx-bolt"></i>
                    <i className="bx bx-sun"></i>
                    <i className="bx bx-cloud-lightning"></i>
                </div>
            </div>

            <form className="search-div">
                <input className="search-input" type="text" placeholder="What city do you want to seach?" required/>
                <button className="search-btn">
                    <i class='bx bx-search'></i>
                </button>
            </form>
        </MenuStyled>
    )
}