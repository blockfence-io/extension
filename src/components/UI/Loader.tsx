import React from 'react';
import styled from 'styled-components';
import ContentLoader from 'react-content-loader';

import LoaderAnimation from '../../assets/loader.svg';

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

export function Placeholder() {
    return (
        <ContentLoader
            speed={1}
            width={340}
            height={64}
            viewBox='0 0 340 64'
            backgroundColor='#f3f3f3'
            foregroundColor='#ecebeb'
        >
            <rect x='0' y='0' rx='3' ry='3' width='67' height='11' />
            <rect x='76' y='0' rx='3' ry='3' width='140' height='11' />
            <rect x='0' y='23' rx='3' ry='3' width='100' height='11' />
            <rect x='108' y='23' rx='3' ry='3' width='143' height='11' />
            <rect x='0' y='48' rx='3' ry='3' width='53' height='11' />
            <rect x='60' y='48' rx='3' ry='3' width='72' height='11' />
        </ContentLoader>
    );
}
