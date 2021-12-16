import { useContext, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DataContext } from "../../context/DataContext"

function Main() {

    gsap.registerPlugin(ScrollTrigger)

    const { data } = useContext(DataContext)
    const pictureRef = useRef([])    
    pictureRef.current = []

    const addToRefs = (el) => {
        if (el && !pictureRef.current.includes(el)) {
            pictureRef.current.push(el)
        }

    }

    useEffect(() => {
        pictureRef.current.forEach((el, index) => {
            gsap.fromTo(el,
                {
                    autoAlpha: 0
                },
                {
                    duration: 1,
                    autoAlpha: 1,
                    ease: "none",
                    scrollTrigger: {
                        id: `pic-${index+1}`,
                        trigger: el,
                        start: "top center+=100",
                        toggleActions: "play none none reverse",
                       // markers: true
                    }
                })
        })

        
    })


    return (
        <main className="main container grid">
            <div className="sub-content sub-content1" ref={addToRefs}>
                <div>
                    <h2 className="headings heading-h2 uppercase">Your day at the gallery</h2>
                    <p className="main-content-text">
                        Wander through our distinct collections and find new insights about
                        our artists. Dive into the details of their creative process.
                    </p>
                </div>
            </div>
            {data.map(image => {
                return <picture key={image.id} className={`${image.name}`} ref={addToRefs}>
                    <source media="(min-width: 1080px)" srcSet={`${image.desktop[0]}, ${image.desktop[1]} 2x`} />
                    <source media="(min-width: 620px)" srcSet={`${image.tablet[0]}, ${image.tablet[1]} 2x`} />
                    <img className="hero-img" src={`${image.mobile[0]}`} alt={image.content} srcSet={`${image.mobile[1]} 2x`} />

                </picture>
            })}

            <div className="sub-content sub-content2 black-bg" ref={addToRefs}>
                <div className="container inner-container">
                    <h2 className="headings heading-h2 uppercase">Come &amp; be inspired</h2>
                    <p className="main-content-text">
                        We're excited to welcome you to our gallery and see how our collections
                        influence you.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Main
