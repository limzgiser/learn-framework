import "./App.scss";
import Button from "./components/Buttom";
import Welcome from "./components/wellcom";

import Clock from "./components/Clock";
import Toggle from "./components/Toggle";
import LoginControl from "./components/LoginControl";
import Mailbox from "./components/Mailbox";
import NumberList from "./components/NumberList";
function App() {
  let unreadMessages = [
    "React",
    "Re: React",
    "Re:Re: React",
    "Re:Re: ReactRe:Re: React",
  ];
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <div>
        <form>
          <input
            type="input"
            defaultValue={process.env.REACT_APP_NOT_SECRET_CODE}
          />
          当前环境：
          <input type="input" defaultValue={process.env.NODE_ENV} />
        </form>
        <div>
          <Button class="Button_error_ax7yz">Error Button</Button>
          <Welcome name="zhans"></Welcome>
          <Clock></Clock>
          <Toggle></Toggle>
          <LoginControl></LoginControl>
          <Mailbox unreadMessages={unreadMessages}></Mailbox>
          <NumberList numbers={unreadMessages}></NumberList>
        </div>
      </div>
    </div>
  );
}

export default App;
