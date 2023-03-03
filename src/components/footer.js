/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import '../assets/css/footer.css';


function Footer() {
//   const scrollTop=()=>
// {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// }
    return (
      <div className='footer'>
        <div className="flex">
          <div>
            <h2>Présence numérique</h2>
            <p>Footer </p>
   
            {/* <a className="scroll-to-top" style={{ display: "inline" }} onClick={scrollTop}>TOP</a> */}
          </div>
          <div>
            <ul>
              <li><Link to='/resume'>Regarder ma CVs</Link></li>
              <li><Link exact to="contact">Contact</Link></li>
              <li><Link exact to="project">Projets</Link></li>
            </ul>
            
 
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;
  