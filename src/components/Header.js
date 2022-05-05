import globe from "../images/globe.svg"

export default function Header(){
    return (
        <div className="heading">
            <img src={globe} />
            <span>my travel journal</span>
        </div>
    )
}