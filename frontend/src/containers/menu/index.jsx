import { MenuStyled } from "./style"
import { getWeatherByCity } from '../../api/script'

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

            <form className="search-form" onSubmit={getWeatherByCity}>
                <input className="search-input" type="text" placeholder="What city do you want to seach?" required/>
                <button type='submit' className="search-btn">
                    <i className='bx bx-search'></i>
                </button>
            </form>
            <div className="loading">
                <div className="loading-icon">
                    <i className="bx bx-cloud"></i>
                    <i className="bx bx-bolt"></i>
                    <i className="bx bx-sun"></i>
                    <i className="bx bx-cloud-lightning"></i>
                </div>

                <div className="loading-lines">
                    <div className="line line-blue"></div>
                    <div className="line line-white"></div>
                </div>
            </div>

            <div className="results">
                <div className="data-div">
                    <h2 className="city-title"></h2>
                    <div className="data-section"></div>
                </div>
                <div className="ai-div">
                    <div class="gemini-loading">
                        <div class="ai-core">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="ai-feedback">
                        <h3>Gemini feedback</h3>
                        <p className="ai-answer"></p>
                    </div>
                </div>
                <a href="/" className="search-again">↻</a>
            </div>
        </MenuStyled>
    )
}