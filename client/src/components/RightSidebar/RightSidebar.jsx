import React from "react";
// import "./RightSidebar.css";
import Widget from "./Widget";
import WidgetTag from "./WidgetTag";

function RightSidebar() {
  return (
    <aside className="right-sidebar">
      <Widget />
      <WidgetTag />
    </aside>
  );
}

export default RightSidebar;
