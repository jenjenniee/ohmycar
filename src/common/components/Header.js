import React from 'react';
import './Header.scss';
import { BsPersonCircle } from "react-icons/bs"

const Header = ({ url }) => {
  console.log(url)
  return (
    <div className={'header ' + (url !== "http://localhost:3000/" ? 'header_background' : '')}>
      <div className="wrapper">
        <div className="wrapper_left">
          <div className="logo">OMC</div>
          <div className="menu">
            <div className='menu_item'>차박지</div>
            <div className='menu_item'>커뮤니티</div>
            <div className='menu_item'>관리자</div>
          </div>
        </div>
        <div className="wrapper_right">
        <div className="button" onClick={()=> window.location.href="/Login"}>로그인</div>
          <div className="icon"><BsPersonCircle /></div>
        </div>
      </div>
    </div>
  );
};

export default Header;