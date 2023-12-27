import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

import { auth } from "./firebase";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home name={userName} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;





// // import firebase from './firebase';
// // import 'firebase/auth';
// // import 'firebase/firestore';


// // import React, { useEffect, useState } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // import Home from "./components/Home/Home";
// // import Login from "./components/Login/Login";
// // import Signup from "./components/Signup/Signup";

// // import { auth } from "./firebase";


// // import "./App.css";



// // class Apps extends React.Component {
// //   app = (e) => {
// //     const [ userName, setUserName] = useState("");
  
// //     useEffect(() => {
// //       auth.onAuthStateChanged((user) => {
// //         if (user) {
// //           setUserName(user.displayName);
// //         } else setUserName("");
// //       });
// //     }, [setUserName]);
// //   }
// //   // state = {
// //   //   userName: "", 
// //   // };
// //      handleChange = (e) =>{
// //       const {name, value } = e.target
// //       this.setState({
// //           [name]: value
// //         })
// //     };
// //     configureCaptcha = () =>{
// //       window.recaptchaVerifier = new auth.RecaptchaVerifier('sign-in-button', {
// //         'size': 'invisible',
// //         'callback': (response) => {
// //           // reCAPTCHA solved, allow signInWithPhoneNumber.
// //           this.onSignInSubmit();
// //           console.log("Recaptca varified")
// //         },
// //         defaultCountry: "IN"
// //       });
// //     };
// //     onSignInSubmit = (e) => {
// //       e.preventDefault()
// //       this.configureCaptcha()
// //       const phoneNumber = "+91" + this.state.mobile
// //       console.log(phoneNumber)
// //       const appVerifier = window.recaptchaVerifier;
// //       auth().signInWithPhoneNumber(phoneNumber, appVerifier)
// //           .then((confirmationResult) => {
// //             // SMS sent. Prompt user to type the code from the message, then sign the
// //             // user in with confirmationResult.confirm(code).
// //             window.confirmationResult = confirmationResult;
// //             console.log("OTP has been sent")
// //             // ...
// //           }).catch((error) => {
// //             // Error; SMS not sent
// //             // ...
// //             console.log("SMS not sent")
// //           });
// //     };
// //     onSubmitOTP = (e) =>{
// //       e.preventDefault()
// //       const code = this.state.otp
// //       console.log(code)
// //       window.confirmationResult.confirm(code).then((result) => {
// //         // User signed in successfully.
// //         const user = result.user;
// //         console.log(JSON.stringify(user))
// //         alert("User is verified")
// //         // ...
// //       }).catch((error) => {
// //         // User couldn't sign in (bad verification code?)
// //         // ...
// //       });
// //     };
    

// //    render(){ 
// //     const { userName } = this.state;
// //   return (
// //     <div className="App">
// //       <Router>
// //         <Routes>
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/signup" element={<Signup />} />
// //           <Route path="/" element={<Home name={userName} />} />
// //         </Routes>
// //       </Router>
      
// //         <h2>Login Form</h2>
// //         <form onSubmit={this.onSignInSubmit}>
// //           <div id="sign-in-button"></div>
// //           <input type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange}/>
// //           <button type="submit">Submit</button>
// //         </form>

// //         <h2>Enter OTP</h2>
// //         <form onSubmit={this.onSubmitOTP}>
// //           <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
// //           <button type="submit">Submit</button>
// //         </form>
// //       </div>
  
// //   );
// //   }
// // }

// // export default Apps;


// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { auth } from "./firebase";
// import { getAuth, signInWithPhoneNumber } from "firebase/auth"; // Remove 'RecaptchaVerifier' import
// import { RecaptchaVerifier } from "firebase/auth";

// import Home from "./components/Home/Home";
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";

// import "./App.css";

// function App() {
//   const [userName, setUserName] = useState("");

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUserName(user.displayName);
//       } else {
//         setUserName("");
//       }
//     });
//   }, []);

//   const [formData, setFormData] = useState({
//     mobile: "",
//     otp: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//  const configureCaptcha = () => {
//   try {
//     // Assuming you have already initialized Firebase
//     new RecaptchaVerifier('your-container-id', {
//       'size': 'invisible',
//       'callback': (response) => {
//         // reCAPTCHA solved, allow signInWithPhoneNumber.
//         onSignInSubmit();
//         console.log("Recaptcha verified");
//       },
//       'appVerificationDisabledForTesting': true,  // Set this to true for testing
//     });
//   } catch (error) {
//     console.error('Error configuring reCAPTCHA:', error);
//   }
// };


//   const onSignInSubmit = (e) => {
//     e.preventDefault();
//     configureCaptcha();
//     const phoneNumber = "+91" + formData.mobile;
//     console.log(phoneNumber);

//     // Use signInWithPhoneNumber as a member of the imported object
//     signInWithPhoneNumber(getAuth(), phoneNumber, window.recaptchaVerifier)
//       .then((confirmationResult) => {
//         window.confirmationResult = confirmationResult;
//         console.log("OTP has been sent");
//       })
//       .catch((error) => {
//         console.log("SMS not sent", error);
//       });
//   };

//   const onSubmitOTP = (e) => {
//     e.preventDefault();
//     const code = formData.otp;
//     console.log(code);
//     window.confirmationResult.confirm(code)
//       .then((result) => {
//         const user = result.user;
//         console.log(JSON.stringify(user));
//         alert("User is verified");
//       })
//       .catch((error) => {
//         console.log("User couldn't sign in (bad verification code?)", error);
//       });
//   };

//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/" element={<Home name={userName} />} />
//         </Routes>
//       </Router>

//       <div>
//         <h2>Login Form</h2>
//         <form onSubmit={onSignInSubmit}>
//           <div id="sign-in-button"></div>
//           <input type="number" name="mobile" placeholder="Mobile number" required onChange={handleChange} />
//           <button type="submit">Submit</button>
//         </form>

//         <h2>Enter OTP</h2>
//         <form onSubmit={onSubmitOTP}>
//           <input type="number" name="otp" placeholder="OTP Number" required onChange={handleChange} />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;
