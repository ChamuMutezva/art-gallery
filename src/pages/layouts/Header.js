import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroMobile from '../../assets/mobile/image-hero.jpg'
import heroMobile2 from '../../assets/mobile/image-hero@2x.jpg'
import heroTablet from '../../assets/tablet/image-hero.jpg'
import heroTablet2 from '../../assets/tablet/image-hero@2x.jpg'
import heroDesktop from '../../assets/desktop/image-hero.jpg'
import heroDesktop2 from '../../assets/desktop/image-hero@2x.jpg'
import arrowRight from '../../assets/icon-arrow-right.svg'
import LinkBtn from "../../components/LinkBtn";

function Header() {
const h1Ref = useRef(null)
    useEffect(() => {
        gsap.from(h1Ref.current, {
            duration: 1, 
            autoAlpha: 0,
            ease: "none",
            delay: 1
        })

    })
    
    return (
        <header className="header">
          
                <div className="decorative"></div>
                <div className="hero">
                    <picture>
                        <source media="(min-width: 1080px)" srcSet={`${heroDesktop}, ${heroDesktop2} 2x`} />
                        <source media="(min-width: 620px)" srcSet={`${heroTablet}, ${heroTablet2} 2x`} />
                        <img className="hero-img" src={`${heroMobile}`} alt="" srcSet={`${heroMobile2} 2x`} />
                    </picture>
                </div>
                <div className="container main-content">
                    <h1 ref={h1Ref} className="main-heading headings heading-h1 uppercase">Modern Art Gallery</h1>
                    <p className="main-content-text">
                        The arts in the collection of the Modern Art Gallery all started
                        from a spark of inspiration. Will these pieces inspire you? Visit
                        us and find out.
                    </p>
                    <LinkBtn to="Location" src={arrowRight} text="Our location"/>
                   
                </div>
           
        </header>
    )
}

export default Header
