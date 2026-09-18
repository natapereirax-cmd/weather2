import { AboutStyled } from "./style"

export default function About () {
    return (
        <AboutStyled>
            <h2>About Us</h2>
            <p>Weather information should be simple, clear, and easy to understand.</p>
            <p>Our website was created to provide a quick and intuitive way to check the weather in cities around the world.
                 You can search for a location and get current weather information presented in a clean and accessible way.</p>
            <p>To make this possible, we combine three different technologies. <strong>Geocoding</strong> helps us identify the location you are looking for. 
                 <strong> Open Meteo</strong> provides the weather data used by the application. 
                <strong> Google Gemini</strong> helps transform this information into a simple and easy to understand weather summary.</p>
            <p>Our goal is not to overwhelm you with numbers and technical data.
                 We want to turn weather information into something useful and understandable,
                  whether you are planning your day, checking the conditions in another city,
                   or simply curious about the weather somewhere else.</p>
        </AboutStyled>
    )
}