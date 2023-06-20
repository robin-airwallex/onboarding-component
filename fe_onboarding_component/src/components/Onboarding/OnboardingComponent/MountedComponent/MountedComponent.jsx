import React, { useEffect, useRef, useContext } from "react";

import classes from "./MountedComponent.module.css";

import { init, createElement } from "@airwallex/platform-onboarding-sdk";

import OnboardingContext from "../../../../context/onboardingContext";

const MountedComponent = ({ authCode }) => {
  const initialised = useRef(false);

  const onboardingCtx = useContext(OnboardingContext);

  useEffect(() => {
    if (!initialised.current) {
      initialised.current = true;

      const options = {
        langKey: "en",
        env: "demo",
        authCode: authCode,
        clientId: "9fCj8koxSFq8UNKzI4pD7g",
        codeVerifier: onboardingCtx.codeVerifier,
      };

      const renderComponent = async () => {
        console.log("INITIALISING!!");
        await init(options);

        console.log("CREATING ELEMENT!!");

        const element = createElement("kyc", {
          hideHeader: true,
          hideNav: true,
        });

        const containerElement = document.getElementById("mounted_component");
        element.mount(containerElement);
        console.log("MOUNTED!!");
      };

      renderComponent();
    }
  }, []);

  return (
    <div id="mounted_component" className={classes.mounted_component}></div>
  );
};

export default MountedComponent;
