import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    overflow-x: hidden;

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
        background-color: var(--text-body);
        border-radius: 20px;
        border: none;
    }

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;

            padding: 1rem 2rem;

            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;

            border: 0;
            border-radius: 0.25rem;

            background: var(--shape);
            color: var(--text-body);

            &:first-child {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            
            &.withdraw {
                color: var(--red);
            }

            button {
                height: 1.5rem;
                width: 1.5rem;
                background: transparent;
                border: none;

                & {
                    padding-top: 0.25rem;
                }
            }
        }
    }
`