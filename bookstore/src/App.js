import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import BookInfo from "./Components/BookInfo";
import Author from "./Components/Author";

class App extends React.Component {

  render() {
    return (
      <div>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"/>
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=PT+Serif+Caption" />

  	<BrowserRouter>
        <div>
	    <Route path="/description" component={BookInfo} />
            <Route path="/author" component={Author} />
        </div>
	</BrowserRouter>
      </div>
    );
  }
};

export default App;
