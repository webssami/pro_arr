
//Cont라는 컴포넌트 생성
function Cont(props){
    return(
      <div className='cont'>
        contents {props.num} <br />
        {props.text}
      </div>
    )
  }

  export default Cont;