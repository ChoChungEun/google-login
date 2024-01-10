import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function App() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const success = (res: any) => {
    console.log("success", jwtDecode(res.credential));
  };

  const error = () => {
    console.log("error");
  };
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin onSuccess={success} onError={error} />
    </GoogleOAuthProvider>
  );
}

export default App;
