import { Provider } from "react-redux";
import store from "./store/index";
import Login from './pages/User/Login'
function App() {
  return (
    <Provider store={store}>
      store is work 
      <Login/>
    </Provider>
  )
}

export default App;