import { useContext } from "react"
/*
import imgGridMobileOne from "../../assets/mobile/image-grid-1.jpg"
import imgGridMobileOne2x from "../../assets/mobile/image-grid-1@2x.jpg"
import imgGridMobileTwo from "../../assets/mobile/image-grid-2.jpg"
import imgGridMobileTwo2x from "../../assets/mobile/image-grid-2@2x.jpg"
import imgGridMobileThree from "../../assets/mobile/image-grid-3.jpg"
import imgGridMobileThree2x from "../../assets/mobile/image-grid-3@2x.jpg"
*/
import { DataContext } from "../../context/DataContext"

function Main() {
    const { data } = useContext(DataContext)
    console.log(data)
    return (
        <main className="main">
            <div className="sub-content">
                <h2>Your day at the gallery</h2>
                <p>
                    Wander through our distinct collections and find new insights about
                    our artists. Dive into the details of their creative process.
                </p>
            </div>
            {data.map(image => {
                return <picture key={image.id}>
                    <source media="(min-width: 1080px)" srcSet={`${image.desktop[0]}, ${image.desktop[1]} 2x`} />
                    <source media="(min-width: 620px)" srcSet={`${image.tablet[0]}, ${image.tablet[1]} 2x`} />
                    <img className="hero-img" src={`${image.mobile[0]}`} alt="" srcSet={`${image.mobile[0]}, ${image.mobile[1]}`} />
                   
                </picture>
            })}

            <picture>

            </picture>
        </main>
    )
}

export default Main
