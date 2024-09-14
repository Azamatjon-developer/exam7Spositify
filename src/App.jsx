import './App.css'
import Login from './pages/Login'
import CustomRoutes from './Routers'

function App() {
  const code = new URLSearchParams(location.search).get('code')

  return code ? <CustomRoutes code={code} /> : <Login />
}

export default App
