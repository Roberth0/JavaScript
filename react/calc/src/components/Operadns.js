function Operands({ operation, stl }) {
    return (
        <button className={(stl ? stl : "") + " font"}>{operation}</button>
    )
}

export default Operands;
