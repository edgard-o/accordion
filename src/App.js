import React from "react";
import Questions from "./component/questions";
import data from './data';

const App = () => {

    return (
        <main>
            <div className="container">
                <h2>Accordion project App</h2>
                <Questions questions={data} />
            </div>
        </main>
    )
};

export default App;