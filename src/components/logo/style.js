import styled from "styled-components";

export const LogoStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    .titulo {
        font-size: 64px;
        font-weight: 800;
        letter-spacing: -2px;
    }

    .sky {
        background: linear-gradient(90deg, #00d9ff, #087cff, #4d5fff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;

        filter:
            drop-shadow(0 0 3px rgba(0, 174, 255, 0.5))
            drop-shadow(0 0 4px rgba(0, 110, 255, 0.25));
    }

    .lo {
        background: #FFFFFF;
        color: transparent;
        background-clip: text;

        filter:
            drop-shadow(0 0 2px #FFFFFF)
    }
    .raio {
        width: 50px;
        height: 150px;
    }

    svg {
        width: 100%;
        height: 100%;

        overflow: visible;
    }

    /* Corpo azul do raio */
    .raio-base {
        fill: url(#gradienteRaio);

        filter:
            drop-shadow(0 0 2px #087cff)
            drop-shadow(0 1px 5px #087cff);
    }

    /* Contorno luminoso */
    .raio-neon {
        fill: none;

        stroke: #00c8ff;
        stroke-width: 5;

        stroke-linecap: round;
        stroke-linejoin: round;

        /* Cria o efeito de uma luz percorrendo o contorno */
        stroke-dasharray: 35 400;

        animation: energia 2s linear infinite;

        filter:
            drop-shadow(0 0 4px #00c8ff)
            drop-shadow(0 0 10px #008cff)
            drop-shadow(0 0 20px #008cff);
    }

    @keyframes energia {
        from {
            stroke-dashoffset: 0;
        }

        to {
            stroke-dashoffset: -435;
        }
    }
`