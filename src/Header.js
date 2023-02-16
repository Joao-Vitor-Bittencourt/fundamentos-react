import React, {useContext} from "react";
import PropTypes from "prop-types";
import Button from "./Button";

import { ThemeContext } from "./ThemeContext";

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: '#ccc',
        fontFamily: 'sans-serif',
      }}
    >
      <h1>{props.title}</h1>
      <Button onClick={onToggleTheme}>
        Mudar Tema
      </Button>
      {props.children}
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

Header.defaultProps = {
  title: 'Jstack Blog',
}