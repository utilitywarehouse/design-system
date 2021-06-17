import React from "react";
import base from "paths.macro";
import { Story, Meta } from "@storybook/react";

import { TextField } from "./TextField";
import type { TextFieldProps } from "./TextField";
import { Background, Box } from "../../src";

export default {
  title: `${base}TextField`,
  component: TextField,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    error: {
      control: {
        type: "boolean",
      },
    },
    success: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    disabled: false,
    error: false,
    success: false,
  },
} as Meta;

export const Template: Story<TextFieldProps> = (args) => (
  <Box
    sx={{
      display: "grid",
      placeItems: "center",
      padding: 8,
    }}
  >
    <Background backgroundColor="level5">
      <TextField {...args} sx={{ width: 300 }} />
    </Background>
  </Box>
);

Template.storyName = "TextField";
