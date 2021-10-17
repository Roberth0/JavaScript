import { useState } from 'react';
import Display from './components/Display';
import Button from './components/Button';
import Operands from './components/Operadns';
import "./App.css";

function App() {
    const [data, setData] = useState();

    const updateData = num => {
        console.log(num);
        setData(data + num.toString());
    }

    return (
        <div className="container-calc">
            <Display currentInfo={data} />
            <Button number={1} updateData={updateData} />
            <Button number={2} updateData={updateData} />
            <Button number={3} updateData={updateData} />
            <Operands operation="+" />

            <Button number={4} updateData={updateData} />
            <Button number={5} updateData={updateData} />
            <Button number={6} updateData={updateData} />
            <Operands operation="-" />

            <Button number={7} updateData={updateData} />
            <Button number={8} updateData={updateData} />
            <Button number={9} updateData={updateData} />
            <Operands operation="x" />

            <Operands operation="/" />
            <Button number={0} updateData={updateData} />
            <Operands operation="C" />
            <Operands stl="result" operation="=" />
        </div>
    );
}

export default App;
