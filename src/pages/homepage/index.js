const HomePage = () => {
    
    return <div class="flex-container d-flex justify-content-center">
        <div class="container-menu custom-link d-flex ">
            <div class="container-about" id="c-menu">
                <a href="/about"><p>About the<br></br>Artist</p></a>
            </div>
            <div class="container-projects" id="c-menu">
                <a href="/projectmountain"><p>Projects</p></a>
            </div>
            <div class="container-contact" id="c-menu">
                <a href="/contato"><p>Contact</p></a>
            </div>
        </div>
        <br />
    </div>
}

export default HomePage;