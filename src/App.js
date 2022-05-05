import Header from "./components/Header"
import Card from "./components/Card"
import Data from "./data"

export default function App(){
    const cardHtml = Data.map(place => {
        return <Card 
        key= "place.title"
        {...place} />
    })
    return (
        <>
        <Header />
        <section className="container">
            {cardHtml}
        </section>
        </>
    )
}