import CTR from '../images/pike.png';
import RR from '../images/rr.png';
import Betty from '../images/betty.jpeg';
import "./Projects.css"

export const Projects = () => {
    return <ul className='projectContainer'>
        <li><a className='projectItem' href="https://www.youtube.com/watch?v=mgXJDt4kSDQ" target="_blank"><img className="ctr" src={CTR} />cruisin' the pike - the music video</a></li>
        <li><a className='projectItem' href="https://www.youtube.com/watch?v=ZlhIkV1geKI" target="_blank"><img className="ctr" src={RR} /> rat race</a></li>
        <li className='projectItem'><img className="ctr" src={Betty} />the murder at betty's</li>
        <li className='projectItem'>silver platter</li>
        <li className='projectItem'>unreleased chicken snack</li>
        <li className='projectItem'>space stuff???????</li>
        </ul>
}