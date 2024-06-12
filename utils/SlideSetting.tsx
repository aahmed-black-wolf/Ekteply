export const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  center: true,
  arrows: false,
  adaptiveHeight: true,
  pauseOnHover: true,
  draggable: true,
  appendDots: (dots: any) => (
    <ul className=" w-full  flex gap-[3px] md:gap-[20px] justify-center">
      {dots}
    </ul>
  ),
  customPaging: (i: number) => (
    <div
      key={i}
      className="md:w-[20px] md:h-[20px] w-[10px] h-[10px] rounded-full bg-light-600"
    ></div>
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        draggable: true,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
      },
    },
  ],
};
