import '../assets/css/header.css';
import Button from '../components/button';
import { useLocation, Link } from 'react-router-dom';
import profile from '../assets/img/picHeader.png';
import { useTranslation } from 'react-i18next';
// import LanguageSelect from "./languageSelect";


function Header() {
  const location = useLocation();
    // It is a hook imported from 'react-i18next'
   const { t } = useTranslation(); 
 
  
    return (
      <header >
        <nav>
        {location.pathname === "/" ? (
          <ul> 
            {/* <li><Button children={t('project_title')} to='/project'/></li>
            <li><Button children={t('contact-title')} to='/contact'/></li>
            <li><Button children={t('resume_title')} to='/resume' /></li> */}
            <li><Button children="PROJET" to='#project'/></li>
            
            <li><Button children="CONTACT" to='#contact'/></li>
            <li><Button children="CV" to='/resume' /></li>
            {/* <li>  <LanguageSelect /> </li> */}
          </ul>     ) : ( 
            <ul>
              <Link to='/'><img src={profile} alt="" /></Link>
              {/* <li><Button children={t('project_title')} to='/project'/></li>
              <li><Button children={t('contact_title')} to='/contact'/></li>
              <li><Button children={t('resume_title')} to='/resume' /></li> */}
            
              <li><Button children="Projet" to='#project'/></li>
              <li><Button children="Contact" to= {{ pathname: "/PATH_NAME", hash: "#contact" }}/></li>
             
              <li><Button children="CV" to='/resume' /></li>
          </ul>
          )}
        </nav>
      </header>
    );
  }
  
  export default Header;
  