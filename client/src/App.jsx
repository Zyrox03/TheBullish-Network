import { Routes, Route, Navigate } from "react-router-dom";

import { LandingPage } from "./components/landingPage/LandingPage";
import { Contact } from "./components/contact/Contact";
import { Auth } from "./components/auth/Auth";
import { Admin } from "./components/admin/Admin";
import { useEffect, useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";



function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    // Add an observer to watch for changes in the user's login state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        document.tidioIdentify = {
          distinct_id: user.uid, // Unique visitor ID in your system
          email: user.email, // visitor email
          name: user.displayName, // Visitor name
        };
        
      } else {
        setUser(null);
      }
    });

    // Cleanup the observer when the component unmounts
    return () => unsubscribe();
  },[auth]);

  return (
    <div className="bg-main_bg min-h-screen flex flex-col items-center gap-12 relative overflow-hidden text-white">
      <Routes>
        {/* Your navigation can go here */}
        <Route path="/" exact element={<LandingPage user={user} />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route
          path="/admin/users"
          exact
          element={
            // Check if the user is logged in and the email is correct
            user &&
            user.email === import.meta.env.VITE_ADMIN_EMAIL &&
            user.emailVerified ? (
              <Admin />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="/account" exact element={<Auth />} />
        
        <Route path="/*" exact element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}


export default App;
