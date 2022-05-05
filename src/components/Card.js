import marker from "../images/marker.png"

export default function Card({title, location, googleMapsUrl, startDate, endDate, description, imageUrl}) {
    return (
            <div className="card">
                <img className="card--img" src={imageUrl} />
                <div className="card--content">
                    <div className="card--heading">
                        <img src={marker}/>
                        <p className="card-location">{location}</p>
                        <a className="card--link" target="_blank" href={googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h2 className="card--title" >{title}</h2>
                    <p className="card--date">{startDate} - {endDate}</p>
                    <p className="card--desc">{description}</p>
                </div>
            </div>
    )
}