import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
function Home() {
  const [user, loading, error] = useAuthState(auth); // by passing this we will get logged in user;s details and authentication things
  const navigate = useNavigate()

  const signOutClick = ()=>{
    auth.signOut();
    navigate('/');
}
  
  return (
    <>
    {/* this got from above code */}
      <div>Welcome {user?.email}</div>
      <button onClick={()=> signOutClick}> SignOut </button>
      {/* signOut is auth i.e fire base code which logs out */}
    </>
  );
}

export default Home;
