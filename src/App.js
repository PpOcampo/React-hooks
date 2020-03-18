import React from "react";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import UserForm from "./components/UserForm";
import FetchOne from "./components/FetchOne";

function App() {
  return (
    <div className="App">
      <h1>React Hook -Samples</h1>
      <br />
      <br />
      DocTitle1
      <DocTitleOne />
      <br />
      DocTitle2
      <DocTitleTwo />
      <br />
      Counter1
      <CounterOne />
      <br />
      Counter2
      <CounterTwo />
      <br />
      Fetch1
      <FetchOne />
      <br />
      UserForm1
      <UserForm />
    </div>
  );
}

export default App;
