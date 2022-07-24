import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33cc95;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #fff; 
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    body{
        background: var(--background); 
        -webkit-font-smoothing: antialiased;

        scrollbar-width: thin;
        scrollbar-color: var(--text-body) transparent;

        &::-webkit-scrollbar {
            width: 8px;
            height: 10px;
        }

        &::-webkit-scrollbar-track {
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--text-body);
            border-radius: 20px;
            border: none;
        }

    }
    
    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgb(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;

        background: var(--background);

        padding: 3rem;

        position: relative;

        border-radius: 0.25rem;

        @media (max-width: 620px) {
            max-width: 520px;
        }

        @media (max-width: 540px) {
            max-width: 476px;
        }

        @media (max-width: 480px) {
            width: 100%;
            height: 100%;
        }
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;

        border: 0;

        background: transparent;
        
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }
`
