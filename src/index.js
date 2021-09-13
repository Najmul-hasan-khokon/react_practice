import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import reportwebVitals from "./reportWebVitals";


    ReactDom.render(
        <React.StrictMode >
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    )



reportwebVitals();

  

// reactDom.render(<Myfunc/>, document.getElementById('root'))