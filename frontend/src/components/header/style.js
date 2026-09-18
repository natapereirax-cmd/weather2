import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 2px clamp(50px, 20vw, 200px);

    nav {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    nav a {
        background: #FFFFFF;
        color: transparent;
        font-weight: 600;
        background-clip: text;
        text-decoration: none;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid transparent;
        transform: scale(1);
        transition: transform 0.3s ease,
                    filter 0.3s ease,
                    border-bottom-color 0.4s ease;
    }
    nav a:hover {
        transform: scale(1.2);
        font-weight: 700;
    }

    nav a.is-active {
        border-bottom-color: #087cff;
        font-weight: 700;
    }
`