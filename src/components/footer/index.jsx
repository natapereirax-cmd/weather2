import { FooterStyled } from "./style"
import Logo from "./../logo/index"

export default function Footer () {
    return (
        <FooterStyled>
            <div className="footer-text">
                <p>Dados por <span>GeoCoding API</span></p>
                <p>Projeto de estudo em <span>React<i class='bx bxs-bolt'></i></span></p>
            </div>



        </FooterStyled>
    )
}