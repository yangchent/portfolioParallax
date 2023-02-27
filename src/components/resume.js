import '../assets/css/cv.css';
import cvFr from '../assets/img/cvFr.jpg';
import cvEng from '../assets/img/cvEng.jpg';
import cv_Eng from '../assets/img/Eng CV_Yangchen.pdf';
import cv_Fr from '../assets/img/CV_Yangchen.pdf';

function Resume() {

    return(
        <div className="resume">
            
            <div className="resumeFr">
                <img src={cvFr} alt="cv en français" />
                
                <a className="download" href={cv_Fr} download="cv_yangchen.pdf">
                Télecharger CV</a>
            </div>
            <div className="resumeEn">
                <img src={cvEng} alt="cv en anglais" />
                <a className="download" href={cv_Eng} download="cv_yangchen.pdf">
                Télecharger CV</a>
            </div>
        </div>
    )
}
export default Resume; 