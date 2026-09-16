import styled from "styled-components";

export const MenuStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    .title {
        font-size: 35px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 4px;
    }

    .h2-1 {
        background: #FFFFFF;
        color: transparent;
        background-clip: text;
    }

    .h2-2{
        background: linear-gradient(90deg, #00d9ff, #087cff, #4d5fff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;

        filter:
            drop-shadow(0 0 1px rgba(0, 174, 255, 0.5))
            drop-shadow(0 0 2px rgba(0, 110, 255, 0.25));
    }

    .search-div {
        display: flex;
        align-items: center;

        width: min(650px, 90%);
        height: 54px;
        padding: 6px;

        border-radius: 34px;

        border: 2px solid transparent;
        background:
            linear-gradient(white, white) padding-box,
            linear-gradient(
                #087cff,
                #00d9ff,
                transparent 100%
            ) border-box;

        box-shadow:
            inset 7px 4px 10px rgba(0, 0, 0, 0.25);
    }

    .search-input {
        flex: 1;
        height: 100%;
        padding: 0 20px;

        background: transparent;
        border: none;
        outline: none;
        border: none;

        font-size: 16px;
    }

    .search-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        
        height: 52px;
        width: 52px;
        padding: 0;

        border: none;
        border-radius: 26px;

        background: #087cff;
    }

    .search-btn:hover {
        opacity: 70%;
        cursor: pointer;
    }


    span {
        background: transparent;
    }

    i {
        background: transparent;
        color: white;
        font-size: 20px;
    }

    .weather-icons {
        position: relative;
        width: 60px;
        height: 60px;
    }

    .weather-icons i {
        position: absolute;
        inset: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 40px;
        background: linear-gradient(90deg, #00d9ff, #087cff, #4d5fff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;

        opacity: 0;
        animation: weatherIcon 8s infinite;
    }

    .weather-icons i:nth-child(1) {
        animation-delay: 0s;
    }

    .weather-icons i:nth-child(2) {
        animation-delay: 2s;
    }

    .weather-icons i:nth-child(3) {
        animation-delay: 4s;
    }

    .weather-icons i:nth-child(4) {
        animation-delay: 6s;
    }

    @keyframes weatherIcon {
        0% {
            opacity: 0;
            transform: translateY(15px) scale(0.8);
        }

        10% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }

        25% {
            opacity: 1;
            transform: translateY(-5px) scale(1.05);
        }

        35% {
            opacity: 0;
            transform: translateY(-15px) scale(0.8);
        }

        100% {
            opacity: 0;
        }
    }

`