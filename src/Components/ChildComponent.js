const ChildComponent = (props) => {
    const { counter } = props;
    return (
        <div>
            <h3>Child component</h3>
            <h4>Props Counter: {counter}</h4>
        </div>
    )
}

export default ChildComponent;