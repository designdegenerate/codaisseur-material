import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { useEffect } from 'react';
import { bootstrapLogin} from './store/auth/actions';
import { logout } from './store/auth/slice';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn } from './store/auth/selectors';

function App() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const loginStatus = useSelector(isLoggedIn);

  useEffect(() => {
    dispatch(bootstrapLogin());
  }, [])

  const logoutUser = () => {
    console.log("awfsg");
    dispatch(logout());
    // navigate("/");
  }

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        {loginStatus ? 
        <div>
          <Link to="/profile">profile</Link>
          <button onClick={() => logoutUser()}>logout</button>
        </div>
        :
        <Link to="/login">login</Link>
        }
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/post/:id" element={<PostPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
    </div>
  );
}

export default App;
