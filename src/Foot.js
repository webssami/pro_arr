
//Foot라는 컴포넌트 생성
function Foot(props){
    return(
      <footer className='foot'>
        copyright &copy; {props.year}.
      </footer>
    )
  }

  export default Foot;