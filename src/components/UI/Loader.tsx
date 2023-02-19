import React from 'react';
import styled from 'styled-components';
import LoaderAnimation from '../../assets/loader.svg';
import LoaderAnimationSmall from '../../assets/loader-small.svg';

const Container = styled.div`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    text-align: center;
    font-size: 18px;
    color: black;
    justify-content: top;
    flex-direction: column;
    align-items: center;
`;

export function Loader() {
    return (
        <Container>
            <LoaderAnimation />
        </Container>
    );
}

export function SmallLoader() {
    return (
        <Container>
            <LoaderAnimationSmall />
        </Container>
    );
}
