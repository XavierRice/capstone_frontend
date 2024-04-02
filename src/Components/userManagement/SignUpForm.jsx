// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import InputField from "./InputField"
// import ErrorMessage from "./ErrorMessage";

// const SignUpForm = ({ onSubmit }) => {
//   const [userData, setUserData] = useState({
//     firstName: "",
//     lastName: "",
//     userName: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { firstName, lastName, userName, email, password } = userData;

//     if (!firstName || !lastName || !userName || !email || !password) {
//       setError("All fields are required");
//       return;
//     }
//     setError("")
//     onSubmit(userData);
//   };

//   return (
//     <Form onSubmit={handleSubmit} className="">
//       <InputField
//         label="First Name"
//         name="firstName"
//         type="text"
//         placeholder="Enter first name"
//         value={userData.firstName}
//         onChange={handleInputChange}
//       />
//       <InputField
//         label="Last Name"
//         name="lastName"
//         type="text"
//         placeholder="Enter last name"
//         value={userData.lastName}
//         onChange={handleInputChange}
//       />
//       <InputField
//         label="User Name"
//         type="text"
//         name="userName"
//         placeholder="Enter user name"
//         value={userData.userName}
//         onChange={handleInputChange}
//       />
//       <InputField
//         label="Email"
//         type="email"
//         name="email"
//         placeholder="Enter email"
//         value={userData.email}
//         onChange={handleInputChange}
//       />
//       <InputField
//         label="Password"
//         type="password"
//         name="password"
//         placeholder="Enter password"
//         value={userData.password}
//         onChange={handleInputChange}
//         />
//       {error && <ErrorMessage message={error} />}
//       <div className="m-2 d-flex justify-content-center">
//         <Button variant="primary" type="submit">
//           Sign Up
//         </Button>
//       </div>
//     </Form>
//   );
// };

// export default SignUpForm;

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import InputField from "./InputField";
import ErrorMessage from "./ErrorMessage";

const SignUpForm = ({ onSubmit }) => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    user_name: "",
    email: "",
    password_hash: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { first_name, last_name, user_name, email, password_hash } = userData;

    if (!first_name || !last_name || !user_name || !email || !password_hash) {
      setError("All fields are required");
      return;
    }
    setError("");
    onSubmit(userData);
  };

  return (
    <Form onSubmit={handleSubmit} className="">
      <InputField
        label="First Name"
        name="first_name" 
        placeholder="Enter first name"
        value={userData.first_name}
        onChange={handleInputChange}
      />
      <InputField
        label="Last Name"
        name="last_name" 
        type="text"
        placeholder="Enter last name"
        value={userData.last_name}
        onChange={handleInputChange}
      />
      <InputField
        label="User Name"
        name="user_name" 
        type="text"
        placeholder="Enter user name"
        value={userData.user_name}
        onChange={handleInputChange}
      />
      <InputField
        label="Email"
        name="email" 
        type="email"
        placeholder="Enter email"
        value={userData.email}
        onChange={handleInputChange}
      />
      <InputField
        label="Password"
        name="password_hash" 
        type="password"
        placeholder="Enter password"
        value={userData.password_hash}
        onChange={handleInputChange}
      />

      {error && <ErrorMessage message={error} />}
      <div className="m-2 d-flex justify-content-center">
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </div>
    </Form>
  );
};

export default SignUpForm;
