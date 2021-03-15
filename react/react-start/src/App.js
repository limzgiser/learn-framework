import "./App.scss";
import Button from "./components/Buttom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button class="Button_error_ax7yz">Error Button</Button>
        <form>
          <input type="input" value={process.env.REACT_APP_NOT_SECRET_CODE} />   
          当前环境：<input type="input" value={process.env.NODE_ENV } />
        </form>
      </header>
    </div>
  );
}

export default App;
