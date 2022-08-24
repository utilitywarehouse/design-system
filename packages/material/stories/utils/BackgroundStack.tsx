import * as React from "react";
import { BackgroundColor, Background, Box } from "../../src";

const BackgroundStack: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const backgroundLevels = [
    "white",
    "whiteOwl",
    "lightTint",
    "purple",
    "midnight",
  ].map((level) => level as BackgroundColor);
  return (
    <Box>
      {backgroundLevels.map((level) => (
        <Background
          key={level}
          backgroundColor={level}
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 4,
          }}
        >
          {children}
        </Background>
      ))}
    </Box>
  );
};

export default BackgroundStack;
