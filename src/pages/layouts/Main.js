import { useContext } from "react"
import { DataContext } from "../../context/DataContext"

function Main() {
    const { data } = useContext(DataContext)
    console.log(data)
    return (
        <main className="main container grid">
            <div className="sub-content sub-content1">
                <div>
                    <h2 className="headings heading-h2 uppercase">Your day at the gallery</h2>
                    <p className="main-content-text">
                        Wander through our distinct collections and find new insights about
                        our artists. Dive into the details of their creative process.
                    </p>
                </div>
            </div>
            {data.map(image => {
                return <picture key={image.id} className={`${image.name}`}>
                    <source media="(min-width: 1080px)" srcSet={`${image.desktop[0]}, ${image.desktop[1]} 2x`} />
                    <source media="(min-width: 620px)" srcSet={`${image.tablet[0]}, ${image.tablet[1]} 2x`} />
                    <img className="hero-img" src={`${image.mobile[0]}`} alt={image.content} srcSet={`${image.mobile[1]} 2x`} />

                </picture>
            })}

            <div className="sub-content sub-content2 black-bg">
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
