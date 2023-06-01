import React, { useState } from 'react';
import * as Styled from './Feedback.styles';
import { UilThumbsDown, UilThumbsUp } from '@iconscout/react-unicons';
import { logButtonClick } from '../../shared/logs';

interface FeedbackProps {
    onClick: (thumbsUp: boolean, comment: string) => Promise<void>;
}

enum FeedbackState {
    NONE = 0,
    THUMBS_UP,
    THUMBS_DOWN,
    LOADING,
}

export function Feedback({ onClick }: FeedbackProps) {
    const [selected, setSelected] = useState<FeedbackState>(0);

    const title = 'Was this information helpful?';

    const onThumbUp = async () => {
        if (selected === FeedbackState.LOADING || selected === FeedbackState.THUMBS_UP) {
            return;
        }
        logButtonClick('thumb up', {});
        setSelected(FeedbackState.LOADING);
        try {
            await onClick(true, '');
            setSelected(FeedbackState.THUMBS_UP);
        } catch (e) {
            setSelected(FeedbackState.NONE);
        }
    };
    const onThumbDown = async () => {
        if (selected === FeedbackState.LOADING || selected === FeedbackState.THUMBS_DOWN) {
            return;
        }
        logButtonClick('thumb down', {});
        setSelected(FeedbackState.LOADING);
        await onClick(false, '');
        setSelected(FeedbackState.THUMBS_DOWN);
    };

    const disabled = selected === FeedbackState.LOADING;
    const upColor = disabled ? 'gray' : selected === FeedbackState.THUMBS_UP ? 'green' : 'black';
    const downColor = disabled ? 'gray' : selected === FeedbackState.THUMBS_DOWN ? 'red' : 'black';
    return (
        <Styled.Container>
            <Styled.Body>{title}</Styled.Body>

            <Styled.Icon onClick={onThumbUp}>{<UilThumbsUp color={upColor} />}</Styled.Icon>
            <Styled.Icon onClick={onThumbDown}>{<UilThumbsDown color={downColor} />}</Styled.Icon>
        </Styled.Container>
    );
}
