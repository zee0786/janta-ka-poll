import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Typography from '@material-ui/core/Typography'
import logo from './logo.svg';
import './App.css';


function App() {
  const data = [
    {
      id: 1,
      question: 'क्या आपको लगता है कि कोरोना वायरस स्वास्थ्य के लिए बहुत खतरनाक है?',
      options: [{ label: 'yes', percentage: '98%' }, { label: 'no', percentage: '2%' }],
      peopleVoted: 2123455
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h3" style={{}}>
          जनता का पोल
        </Typography>
      </header>
      <Router>
        <div className="row">
          <div className="col-md-9">
            <Switch>
              <Route path="/" exact component={() => <Typography variant="h4" style={{}}>आपका स्वागत है !</Typography>} />
              <Route path="/:id" children={<Child data={data} />} />
            </Switch>
          </div>
          <div className="col-md-3">
            <Typography variant="h6" style={{}}>अन्य पोल</Typography>
            <ul>
              <li>
                <Link to="/1">vidhansabha 2020</Link>
              </li>
              <li>
                <Link to="/2">corona virus</Link>
              </li>
            </ul>
          </div>
        </div>
      </Router>
    </div>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default App;
