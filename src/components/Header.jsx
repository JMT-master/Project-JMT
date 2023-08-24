import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <ul className='Header-ul'>
        <li>로그인</li>
        <li>여행지</li>
        <li>테마</li>
        <li className='headerLink'><Link to='/select'>나의 여행</Link></li>
        <li className='headerLink'><Link to="/curator">여행 정보</Link></li>
        <li>공지 사항</li>
        <li className='headerLink'><Link to="/myPage">마이 페이지</Link></li>
      </ul>
    </div>
  )
}

export default Header