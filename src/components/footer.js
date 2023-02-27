import twitter from "./twitter.png"
import instagram from "./instagram.png"
import facebook from "./facebook.png"
import github from "./gitHub.png"

export default function Footer() {
    return (
        <div className="footer">
            <img src= {twitter} />
            <img src= {instagram} />
            <img src= {facebook} />
            <img src= {github} />
        </div>
    )
}