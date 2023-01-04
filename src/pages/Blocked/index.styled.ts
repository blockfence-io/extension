import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: black;
    height: 100vh;
    color: white;

    & h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    & h2 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    & h3 {
        font-size: 1.2rem;
        margin-bottom: 4rem;
    }
`;
