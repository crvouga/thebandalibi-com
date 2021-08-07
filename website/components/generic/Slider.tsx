import "keen-slider/keen-slider.min.css";
import KeenSlider, { useKeenSlider } from "keen-slider/react";

export const SLIDER_ITEM_CLASSNAME = "keen-slider__slide";
export const SLIDER_CONTAINER_CLASSNAME = "keen-slider";

type SliderState = {
  index: number;
};

const keenSliderToSliderState = (slider: KeenSlider): SliderState => {
  return {
    index: slider.details().relativeSlide,
  };
};

export const useSlider = ({
  slidesPerView,
  loop,
  showControls,
  move,
}: {
  slidesPerView: number;
  loop: boolean;
  showControls: boolean;

  move?: (state: SliderState) => void;
}) => {
  return useKeenSlider<HTMLDivElement>({
    slidesPerView,
    loop,
    controls: showControls,
    move: move ? (slider) => move(keenSliderToSliderState(slider)) : undefined,
  });
};
