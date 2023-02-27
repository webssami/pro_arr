import blue4 from './assets/dice-blue-4.svg';
import bn01 from './assets/banner01.jpg';
import bn02 from './assets/banner02.jpg';
import bn03 from './assets/banner03.jpg';
import bn04 from './assets/banner04.jpg';
import food01 from './assets/food/food1.jpg';
import food02 from './assets/food/food2.jpg';
import food03 from './assets/food/food3.jpg';
const Images={
    blue4 : blue4,
    banner : [
       {
        id:1,
        link: 'http://naver.com',
         title:'naver',
         imgsrc:bn01
       },
       {
        id:2,
        link: 'http://nate.com',
         title:'nate',
         imgsrc:bn02
       },
       {
        id:3,
        link: 'http://daum.com',
         title:'daum',
         imgsrc:bn03
       },
       {
        id:4,
        link: 'http://google.com',
         title:'google',
         imgsrc:bn04
       },
      
     ],
     food : [
      {
       id:1,
        link:'http://naver.com',
        title:'food01',
        imgsrc:food01
      },
      {
       id:2,
        link:'http://naver.com',
        title:'food02',
        imgsrc:food02
      },
      {
       id:3,
        link:'http://naver.com',
        title:'food03',
        imgsrc:food03
      },
      
    ]
   }

   export default Images;