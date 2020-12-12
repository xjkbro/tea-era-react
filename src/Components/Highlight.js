import React, { useState } from "react";
import {
    Container,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from "reactstrap";
import { items } from "../shared/items";
import { FadeTransform } from "react-animation-components";

const Highlight = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img
                    className="d-block w-100"
                    src={item.src}
                    alt={item.altText}
                />
                {/* <CarouselCaption
                    captionText={item.caption}
                    captionHeader={item.caption}
                /> */}
            </CarouselItem>
        );
    });

    return (
        <Container>
            <FadeTransform
                in
                transformProps={{
                    exitTransform: "translateY(100px)",
                }}
                fadeProps={{
                    enterOpacity: 0.75,
                }}
            >
                <Carousel
                    className="carouselStyle"
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators
                        items={items}
                        activeIndex={activeIndex}
                        onClickHandler={goToIndex}
                    />
                    {slides}
                    <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={previous}
                    />
                    <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={next}
                    />
                </Carousel>
            </FadeTransform>
        </Container>
    );
};

export default Highlight;
