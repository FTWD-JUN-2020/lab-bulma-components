import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import Signup from './Signup'
import Message from './Message'
const App = () => {
  return (
    <div>
      <Navbar />;
      <Message isInfo="is-info" title='Hello World'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
      <Signup />
    </div>
  );
};

export default App;
