import { Link } from 'react-router-dom';

const HomePage = () => {
    
    return <div class="flex-container d-flex justify-content-center">
        <div class="container-menu custom-link d-flex ">
            <div class="container-about" id="c-menu">
                <Link to="/about" ><p>About the<br></br>Artist</p></Link>
            </div>
            <div class="container-projects" id="c-menu">
                <Link to="/projectmountain"><p>Projects</p></Link>
            </div>
            <div class="container-contact" id="c-menu">
                <Link to="/contato"><p>Contact</p></Link>
            </div>
        </div>
        <br />
    </div>
}

export default HomePage;