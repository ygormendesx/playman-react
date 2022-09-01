import { URL } from "../config"
import HeaderPages from "./HeaderPages"

function HeaderIndex() {
    return (
        <header>
            {window.location.href === URL ? (<div class="flex-container2">
                <div className="home-title2 custom-link">
                    <a href="/" className="custom-link home-title-play">PLAYMAN</a>
                    <a href="/" className="custom-link home-title-gen gen-2">Generative Artist</a>
                </div>
            </div>) : (<HeaderPages/>)}
        </header>
    )


}

export default HeaderIndex