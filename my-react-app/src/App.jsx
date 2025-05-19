import Card from "./Components/Card/Card"
import Button from "./Components/Button/Button";
import Student from "./Components/Student/Student";
import UserGreeting from "./Components/UserGreeting/UserGreeting";

function App() {

  return (
    <>
      <Card />
      <UserGreeting isLoggedIn={true} username="zeUserName"/>
      <UserGreeting isLoggedIn={false} username="NotLoggedIn"/>
      <Student name="DingleFart" age={41} isStudent={true}/>
      <Student name="ElderBerry" age={25} isStudent={false}/>
      <Student />
      <Button />
    </>
  );
}

export default App
