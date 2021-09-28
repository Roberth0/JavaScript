import React from 'react'

export default function Contact() {
    const handleClick = () => {
        alert(`Formulario de contacto no creado`);
    }

    return (
        <div className="contact">
            <p>Fundamentos de <span>programación</span>,</p>
            <p>desarrollo de algoritmos y</p>
            <p>mucho mas! <i className="fas fa-file-code"></i></p>

            <button onClick={handleClick} className="contact-btn">Contactanos</button>
        </div>
    )
}
