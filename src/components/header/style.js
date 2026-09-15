import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    position: relative;

    header::after {
        content: "";
        position: absolute;

        bottom: 0;
        left: 50%;
        transform: translateX(-50%);

        width: 70%;
        height: 2px;

        background: #087cff;
        border-radius: 999px;

        box-shadow:
            0 0 6px #087cff,
            0 0 15px rgba(8, 124, 255, 0.5);
    }

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 20px;
    }
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
        filter:
            drop-shadow(0 0 1px #FFFFFF)
    }

    nav a.is-active {
        border-bottom-color: #087cff;
        filter:
            drop-shadow(0 0 1px #FFFFFF)
    }
`