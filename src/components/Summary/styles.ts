import styled from "styled-components";


export const Container = styled.div`
    display: grid;
    //grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    overflow-x: hidden;

    padding: 0.25rem 0;

    margin-top: -10rem;

    scrollbar-width: thin;
    scrollbar-color: var(--text-body) transparent;

    &:hover {
        overflow-x: auto;
    }

    &::-webkit-scrollbar {
        width: 12px;
        height: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--text-body);    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: none;
    }

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        min-width: 250px;

        header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }

    &.highlight-background-positive {
        background: var(--green);
        color: #fff;
    }

    &.highlight-background-negative {
        background: var(--red);
        color: #fff;
    }
}
`;