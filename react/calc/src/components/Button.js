function Button({ number, updateData }) {
    const handleClick = () => updateData(number);

    return (
        <button className="font" onClick={handleClick}>{number}</button>
    )
}

export default Button;
