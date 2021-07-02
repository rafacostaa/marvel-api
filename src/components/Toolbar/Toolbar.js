import React from "react";
import "../main.scss";

const Toolbar = () => {
  return (
    <div className="container-toolbar">
      <img src="assets/objective-logo.svg" alt="logo-objective" />
      <div className="toolbar-user">
        <div className="user">
          <span>Rafael Costa</span>
          <span>Teste de Front-end</span>
        </div>
        <div className="avatar-initial">RC</div>
      </div>
    </div>
  );
};

export default Toolbar;
