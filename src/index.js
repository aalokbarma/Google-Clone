import React from 'react'
import './index.css'
import ReactDOM from 'react-dom';
import App from './App'
// import { RecentActors } from '@material-ui/icons';
import { StateProvider} from './StateProvider';
import reducer, {initialState} from './reducer';
// import * as servicWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState= {initialState} reducer = {reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
   , document.getElementById("root")
)