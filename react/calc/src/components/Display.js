import './../App.css';

function Display({ currentInfo }) {

    return (
        <div className="display-element">
            {currentInfo}
        </div>
    );
}

export default Display;
