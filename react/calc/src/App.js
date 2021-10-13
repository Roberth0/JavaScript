import Display from './components/Display';
import Button from './components/Button';
import Operands from './components/Operadns';
import "./App.css";

function App() {
    return (
        <div className="container-calc">
            <Display />
            <Button number={0} />
            <Button number={1} />
            <Button number={2} />
            <Operands operation="+" />

            <Button number={3} />
            <Button number={4} />
            <Button number={5} />
            <Operands operation="-" />

            <Button number={6} />
            <Button number={7} />
            <Button number={8} />
            <Operands operation="x" />

            <Operands operation="/" />
            <Button number={0} />
            <Operands operation="C" />
            <Operands stl="result" operation="=" />
        </div>
    );
}

export default App;
