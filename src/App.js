import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom"
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import logo from './logo.svg'
import './App.css'
import { JKPPaper, JKPCard } from './atoms/JKPCard'


function App() {
  const data = [
    {
      id: 1,
      title: 'कोरोना वायरस',
      question: 'क्या आपको लगता है कि कोरोना वायरस बहुत जानलेवा बीमारी है?',
      options: [{ label: 'हाँ', percentage: '98%' }, { label: 'नहीं', percentage: '2%' }],
      peopleVoted: 21234
    },
    {
      id: 2,
      title: 'यूपी विधनसभा २०२२',
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
        <div className="">
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
            <JKPPaper elevation="2">
              <Typography variant="h6" style={{}}>अन्य पोल</Typography>
              <ul>
                <li>
                  <Link to="/1">कोरोना वायरस</Link>
                </li>
                <li>
                  <Link to="/2">यूपी विधनसभा २०२२</Link>
                </li>
              </ul>
            </JKPPaper>
          </div>
        </div>
      </Router>
    </div>
  )
}

function Child({ data }) {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams()
  const item = data.find(pollItem => pollItem.id == id)

  return (
    <div>
      <Typography variant="h4">{item.title}</Typography>
      <Typography variant="h5">{item.question}</Typography>
      <RadioGroup aria-label="gender" name="gender1">{
        item.options.map((option) => <FormControlLabel value="female" control={<Radio />} label={option.label} />)
      }
      </RadioGroup>

    </div>
  )
}

export default App
