import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    color: white;
    background: black;

    & > h1 {
        margin-bottom: 1rem;
    }
`;
