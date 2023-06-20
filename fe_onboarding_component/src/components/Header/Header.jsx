import React, { useContext } from "react";

import classes from "./Header.module.css";

import OnboardingContext from "../../context/onboardingContext";

const Header = (props) => {
  const onboardingCtx = useContext(OnboardingContext);

  onboardingCtx.expChecker(onboardingCtx.expiry);

  return (
    <div className={classes.header}>
      <h1>Scale Onboarding</h1>
    </div>
  );
};

export default Header;
