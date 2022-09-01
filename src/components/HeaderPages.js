function HeaderPages() {


    return (
        <div className="d-flex justify-content-between align-items-center pages-header flex-xl-row flex-lg-row flex-md-row flex-sm-column flex-column">
                <div className="d-flex flex-column custom-link align-items-sm-center align-items-center align-items-md-start align-items-lg-start align-items-xl-start page-title">
                    <a href="/" className="home-title-play">PLAYMAN</a>
                    <a href="/" className="home-title-gen">Generative Artist</a>
                </div>
                <div className="list-menu">
                <ul className="list-menu d-flex align-items-center justify-content-between custom-link">
                    <li><a href="./about">About</a></li>
                    <li><a href="./projectmountain">Projects</a></li>
                    <li><a href="./contato">Contact</a></li>
                </ul>
                </div>
            
        </div>
    )
}

export default HeaderPages