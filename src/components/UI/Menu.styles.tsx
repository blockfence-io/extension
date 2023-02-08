import styled from 'styled-components';

interface OverlayProps {
    visible: boolean;
}

export const Container = styled.div`
    position: relative;

    & a {
        margin: 8px 0;
    }
`;

export const Overlay = styled.div<OverlayProps>`
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    background: #f8f8f8;
    padding: 24px 20px 10px 20px;

    font-size: 12px;
    color: #494949;

    border: 1px solid #dadce0;
    border-radius: 5px;

    opacity: ${(props) => (props.visible ? 1 : 0)};
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
    transition: visibility 0s, opacity 0.1s;

    z-index: 20;
`;

export const Controller = styled.div<OverlayProps>`
    position: relative;
    padding: 8px 8px;
    font-size: 20px;
    z-index: 50;

    color: ${(props) => (props.visible ? '#3D3D3D' : 'white')};

    user-select: none;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`;

export const Title = styled.h3`
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 800;
    margin-bottom: 10px;
`;

export const Body = styled.div`
    line-height: 20px;
`;

export const Separator = styled.hr`
    border: none;
    border-top: 1px solid #dadce0;
    margin: 12px 0;
`;

export const Link = styled.a`
    display: block;
`;
