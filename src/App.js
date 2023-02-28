import React, {useState} from 'react';


import Images from './Images.js';
//배너 이미지와 음식이미지 배열처리
//두번째 수정본

import './App_main.css';
import { CiFaceSmile } from 'react-icons/ci';
import { AiFillHeart } from 'react-icons/ai';
import Cont from './Cont';
import Foot from './Foot';
import Banner from './Banner';
import UserList from './UserList';
import './banner.css';
import Foodw from './Foodw';

function App() {
  const contents = '리액트 재미있다 !!';
  const writer = '박믿음';
  const contWriter = contents + ' - ' + writer;
  const p_style = {color:'#0f0'};

  /* 클릭시 카운트 */
  let count = 0;
  const [cnt, setCnt] = useState(0);
  const cntClick = () => {
    count = count + 1;
    console.log('count : ' + count);
    setCnt(cnt + 1);
    console.log('cnt : ' + cnt);
  }
  return (
    <>
      <header className='h_top'>
        <h2>리액트 배우기 <CiFaceSmile className='icon_smile' /></h2>
        <p className='cont_text'> <AiFillHeart /> 컴포넌트 </p>
      </header>
      <Cont num="1" text="Components" />
      <Cont num="2" text="props" />
      <Cont num="3" text="JSX" />
      {/* inline style */}
      <h4 style={{color:'#f00',textDecoration:'underline'}}>{contWriter}</h4>
      <p style={p_style}>상수선언한 스타일 적용</p>

      {/* 이미지 로딩- require */}
      <div>
        <img src={require("./assets/logo.png")} alt="주사위" />
      </div>
      <div>
        <img src={Images.blue4} alt="블루4" />
      </div>

      {/* 버튼 클릭이벤트와 업데이트(state) 되는 카운트 */}
      <button onClick={cntClick}>카운트 버튼</button>
      <div style={{border:'1px solid #aaa', width:'40px',padding:'10px',textAlign:'center'}}>
        {cnt}
      </div>

      {/* 배너 목록 */}
      <h2 className='title'>배너 목록! <AiFillHeart /></h2>
      <div className='banner_wrap'>
        <Banner bnlink={Images.banner[0].link} bnimg={Images.banner[0].imgsrc} bntext={Images.banner[0].title} />
        <Banner bnlink={Images.banner[1].link} bnimg={Images.banner[1].imgsrc} bntext={Images.banner[1].title} />
        <Banner bnlink={Images.banner[2].link} bnimg={Images.banner[2].imgsrc} bntext={Images.banner[2].title} />
        <Banner bnlink={Images.banner[3].link} bnimg={Images.banner[3].imgsrc} bntext={Images.banner[3].title} />
        
      </div>
      
      <h2 className='title'>음식 목록! <AiFillHeart /></h2>
      <div className='banner_wrap col3'>
            <Foodw />
       </div>

      {/* userlist - 배열처리 */}
      <UserList />


    {/* 여행후기 - 배열처리 */}
    
      <Foot year="2023" />

    </>
    
  );
}

export default App;
