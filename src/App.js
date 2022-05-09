import { useState, useEffect, useRef } from "react";

import "./App.css";

const DIVIDER_HEIGHT = 5;

function App() {
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
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
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          //현재 3페이지
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
          
        } else {
          // 현재 4페이지
          console.log("현재 4페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          //현재 3페이지
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else {
          // 현재 4페이지
          console.log("현재 4페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          
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
    
    <div ref={outerDivRef} className="outer">
      {/* <div className='nav'>
        <div>굥이 리액트 시작</div>
      </div> */}

      <div className="inner main-1">
        <div className="main-txt">
        <h1> Oh! My Car</h1>
        <h6>Let's travel with our Car</h6>
        </div>
      
      </div>
      

      <div className="inner main-2">
        <div className="banner-txt1">
        <h6>이런 여행지는 어떠세요?</h6>
        </div>
      </div>

      <div className="inner main-3">
        <div className="banner-txt2">
        <h6> #바다 #일출 #떠나자 #가볼만한곳</h6>
        <h5>나만 보기 아까운 PLACE!</h5>
        <h5>함께 공유하세요.</h5>
        </div>
      </div>

      <div className="inner main-4">
        <div className="banner-txt3">
        <h6>당신의 장소에 사람들을 초대해보세요.</h6>
        <h6>OMC가 도와드리겠습니다.</h6>
        </div>
      </div>
    </div>
  );
}

export default App;