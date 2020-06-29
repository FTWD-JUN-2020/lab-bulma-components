import React from 'react';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import CoolButton from './formfield/CoolButton'

const Signup = (props) => {
    return (
        <div>
            <Navbar />
            <FormField label="email" placeholder="v@gmail.com"/>
            <FormField  label="password" placeholder="******"/>
            <FormField  label="username" placeholder="coolboy55"/>
            <CoolButton  isSmall isDanger className="is-rounded my-class"  />
        </div>
    );
};

export default Signup;