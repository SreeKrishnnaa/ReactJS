import Cars from "./components/Cars";
import HelloWorld from "./components/HelloWorld";
import Student from "./components/Student";
import Input from "./components/Input";
import Button from "./components/Button";
function App() {
  return (
  <div>
    <h1>
     HELLO WORLD!
    </h1>
    <Cars brand={"Hyundai"} name={"i20"}/>
    <Cars brand={"ford"} name={"aspire"}/>
    <Cars brand={"benz"} name={"gloster"}/>
    <Cars brand={"chevi"} name={"beat"}/>
  <Student name={"krishnnaa"} id={"151"}/>
  <Student name={"surya"} id={"154"}/>
  <Student name={"deepak"} id={"113"}/>
<Input/>
<Button name={"clicked"} message={"hai"}/>
<HelloWorld/>
  </div>
  );
}

export default App;
