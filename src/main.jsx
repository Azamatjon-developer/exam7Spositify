import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Redux/Store/index.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <Provider store={store}>
    <App />

  </Provider>
  </BrowserRouter>,
)
