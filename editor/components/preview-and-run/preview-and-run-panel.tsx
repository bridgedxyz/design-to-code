import { Tab } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { AppRunner } from "../app-runner";
import { ScenePreview } from "../scene-preview";

type Mode = "preview" | "run";

interface SceneRunnerConfig {
  fileid: string;
  sceneid: string;
  sceneSize: {
    w: number;
    h: number;
  };
  src: string | (() => string);
  platform: "web" | "flutter";
}

export function PreviewAndRunPanel(props: { config: SceneRunnerConfig }) {
  const [mode, setmode] = useState<Mode>("preview");
  const sceneConfig = props.config;

  useEffect(() => {
    // fetch scene config
    // setSceneConfig();
  }, []);

  const loadSource = () => {
    if (typeof props.config.src == "string") {
      return props.config.src;
    } else if (typeof props.config.src == "function") {
      return props.config.src();
    } else {
      return "// loading...";
    }
  };

  const TargetModePanel = () => {
    switch (mode) {
      case "preview":
        return (
          <ScenePreview
            config={{
              fileid: sceneConfig?.fileid,
              sceneid: sceneConfig?.sceneid,
              origin: "figma",
              displayAs: "embed",
            }}
          />
        );
      case "run":
        return (
          <AppRunner
            sceneSize={sceneConfig?.sceneSize}
            src={loadSource()}
            platform={sceneConfig?.platform}
          />
        );
    }
  };

  const ModeSelectionTab = () => {
    const clicked = (mode: Mode) => {
      return () => {
        setmode(mode);
      };
    };
    return (
      <>
        <Tab onClick={clicked("preview")}>Preview</Tab>
        <Tab onClick={clicked("run")}>Run</Tab>
      </>
    );
  };

  return (
    <>
      <ModeSelectionTab />
      <TargetModePanel />
    </>
  );
}