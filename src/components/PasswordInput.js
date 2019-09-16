import React from "react";

/**
 * Exercise
 * Change the background-color of the input based
 * on the length of the password
 * At a length of 0-4 it should be a red to orange
 * At a length of around 10 it should become green
 * It should never become blue, so stop at green
 */

function getInputStyle(length) {
  const hue = Math.min(length * 10, 120);
  return {
    backgroundColor: `hsl(${hue}, 100%, 50%)`
  };
}

function PasswordInput() {
  const [password, setPassword] = React.useState("");
  const passwordLength = password.length;

  // Meine Loesung:

  // const inputStyle = {
  //   background: `hsl(${changeHue()},100%, 50%)`
  // };

  // function changeHue() {
  //   if (password.length < 12) {
  //     return password.length * 10;
  //   }
  // }

  return (
    <div>
      <input
        className="password-input"
        type="password"
        style={getInputStyle(passwordLength)}
        value={password}
        onChange={event => {
          setPassword(event.target.value);
        }}
      />
      {passwordLength}
    </div>
  );
}

export default PasswordInput;

// How to change the background color?
// How to access the input value (password)?
// How should a function looks like which returns the color based on password length?
// Why does it make sense to use CMYK?
// ...
