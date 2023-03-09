

export function Card(props) {
    return (
        <>
        <img src={props.imgUrl} />
        <h4>{props.title}</h4>
        <h4>{props.price}</h4>
        <p>{props.description}</p>
        <h4>{props.callToAction}</h4>
        </>
    )
}