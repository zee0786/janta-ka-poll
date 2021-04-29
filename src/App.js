import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom"
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Radio from '@material-ui/core/Radio'
import { blue } from '@material-ui/core/colors';
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import logo from './logo.svg'
import './App.css'
import { JKPCard } from './atoms/JKPCard'


function App() {
  const data = [
    {
      id: '1',
      title: 'कोरोना वायरस',
      question: 'क्या आपको लगता है कि कोरोना वायरस बहुत जानलेवा बीमारी है?',
      options: [{ label: 'हाँ', percentage: '74%' }, { label: 'नहीं', percentage: '26%' }],
      peopleVoted: 21234
    },
    {
      id: '2',
      title: 'यूपी विधानसभा २०२२',
      question: 'इस बार यूपी विधानसभा 2022 का चुनाव कौन जीतेगा?',
      options: [
        { label: 'बी जे पी', percentage: '35%' },
        { label: 'कांग्रेस', percentage: '18%' },
        { label: 'सपा', percentage: '37%' },
        { label: 'बसपा', percentage: '5%' },
        { label: 'अन्य', percentage: '5%' },
      ],
      peopleVoted: 41977
    }
  ]
  return (
    <div className="App container">
      <header className="App-header">
        <AppBar />
        <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="h3" style={{}}>
            जनता का पोल
        </Typography>
        </div>
      </header>
      <Router>
        <div className="row">
          <div className="col-md-9">
            <JKPCard raised>
              <Switch>
                <Route path="/" exact ><Typography variant="h4" style={{}}>आपका स्वागत है !</Typography></Route>
                <Route path="/:id" children={<Child data={data} />} />
              </Switch>
            </JKPCard>
          </div>
          <div className="col-md-3">
            <JKPCard raised>
              <Typography variant="h6" style={{}}>अन्य पोल</Typography>
              <ul>
                <li>
                  <Link to="/1">कोरोना वायरस</Link>
                </li>
                <li>
                  <Link to="/2">यूपी विधान सभा २०२२</Link>
                </li>
              </ul>
            </JKPCard>
          </div>
        </div>
      </Router>
    </div>
  )
}

const BlueRadio = withStyles({
  root: {
    color: blue[400],
    '&$checked': {
      color: blue[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

function Child({ data }) {

  const [selected, setSelected] = useState('');
  const handleChange = (event) => {
    setSelected(event.target.value);
  }
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams()
  const item = data.find(pollItem => pollItem.id === id)

  return (
    <div>
      <Typography variant="h4">{item.title}</Typography>
      <Typography variant="h5">{item.question}</Typography>
      <RadioGroup aria-label="gender" name={id} value={selected} onChange={handleChange}>{
        item.options.map((option) => <FormControlLabel value={option.label} control={<BlueRadio />} label={option.label} />)
      }
      </RadioGroup>

    </div>
  )
}

export default App
