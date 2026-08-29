import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ color: "black" }}>
                UD CISC275 with React Hooks and TypeScript
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload. This page was created wonderfully by
                    yours truly! Ikechukwu Ogbonnia. With that give a warm,
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
                {/* <Button>
                onClick = {() => a}
            </Button> */}
                {/*Im going to make a button that changes the site color, FOR NO REASON!!!!!!*/}
                <div>
                    <ul>
                        <li>Bullet One</li>
                        <li>Bullet 2</li>
                        <li>Bullet Thr33</li>
                    </ul>
                </div>
                <div>
                    This is <span style={{ color: "red" }}> text</span>
                </div>
            </header>

            <h1 style={{ color: "pink" }}> This is the second header</h1>

            <Container>
                <Row>
                    <div
                        style={{
                            width: 250,
                            height: 350,
                            backgroundColor: "red",
                        }}
                    >
                        <Col>
                            Ikes First column. What else can I put in here?
                        </Col>
                    </div>

                    <div
                        style={{
                            width: 250,
                            height: 350,
                            backgroundColor: "red",
                        }}
                    >
                        <Col>
                            This is Pythwins Rectangle! There are many like it
                            but this one belong to my BOY! We can call it shiny
                        </Col>
                        This is Pythwins Rectangle! There are many like it but
                        this one belong to my BOY! We can call it shiny
                    </div>

                    <img
                        src="./assets/images/0131a0cd-af0d-466a-939a-9496978c24b2-Photoroom.png"
                        alt="Pytwin!!"
                    />

                    {/* <div className="rectangle2"> */}
                    {/* </div> */}
                </Row>
            </Container>
        </div>
    );
}

export default App;
