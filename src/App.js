import { useEffect, useState } from "react";
import "./App.css";
import InfoList from "./conponents/InfoAll/InfoList";
import InputNickName from "./conponents/inpunNickName/InputNickName";
import RegistrationForm from "./conponents/RegistrationForm/RegistrationForm";
import VideoDownloader from "./conponents/DownloadButton.js/VideoDownloader";
import LoginForm from "./conponents/LoginForm/LoginForm";
function App() {
  const [info, setInfo] = useState([]);
  const [infoUser, setinfoUser] = useState([]);
  const [nickName, setNickName] = useState("");

  const nick = Object.values(nickName)[0];
  console.log(Object.values(nickName)[0]);

  const encodedName = encodeURIComponent(nick);
  console.log(encodedName);

  // fetch(`http://localhost:3000/api/allInfoUser?name=${encodedName}`)
  //   .then((response) => response.json())
  //   .then((data) => setinfoUser(data.result))
  //   .catch((error) => console.log(error));

  useEffect(() => {
    fetch("http://localhost:3000/api/allInfoUser")
      .then((response) => response.json())
      .then((data) => setInfo(data.result))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div>
        <InputNickName setNickName={setNickName} />
      </div>
      <div className="infoAllUs">
        <InfoList inf={encodedName} />
      </div>
      <div>
        <RegistrationForm />
      </div>
      <div>
        <LoginForm />
      </div>
      <div>
        <VideoDownloader />
      </div>
    </>
  );
}

export default App;
