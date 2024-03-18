import Carousel from "react-bootstrap/Carousel";
import SecondImg from "../assets/Two.jpg";
import ThirdImg from "../assets/Third.jpg";
import FifthImg from "../assets/Fifth.jpg";
import SixthImg from "../assets/Sixth.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
function CarouselComp() {
  return (
    <Carousel
      className="w-full sm:h-96 lg:h-full theCarouse overflow-hidden my-5 sm:"
      controls={false}
    >
      <Carousel.Item>
        <div className="w-full h-full bg-white p-4 flex flex-row items-center justify-around">
          <div className="">
            <div>
              <h1 className="sm:text-2xl lg:text-3xl font-bold xl:text-4xl bg-orange-400 w-fit p-2">
                Get 15% off
              </h1>
              <p className="sm:text-md lg:text-2xl xl:text-xl">
                Start shopping now and make the most
                <br /> of these incredible discounts.
              </p>
            </div>
          </div>
          <div className="">
            <LazyLoadImage
              src={SecondImg}
              alt=""
              threshold={100}
              className="w-72 h-full"
            />
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='w-full h-full p-4 flex flex-row items-center justify-around bg-gradient-to-br from-blue-300 to-blue-100"'>
          <div className="">
            <h1 className="sm:text-2xl lg:text-3xl xl:text-4xl bg-blue-500 p-2 font-bold w-fit text-white">
              Shop Now and Save!
            </h1>
            <p className="sm:text-md lg:text-2xl xl:text-xl">
              Browse our latest collection of <br /> fashion-forward clothing
              for all seasons.
            </p>
          </div>
          <div className="">
            <LazyLoadImage
              src={ThirdImg}
              alt=""
              threshold={100}
              className="w-72 h-full"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="w-full h-full p-4 flex flex-row items-center justify-around ">
          <div className="">
            <h1 className="sm:text-2xl lg:text-3xl xl:text-4xl bg-pink-300 p-2 font-bold text-center">
              Enjoy a 20% discount
            </h1>
            <p className="sm:text-md lg:text-2xl xl:text-xl">
              on all T-shirts in our summer collection
            </p>
          </div>
          <div className="">
            <LazyLoadImage
              src={SixthImg}
              alt=""
              threshold={100}
              className="w-72 h-full"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="w-full sm:px-6 lg:px-0 h-full py-4 bg-gradient-to-tr from-slate-300 to slate-50 flex flex-row items-center justify-around">
          <div className="">
            <h1 className="sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-slate-400 text-white p-2 w-fit">
              Tech Extravaganza!
            </h1>
            <p className="sm:text-md lg:text-2xl xl:text-xl">
              Enjoy up to 30% off on select computers and accessories
            </p>
          </div>
          <div className="">
            <LazyLoadImage
              src={FifthImg}
              alt=""
              threshold={100}
              className="w-72 h-full "
            />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;
