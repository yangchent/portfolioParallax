import '../assets/css/project.css';


function Project(){
    return(
        <div className='project'>
            <h2>Projets</h2>
            <div class="cards">
    <div class="card card-1">
      
      <h2 class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      <p class="card__apply">
        <a className="card__link" href="google.com">Apply Now </a>
      </p>
    </div>
    <div class="card card-2">
      
      <h2 class="card__title">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
      <p class="card__apply">
        <a className="card__link" href="google.com">Apply Now </a>
      </p>
    </div>
    </div>

            <div className='container_project'>       
    
            <div class="card01">
                <div class="face face1">
                    <div class="content">
                        <div class="icon">
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                    
                        <a href="https://www.linkedin.com/in/yangchen-tsering-662739201/" target="_blank" rel="noreferrer"><h3>Yangchen Tsering</h3></a>
                    
                        <p>This is where I network and build my professional protfolio.</p>
                    </div>
                </div>
            </div>
            <div class="card01">
                <div class="face face1">
                    <div class="content">
                        <div class="icon">
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                    
                        <a href="https://www.linkedin.com/in/yangchen-tsering-662739201/" target="_blank" rel="noreferrer"><h3>Yangchen Tsering</h3></a>
                    
                        <p>This is where I network and build my professional protfolio.</p>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    )
}
export default Project;