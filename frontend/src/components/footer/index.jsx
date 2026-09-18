import { FooterStyled } from "./style"

export default function Footer () {
    return (
        <FooterStyled>
            <div className="footer-text">
                <p>Data provided by <span>GeoCoding API</span></p>
                <p>Study project in <span>React<i class='bx bxs-bolt'></i></span></p>
            </div>



        </FooterStyled>
    )
}