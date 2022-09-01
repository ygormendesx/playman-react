import { Link } from 'react-router-dom';

function HeaderPages() {


    return (
        <div className="d-flex justify-content-between align-items-center pages-header flex-xl-row flex-lg-row flex-md-row flex-sm-column flex-column">
                <div className="d-flex flex-column custom-link align-items-sm-center align-items-center align-items-md-start align-items-lg-start align-items-xl-start page-title">
                    <Link to="/" className="home-title-play">PLAYMAN</Link>
                    <Link to="/" className="home-title-gen">Generative Artist</Link>
                </div>
                <div className="list-menu">
                <ul className="list-menu d-flex align-items-center justify-content-between custom-link">
                    <li><Link to="./about">About</Link></li>
                    <li><Link to="./projectmountain">Projects</Link></li>
                    <li><Link to="./contato">Contact</Link></li>
                </ul>
                </div>
            
        </div>
    )
}

export default HeaderPages