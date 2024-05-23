import { useState } from "react";
import './App.css';
import Header from './components/headers';

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
        {/* header */}
        <Header userPhoto={user.photoUrl}/>
        {/* sidebar */}

      {/* if not logged in */}
        {/* login */}
        {/* register */}
	  
    </div>
  );
}

export default App;
