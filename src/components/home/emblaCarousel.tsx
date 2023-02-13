import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => ({
  imageArea: {
    borderRadius: "10px",
    overflow: "hidden",
  },
}));

const image1 = "/imgs/einar-ingi-sigmundsson-QO_XjRt_Hkk-unsplash.jpg";
const image2 = "/imgs/honza-reznik-5nQllMuU8Pw-unsplash.jpg";
const image3 = "/imgs/masahiro-miyagi-MFUn9CApJmg-unsplash.jpg";

const EmblaCarousel = () => {
  const { classes } = useStyles();

  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <Carousel
      sx={{ maxWidth: 400 }}
      mx="auto"
      //withIndicators
      height={250}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <Carousel.Slide key={image1}>
        <Image
          className={classes.imageArea}
          src={image1}
          width={400}
          height={250}
        />
      </Carousel.Slide>
      <Carousel.Slide key={image2}>
        <Image
          className={classes.imageArea}
          src={image2}
          width={400}
          height={250}
        />
      </Carousel.Slide>
      <Carousel.Slide key={image3}>
        <Image
          className={classes.imageArea}
          src={image3}
          width={400}
          height={250}
        />
      </Carousel.Slide>
    </Carousel>
  );
};

export default EmblaCarousel;
