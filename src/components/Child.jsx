// props is ALWAYS an object
// this props object is going to contain every prop that you passed to the component

const Child = (props) => {
    console.log(props)
    return (
        <div>
            <h3>{props.title}</h3>
            <p className={props.titleClass}>Let's create a list!</p>
            <ul>
                <li className="d-none">one</li>
                <li>two</li>
                <li>three</li>
                <li>{props.counter}</li>
            </ul>
        </div>
    )
}

export default Child