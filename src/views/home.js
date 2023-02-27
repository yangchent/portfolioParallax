import '../assets/css/main.css';
import { ParallaxProvider, ParallaxBannerLayer } from 'react-scroll-parallax';
import profile from '../assets/img/picBlue.png';
import mountain1 from '../assets/bg/mountain1.png';
import mountain2 from '../assets/bg/mountain2.png';
import mountain3 from '../assets/bg/mountain3.png';
import mountain4 from '../assets/bg/mountain4.png';
import eighty from '../assets/icons/80.png';
import fifty from '../assets/icons/50.png';
import twentyfive from '../assets/icons/25.png';
import forty from '../assets/icons/40.png';
import sixty from '../assets/icons/60.png';
import Contact from './contact';

function Home() {
    return (
      <ParallaxProvider>
      <div>
          <section className='parallax'>
          
            <ParallaxBannerLayer offset={0.2} speed={-30} >
            <img src={mountain1} alt="hill1" />
            </ParallaxBannerLayer> 
            
            <ParallaxBannerLayer offset={0.2} speed={-20}>
            <img src={mountain2} alt="hill2" />
            </ParallaxBannerLayer> 
            <ParallaxBannerLayer offset={0.1} speed={-10}>
            <img src={mountain3} alt="hill2" />
            </ParallaxBannerLayer> 
            <ParallaxBannerLayer offset={0.2} speed={-20} >
              <div className='parallax-text flex'>
                <div id="profile_image">
                  <img src={profile} alt="profile" className='spinner' />
                </div> 
                <div id='text'>
                  <div >
                    <h2> Yangchen Tsering </h2>
                    <h1>Je suis une</h1>
                    <h1>Développeuse web </h1>
                  </div> 
                </div>  
            </div>     
            </ParallaxBannerLayer> 
            <ParallaxBannerLayer offset={0.8} speed={-3} >
            <img src={mountain4} alt="hill2" /> 
            </ParallaxBannerLayer>

          </section>     
          <section className="competence">
            <h2>Hard Skills</h2>

            <div className="skills">
                <ul>
                    <li><p>HTML</p><img src={eighty} alt='chart pie'/></li>
                    <li><p>CSS/Sass</p><img src={fifty} alt='chart pie'/></li>
                    <li><p>JavaScript</p>
                      <img src={fifty} alt='chart pie'/></li>
                    <li><p>React</p><img src={sixty} alt='chart pie'/></li>
                    <li><p>Django</p><img src={twentyfive} alt='chart pie'/></li>
                    <li><p>NodeJS</p><img src={forty} alt='chart pie'/></li>
                    <li><p>ExpressJs</p><img src={forty} alt='chart pie'/></li>
                    <li><p>MongoDB</p><img src={forty} alt='chart pie'/></li>
                    <li><p>SQLite</p><img src={forty} alt='chart pie'/></li>
                    <li><p>TailwindCSS</p><img src={eighty} alt='chart pie'/></li>
                    <li><p>Bootstrap</p><img src={eighty} alt='chart pie'/></li>
                    <li><p>Illustrator</p></li>
                    <li><p>GitHub</p></li>
                    <li><p>VsCode</p></li>
                </ul>
            </div>
            <h2>Soft Skills</h2>
            <div className='skills'>
                <ul>
                  <li><p>Creatif</p></li>
                  <li><p>Design Sprint</p></li>
                  <li><p>Anglais</p></li>
                  <li><p>Hindi</p></li>
                  <li><p>Tibétain</p></li>
                </ul>
            </div>
        </section>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2c7da0" fillOpacity="1" d="M0,160L60,138.7C120,117,240,75,360,80C480,85,600,139,720,181.3C840,224,960,256,1080,240C1200,224,1320,160,1380,128L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        <section id="contact">
          <Contact />
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2c7da0" fillOpacity="1" d="M0,192L30,197.3C60,203,120,213,180,202.7C240,192,300,160,360,128C420,96,480,64,540,64C600,64,660,96,720,101.3C780,107,840,85,900,101.3C960,117,1020,171,1080,197.3C1140,224,1200,224,1260,208C1320,192,1380,160,1410,144L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
      </div>
   
      </ParallaxProvider>
    );
  }
  
  export default Home;
  