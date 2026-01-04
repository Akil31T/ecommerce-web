import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HOMESLIDER } from "@/lib/constant";

export default function HomeSlider() {

    HOMESLIDER.IMAGES  
    console.log(HOMESLIDER.IMAGES);
    

  return (

      <Carousel>
         <CarouselContent>
        {HOMESLIDER.IMAGES.map((src, index) => (
          <CarouselItem key={index}>
            <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-96 object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
  );
}
