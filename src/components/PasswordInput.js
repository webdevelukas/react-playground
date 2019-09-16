import React from "react";

/**
 * Exercise
 * Change the background-color of the input based
 * on the length of the password
 * At a length of 0-4 it should be a red to orange
 * At a length of around 10 it should become green
 * It should never become blue, so stop at green
 */

function PasswordInput() {
  const [password, setPassword] = React.useState("");
  const inputStyle = {
    background: `hsl(${changeBackgroundColor()},100%, 50%)`
  };

  function changeBackgroundColor() {
    if (password.length < 12) {
      return password.length * 10;
    }
  }

  return (
    <div>
      <input
        className="password-input"
        type="password"
        style={inputStyle}
        value={password}
        onChange={event => {
          setPassword(event.target.value);
          changeBackgroundColor();
        }}
      />
      {password.length}
    </div>
  );
}

export default PasswordInput;

// How to change the background color?
// How to access the input value (password)?
// How should a function looks like which returns the color based on password length?
// Why does it make sense to use CMYK?
// ...
