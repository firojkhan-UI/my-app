
const Child = (props) => {
    const {name,city} = props.items;
    return (
        <>
            <p>{name}</p>
            <p>{city}</p>
        </>
    )
}
export default Child;