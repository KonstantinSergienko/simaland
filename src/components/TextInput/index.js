import React from "react";

import "./style.scss";

class TextInput extends React.Component {
  onChange = (event) => {
    const { onChange } = this.props;

    event.preventDefault();
    onChange(event.target.value);
  };

  render() {
    const { value, placeholder } = this.props;

    return (
      <input
        className="text-input"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => this.onChange(e)}
      />
    );
  }
}

export default TextInput;
