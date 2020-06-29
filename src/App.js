import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";

const App = () => {
  return (
    <div>
      <Navbar />;
      <FormField juan="the best" className="dssad" />
      {/* <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      /> */}
    </div>
  );
};

export default App;
