import React from "react";
import DialogUserName from "./DialogUserName/DialogUserName";
import { BrowserRouter, Route } from "react-router-dom";
import Andrey from "./Messages/Andrey";
import Dima from "./Messages/Dima";
import Anny from "./Messages/Anny";
import Roman from "./Messages/Roman";
import Nikita from "./Messages/Nikita";
import Max from "./Messages/Max";
import Mars from "./Messages/Mars";

const Dialogs = () => {
  return (
    <BrowserRouter>
      <div className="dialogs">
        <DialogUserName />
        <div className="message_wraper">
          <Route path="/dialogs/Andrey" component={Andrey} />
          <Route path="/dialogs/Dima" component={Dima} />
          <Route path="/dialogs/Anny" component={Anny} />
          <Route path="/dialogs/Roman" component={Roman} />
          <Route path="/dialogs/Nikita" component={Nikita} />
          <Route path="/dialogs/Max" component={Max} />
          <Route path="/dialogs/Mars" component={Mars} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Dialogs;
