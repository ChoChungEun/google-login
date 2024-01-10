import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function App() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={(res: any) => {
          console.log("success", jwtDecode(res.credential));
        }}
        onError={() => {
          console.log("error");
        }}
      />
    </GoogleOAuthProvider>
  );
}

export default App;
