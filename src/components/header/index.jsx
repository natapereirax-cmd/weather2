import { HeaderStyled } from "./style";
import { NavLink } from "react-router-dom";
import Logo from "../logo/index";

export default function Header () {
    return (
        <HeaderStyled>
            <Logo/>
            <nav>
                <NavLink to='/' className={({ isActive }) => (isActive ? "is-active" : undefined)} end>menu</NavLink>
                <NavLink to='/about' className={({ isActive }) => (isActive ? "is-active" : undefined)}>about us</NavLink>
            </nav>
        </HeaderStyled>
    )
}