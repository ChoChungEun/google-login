# 사전준비
- 구글 클라우드 플랫폼에서 새 프로젝트 생성
- 승인된 자바스크립트 원본 URI 주소 등록: http://localhost, http://localhost:5173
- 승인된 리디렉션 URI 등록: http://localhost:5173, http://localhost:5173
- 클라이언트 ID 생성: 443062116252-in5vlh0mtght5epv2smldemt1b3ko7aj.apps.googleusercontent.com

# FLOW
- 로그인 화면 -> 로그인 버튼 클릭 -> 구글 로그인 화면으로 이동 -> 로그인 성공 -> onSuccess 인자로 res 데이터 받아옴
 
```
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
```

# 추가 설명
- 실제 서버와 구현할때는 onSuccess 인자로 받아온 credential 을 서버로 넘겨주면 된다.
- 그러면 서버에서는 credential 로 로직 수행 후 access_token 을 넘겨준다.


