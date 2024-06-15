import { ArrowBackIos, ArrowForward, ArrowForwardIos } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';

export const usePrevNextButtons = (emblaApi, onButtonClick) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
        if (onButtonClick) onButtonClick(emblaApi);
    }, [emblaApi, onButtonClick]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
        if (onButtonClick) onButtonClick(emblaApi);
    }, [emblaApi, onButtonClick]);

    const onSelect = useCallback((emblaApi) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi.on('reInit', onSelect).on('select', onSelect);
    }, [emblaApi, onSelect]);

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    };
};

export const PrevButton = (props) => {
    const { children, ...restProps } = props;

    return (
        <IconButton {...restProps}>
            <ArrowBackIos sx={{ color: 'white' }}></ArrowBackIos>
            {children}
        </IconButton>
    );
};

export const NextButton = (props) => {
    const { children, ...restProps } = props;

    return (
        <IconButton {...restProps}>
            <ArrowForwardIos sx={{ color: 'white' }}></ArrowForwardIos>
            {children}
        </IconButton>
    );
};
