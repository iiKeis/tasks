import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { Button } from "react-bootstrap";
import headerImage from "./assets/images/0131a0cd-af0d-466a-939a-9496978c24b2-Photoroom.png";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ color: "black" }}>
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
                <img
                    src={headerImage}
                    sizes="100px"
                    alt="Header Banner Logo"
                    style={{ width: "200px", height: "  200px" }}
                />
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload. This page was created wonderfully by
                    yours truly! Ikechukwu Ogbonnia. With that, give a warm
                    welcome! Hello World
                </p>
                <Button
                    onClick={() => {
                        console.log("I have been logged");
                    }}
                >
                    Click Me
                </Button>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
                <div>
                    <ul>
                        <li>Bullet One</li>
                        <li>Bullet 2</li>
                        <li>Bullet Thr33</li>
                    </ul>
                </div>
                <div>
                    This box has a{" "}
                    <span style={{ backgroundColor: "red" }}>
                        red background!
                    </span>
                </div>
            </header>
            <hr />
            <Counter />
            <hr />
            <RevealAnswer />
            <hr />
            <StartAttempt />
            <hr />
            <TwoDice />
            <hr />
            <ChangeType />
            <hr />
            <CycleHoliday />
        </div>
    );
}

export default App;
