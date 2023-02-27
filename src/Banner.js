
import './banner.css';

function Banner({bnlink, bnimg, bntext}){
    return(
        <div className='bnList'>
          <a href={bnlink}>
            <div className='bnImg'>
              <img src={bnimg} alt={bntext} />
            </div>
            <p>{bntext}</p>
          </a>
        </div>
    )
}

export default Banner;