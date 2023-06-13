import Pages from "./pages/Pages";
import Catagory from "./compnents/Catagory";
import { BrowserRouter} from 'react-router-dom'
import Search from "./compnents/Search";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Search />
      <Catagory />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
