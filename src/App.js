import { useState } from "react";
import './App.css';
import Header from './components/headers';
import SideBar from './components/sideBar';

function App() {
  const [user, setUser] = useState({
    displayName: "My Name",
    email: "your@email.com",
    emailVerified: true,
    phoneNumber: true,
    photoUrl: "photo url"
  });

  // authentication
  return(    
    <div className="App">
      {/* if logged in */}
        <Header userPhoto={user.photoUrl}/>
        <SideBar />

      {/* if not logged in */}
        {/* login */}
        {/* register */}
	  
    </div>
  );
}

export default App;
