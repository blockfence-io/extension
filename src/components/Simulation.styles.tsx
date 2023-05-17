import styled from 'styled-components';

export const Palette = {
    Red: '#FF3F3F',
    Green: '#00B341',
    Blue: '#006bff',
};

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 6px;
    align-items: center;
`;

export const Icon = styled.div`
    width: 31px;
`;

export const GasContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    border-top: 1px #d9d9d9 solid;
    padding-top: 8px;
    margin: 0 10px;
    margin-top: 10px;
    font-weight: normal;
    font-size: 12px;
`;

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    gap: 8px;
`;

export const Direction = styled.div`
    font-weight: 800;
    text-transform: uppercase;
    color: #8e8e8e;
    font-size: 12px;
`;

export const Amount = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    font-size: 18px;
    font-weight: 800;
    color: black;
`;

interface EstimatedValueProps {
    color: keyof typeof Palette;
}

export const EstimatedValue = styled.div<EstimatedValueProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: bold;
    padding: 4px 18px;
    border-radius: 14px;
    color: ${(props) => Palette[props.color]};
    background: ${(props) => Palette[props.color]}18; /* 20 is ~0.1 opacity */
`;
