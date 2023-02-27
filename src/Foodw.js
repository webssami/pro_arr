import Images from "./Images";

function Foodw(){
    {
        Images.food.map(element => {
          return (
            <div className='bnList' key={element.id} >
            <a href={element.link}>
            <div className='bnImg'>
              <img alt={element.title} src={element.imgsrc} />
            </div>
            <p>{element.title}</p>
            </a>
            </div>
          )
        }
        )
      } 

}

export default Foodw;