import React,{ useEffect, useRef, useState } from 'react';
import './Main.scss';
import Dots from "./Dots";
import { BsSearch } from "react-icons/bs"
import { Autoplay,Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../img/travel-g61fc92606_1920.jpg'
import image2 from '../img/barn-gc2cd1319e_1920.jpg'
import image3 from '../img/camp-gd607affa9_1920.jpg'
import image4 from '../img/landscape-g467b0ad9b_1920.jpg'
import image5 from '../img/trees-gc20135b1a_1920.jpg'
import image6 from '../img/utah-g543009de6_1920.jpg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperComponent =  () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination,  A11y]}
      spaceBetween={45}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      loop
      // autoplay={{
      //   delay: 2000,
      //   disableOnInteraction: false
      // }}
      centeredSlides={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {/* 나중에 map 처리 */}
      <SwiperSlide>
        <div className='swiper_div'>
          <img className='image' src={image1} alt="image1"></img>
          <div className="cardTitle">산과 바다와 연인과 함께</div>
          <div className="tag"></div>
          <div className="place"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='swiper_div'>
          <img className='image' src={image2} alt="image2"></img>
          <div className="cardTitle">산과 바다와 연인과 함께</div>
          <div className="tag"></div>
          <div className="place"></div>
        </div>
      </SwiperSlide>  
      <SwiperSlide>
        <div className='swiper_div'>
          <img className='image' src={image3} alt="image3"></img>
          <div className="cardTitle">산과 바다와 연인과 함께</div>
          <div className="tag"></div>
          <div className="place"></div>
        </div>      
      </SwiperSlide>
      <SwiperSlide>
        <div className='swiper_div'>
          <img className='image' src={image4} alt="image4"></img>
          <div className="cardTitle">산과 바다와 연인과 함께</div>
          <div className="tag"></div>
          <div className="place"></div>
        </div>      
      </SwiperSlide>
      <SwiperSlide>
        <div className='swiper_div'>
          <img className='image' src={image5} alt="image5"></img>
          <div className="cardTitle">산과 바다와 연인과 함께</div>
          <div className="tag"></div>
          <div className="place"></div>
        </div>      
      </SwiperSlide>
      <SwiperSlide>
        <div className='swiper_div'>
          <img className='image' src={image6} alt="image6"></img>
          <div className="cardTitle">산과 바다와 연인과 함께</div>
          <div className="tag"></div>
          <div className="place"></div>
        </div>      
      </SwiperSlide>    
      


    </Swiper>
  );
};

const Main = () => {
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  const DIVIDER_HEIGHT = 5;

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth"
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth"
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight*2 && scrollTop < pageHeight * 3) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth"
          });
          setScrollIndex(4);
        }else {
          // 현재 3페이지
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: "smooth"
          });
          setScrollIndex(4);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight*2 && scrollTop < pageHeight * 3) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth"
          });
          setScrollIndex(2);
        }else {
          // 현재 3페이지
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth"
          });
          setScrollIndex(3);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <div className='container'>
      <div ref={outerDivRef} className="outer">
        <Dots scrollIndex={scrollIndex} />
        <div className="inner bg_1">
          <div className="content">
            <div className="search">
              <input placeholder='원하시는 차박지를 검색하세요.'></input>
              <div className="icon"><BsSearch /></div>
            </div>
            <div className="title"><p>Oh! My Car</p></div>
            <div className="sub_title"><p>Let`s travel with my Car</p></div>
          </div>
        </div>
        <div className="divider"></div>

        <div className="inner bg_2">

          <div className="content">
            <div className="title">
              <p>이런 여행지는 어떠세요?</p>
              <div className="button">
                <p>더 알아보기</p>
                <div className="icon"><BsSearch /></div>
              </div>
            </div>
            <div className="swiper">
              <SwiperComponent />
            </div>
            
            
          </div>

        </div>
        <div className="divider"></div>
        <div className="inner bg_3">3</div>
        <div className="divider"></div>
        <div className="inner bg_4">4</div>

      </div>
    </div>
  );
};

export default Main;