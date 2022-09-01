import { URL } from "../config"
import HeaderPages from "./HeaderPages"
import { Link } from 'react-router-dom';

function HeaderIndex() {

    return (
        <header>
            {window.location.href === URL ? (<div class="flex-container2">
                <div className="home-title2 custom-link">
                    <Link to="/" className="custom-link home-title-play">PLAYMAN</Link>
                    <Link to="/" className="custom-link home-title-gen gen-2">Generative Artist</Link>
                </div>
            </div>) : (<HeaderPages/>)}
        </header>
    )


}

export default HeaderIndex