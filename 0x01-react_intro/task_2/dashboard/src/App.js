import logo from './Holberton-Logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utilis' 

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
	<h1>School dashboard</h1>
	</div>
	<div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <form>
          <Label htmlFor="email">Email</Label>
          <input type="email" name="email"></input>
          <Label htmlFor="password">Password</Label>
          <input type="password" name="password"></input>
          <button>OK</button>
          </form> 

	</div>
	<div className="App-footer">
	<p>Copyright {getFullYear()} - {getFooterCopy()}</p>
	</div>
    </div>
  );
}

export default App;
