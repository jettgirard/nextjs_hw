import * as React from "react";
import * as ReactDOM from "react-dom/client"

const reactContentRoot = document.getElementById("root");
const root = ReactDOM.createRoot(reactContentRoot);

function Greeting(props){
    return <h2>Hello, {props.name}!</h2>
}

const CountButton = () => {
    const [count, setCount] = React.useState(0); // react hook
    return (
        <>
            <button onClick={() => setCount(previous => previous + 1)}>
                +1
            </button>
            <div>{count}</div>
        </>
    );
};

const myJSXElement = ( // Emmet: ul>li*2
    <>
        <h1>JSX: The Process</h1>
        <Greeting name="Andrew"/>
        <Greeting name="Adam"/>
        <br/>
        <CountButton/>
        <ul>
            <li>JSX looks like HTML</li>
            <li>That gets transpiled into JavaScript</li>
            <li>That creates React elements (JS objects)</li>
            <li>That ReactDOM uses to create/update DOM nodes</li>
            <li>That the browser displays as HTML elements</li>
        </ul>
    </>
);

root.render(myJSXElement);