import './App.css'
import Main from "./components/Main/Main.jsx";
import {ContextProvider} from "./components/Context/LocationContext.jsx";

function App() {
  return (
      <ContextProvider>
        <Main />
      </ContextProvider>
  )
}

export default App
