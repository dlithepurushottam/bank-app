import Button from 'react-bootstrap/Button';
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import {Route,Routes} from "react-router-dom";
import PostUser from './components/postUser/postUser';
import UpdateUser from './components/updateUser/updateUser';
import NoMatch from './components/nomatch/noMatch';
function App() {
  return (
      <>
      <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
            <Route path="/user" element={<PostUser></PostUser>}></Route>
            <Route path="/user/:id" element={<UpdateUser></UpdateUser>}></Route>
            <Route path="*" element={<NoMatch></NoMatch>}></Route>
      </Routes>
      </>
  );
}

export default App;
