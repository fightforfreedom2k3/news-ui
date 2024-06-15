import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from '../EmblaCarousel/EmblaCarouselArrowButtons/EmblaCarouselArrowButtons';
import { DotButton, useDotButton } from './EmblaCarouselDotButton/EmblaCarouselDotButton';
import { Box, Stack } from '@mui/material';
import { Margin } from '@mui/icons-material';
import VideoNews from '../pageComponent/VideoNews/VideoNews';

const EmblaCarousel = ({ data }) => {
    const slides = Array.from(Array(5).keys());
    const options = {};
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

    return (
        <Stack className="embla" maxWidth={'1200px'} margin={'auto'} position={'relative'}>
            <Stack direction={'row'} position={'absolute'} top={'-48px'} right={0}>
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </Stack>
            <Stack className="embla__viewport" ref={emblaRef} overflow={'hidden'}>
                <Stack
                    className="embla__container"
                    sx={{ backfaceVisibility: 'hidden', touchAction: 'pan-y pinch-zoom' }}
                    display={'flex'}
                    marginLeft={'calc(1rem * (-1))'}
                    direction={'row'}
                >
                    {data.map((dataItem, index) => (
                        <Stack
                            className="embla__slide embla__class-names"
                            key={index}
                            flex={'0 0  22%'}
                            minWidth={0}
                            paddingLeft={'1rem'}
                        >
                            <VideoNews data={dataItem} />
                        </Stack>
                    ))}
                </Stack>
            </Stack>

            <Stack className="embla__controls">
                {/* <Stack
                    className="embla__dots"
                    direction={'row'}
                    sx={{ flexWrap: 'wrap' }}
                    justifyContent={'flex-end'}
                    alignItems={'center'}
                    marginRight={'calc((2.6rem - 1.4rem) / 2 * -1)'}
                >
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
                            
                        />
                    ))}
                </Stack> */}
            </Stack>
        </Stack>
    );
};

export default EmblaCarousel;
