import { useState } from "react";
import './App.css';
import GDriveLogo from './media/Google_Drive_logo.png';
import Header from './components/headers';
import SideBar from './components/sideBar';
import FilesView from "./components/fileView/FileView";
import SideIcons from "./components/sideIcons";
import { auth, provider } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function App() {
  const [user, setUser] = useState();

  // authentication
  const handleLogin = () => {
    if(!user){
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };



  return(    
    <div className="App">
      {
        user ? (
        <>
          <Header userPhoto={user.photoUrl}/>
        
          <div className="app__main">
            <SideBar />
            <FilesView />
            <SideIcons />
          </div>
        </>
        ) : (
          <div className="app__login">
            <img src={GDriveLogo} alt="Google Drive"/>
            <button onClick={handleLogin}>Login in to Google Drive</button>
          </div>
        )
      }
        

      {/* if not logged in */}
        {/* login */}
        {/* register */}
	  
    </div>
  );
}

export default App;
