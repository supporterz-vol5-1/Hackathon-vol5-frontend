import React from "react";

class Navibar extends React.Component {
  render() {
    return <RenderBarElement />;
  }
}

function RenderBarElement() {
  return (
    <div>
      <BarElement name="register" />
      <BarElement name="graph" />
    </div>
  );
}

function BarElement(props) {
  return <div>{props.name}</div>;
}

export default Navibar;
