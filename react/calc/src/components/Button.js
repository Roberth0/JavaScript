function Button({ number }) {
    const handleClick = () => console.log(number);

    return (
        <button className="font" onClick={handleClick}>{number}</button>
    )
}

export default Button;
