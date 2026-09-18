import { LogoStyled } from "./style";

export default function Logo () {
    return (
        <LogoStyled>
                <h1 class="titulo">
                    <span class="sky">Sky</span><span class="lo">lo</span>
                </h1>
                <div class="raio">
                <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">

                    <defs>
                        <linearGradient id="gradienteRaio" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#00d9ff" />
                            <stop offset="50%" stop-color="#087cff" />
                            <stop offset="100%" stop-color="#003cff" />
                        </linearGradient>
                    </defs>

                    <polygon
                        class="raio-base"
                        points="
                            115,10
                            35,165
                            90,165
                            65,290
                            170,120
                            110,120
                        "
                    />

                    <polygon
                        class="raio-neon"
                        points="
                            115,10
                            35,165
                            90,165
                            65,290
                            170,120
                            110,120
                        "
                    />

                </svg>
            </div>
        </LogoStyled>
    )
}