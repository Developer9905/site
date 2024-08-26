import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Slider = () => {
    return (
        <Swiper
            className='mt-[80px]'
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide>
                <img
                    src="https://static.vecteezy.com/system/resources/previews/001/008/560/non_2x/casino-frame-label-falling-ribbons-casino-vector.jpg"
                    alt=""
                    className="w-full h-[100vh] object-cover"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://dq5w2ex467fab.cloudfront.net/morongocasinoresort.com-1761492892/cms/cache/v2/64b06ff30160c.jpg/1920x1080/fit;c:0,127,1921,1207;fp:56,44/80/ae690e1e807037a33c300c7dd3bd45d1.jpg"
                    alt=""
                    className="w-full h-[100vh] object-cover"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://casino.betmgm.com/en/blog/wp-content/uploads/2023/08/Casino-Gambling-The-Complete-Guide-for-Beginners-header-1080x610-1.jpg"
                    alt=""
                    className="w-full h-[100vh] object-cover"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://www.slotsmobile.co.uk/wp-content/uploads/2017/12/uk-casino-online.png"
                    alt=""
                    className="w-full h-[100vh] object-cover"
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
