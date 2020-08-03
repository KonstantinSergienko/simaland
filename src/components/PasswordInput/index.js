import React from "react";

import "./style.scss";

class PasswordInput extends React.Component {
  state = { isVisible: false };

  toggleVisibility = (isVisible) => {
    this.setState({ isVisible: !isVisible });
  };

  onChange = (event) => {
    const { onChange } = this.props;

    event.preventDefault();
    onChange(event.target.value);
  };

  render() {
    const { value, placeholder } = this.props;
    const { isVisible } = this.state;
    const inputType = isVisible ? "text" : "password";

    return (
      <div className="input-wrapper">
        <input
          className="text-input text-input_password"
          type={inputType}
          value={value}
          placeholder={placeholder}
          onChange={(e) => this.onChange(e)}
        />
        <button
          className="eye-button"
          onClick={() => this.toggleVisibility(isVisible)}
        ></button>
      </div>
    );
  }
}

export default PasswordInput;
