import { ReactComponent as Facebook } from "../../assets/icon-facebook.svg"
import { ReactComponent as Instagram } from "../../assets/icon-instagram.svg"
import { ReactComponent as Twitter } from "../../assets/icon-twitter.svg"

function Footer(props) {
    const footerMap = props.locationFooter ? "location-footer" : ""
    return (
        <footer className={`container black-bg footer ${footerMap}`}>
            <div className="footer-container">
                <h3 className="headings uppercase heading-h3 footer-heading">Modern Art <br /> Gallery</h3>

                <p className="main-content-text footer-content">
                    The Modern Art Gallery is free to all visitors and open seven days a week
                    from 8am to 9pm. Find us at 99 King Street, Newport, USA.
                </p>
                <div className="social-icons">

                    <ul className="social-icons-list">
                        <li>
                            <a href="/" className="social-item" aria-label="visit our facebook page" >
                                <Facebook title="facebook page" className="facebook" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a href="/" className="social-item" aria-label="visit our instagram page" >
                                <Instagram title="instagram" className="instagram" aria-hidden={true} />
                            </a>
                        </li>
                        <li>
                            <a href="/" className="social-item" aria-label="visit our twitter page">
                                <Twitter title="twitter" className="twitter" aria-hidden={true}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer

