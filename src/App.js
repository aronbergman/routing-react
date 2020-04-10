import React, {Component} from 'react';

import Blog from './containers/Blog/Blog';
import BrowserRouter from "react-router-dom/modules/BrowserRouter";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Blog/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
