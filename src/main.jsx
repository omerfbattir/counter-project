import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import configureStore from './redux/reduces/configureStore'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={configureStore()}>
    <App />
    </Provider>,
  
)
