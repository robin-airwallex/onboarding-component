import React, { useEffect, useContext, useRef, useState } from "react";

import OnboardingContext from "../../../context/onboardingContext";

import classes from "./OnboardingComponent.module.css";

import {
  generateCodeVerifier,
  generateCodeChallengeFromVerifier,
} from "../../../utils/code_challenge";

// import classes from "./OnboardingComponent.module.css";

import { axiosBackend } from "../../../utils/axios";
import MountedComponent from "./MountedComponent/MountedComponent";

const OnboardingComponent = () => {
  const [authCode, setAuthCode] = useState("");
  const onboardingCtx = useContext(OnboardingContext);

  const initialised = useRef(false);

  useEffect(() => {
    if (!initialised.current) {
      initialised.current = true;

      const callBackend = async () => {
        const codeVer = generateCodeVerifier();
        onboardingCtx.codeVerifier = codeVer;

        const challenge = await generateCodeChallengeFromVerifier(codeVer);
        const request = await axiosBackend.post("/create_account", {
          token: onboardingCtx.token,
          challenge: challenge,
        });

        setAuthCode(request.data);
      };

      callBackend();
    }
  }, []);

  return (
    <div className={classes.onboarding}>
      <h2>Mounted Component</h2>
      {authCode ? <MountedComponent authCode={authCode} /> : <p>Loading....</p>}
    </div>
  );
};

export default OnboardingComponent;
