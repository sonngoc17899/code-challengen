import {Route} from 'react-router-dom'
import {SignInSide} from './component/Auth/Login'
import {WorkFlow} from './component/WorkFlow'
function App() {
  return (
    <div>
      <Route exact path="/" component={SignInSide}/>
      <Route path="/workflow" component={WorkFlow}/>
      
    </div>
  );
}

export default App;
