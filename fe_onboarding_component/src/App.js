import React, { useState } from "react";

import classes from "./App.module.css";

import Header from "./components/Header/Header";
import Onboarding from "./components/Onboarding/Onboarding";

function App() {
  const [beginOnboarding, setBeginOnboarding] = useState(false);

  const beginOnboardingHandler = () => {
    setBeginOnboarding(true)
  }

  return (
    <>
      <Header setBeginOnboarding={setBeginOnboarding} />
      <div className={classes.bodyCtnr}>
        {beginOnboarding ? <Onboarding /> :<button onClick={beginOnboardingHandler} className={classes.startBtn}>Begin Onboarding</button>}
      </div>
    </>
  );
}

export default App;
