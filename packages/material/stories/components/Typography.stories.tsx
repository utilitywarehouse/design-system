import React from "react";
import base from "paths.macro";
import { Meta, Story } from "@storybook/react";
import { Typography, TypographyProps } from "./Typography";
import { Background, BackgroundProps, Box, BoxProps } from "../../src";
import HorizontalDisplayContainer from "../utils/HorizontalDisplayContainer";

export default {
  title: `${base}Typography`,
  component: Typography,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    variant: {
      control: {
        disable: true,
      },
    },
    component: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    children: "The quick brown fox jumped over the lazy dog.",
  },
} as Meta;

const bindTemplate = (
  params: Partial<TypographyProps>
): Story<TypographyProps> => {
  const backgroundProps: Partial<BackgroundProps> = {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 3,
    paddingRight: 3,
    display: "flex",
    flexDirection: "column",
  };

  const boxProps: BoxProps = {
    display: "flex",
    justifyContent: "center",
  };

  const Template: Story<TypographyProps> = (args) => (
    <HorizontalDisplayContainer>
      <Background backgroundColor="level0" {...backgroundProps}>
        <Box {...boxProps}>
          <Typography {...args} {...params} />
        </Box>
      </Background>
      <Background backgroundColor="level1" {...backgroundProps}>
        <Box {...boxProps}>
          <Typography {...args} {...params} />
        </Box>
      </Background>
      <Background backgroundColor="level2" {...backgroundProps}>
        <Box {...boxProps}>
          <Typography {...args} {...params} />
        </Box>
      </Background>
      <Background backgroundColor="level3" {...backgroundProps}>
        <Box {...boxProps}>
          <Typography {...args} {...params} />
        </Box>
      </Background>
      <Background backgroundColor="level4" {...backgroundProps}>
        <Box {...boxProps}>
          <Typography {...args} {...params} />
        </Box>
      </Background>
    </HorizontalDisplayContainer>
  );

  return Template;
};

export const H1 = bindTemplate({ variant: "h1" });
H1.storyName = "h1";

export const H2 = bindTemplate({ variant: "h2" });
H2.storyName = "h2";

export const H3 = bindTemplate({ variant: "h3" });
H3.storyName = "h3";

export const H4 = bindTemplate({ variant: "h4" });
H4.storyName = "h4";

export const H5 = bindTemplate({ variant: "h5" });
H5.storyName = "h5";

export const Headline = bindTemplate({ variant: "headline" });
Headline.storyName = "headline";

export const Subheading = bindTemplate({ variant: "subheading" });
Subheading.storyName = "subheading";

export const Body = bindTemplate({ variant: "default" });
Body.storyName = "body";

export const SmallBody = bindTemplate({ variant: "small" });
SmallBody.storyName = "small body";

export const Label = bindTemplate({ variant: "label" });
Label.storyName = "label";

export const Caption = bindTemplate({ variant: "caption" });
Caption.storyName = "caption";

export const Footnote = bindTemplate({ variant: "footnote" });
Footnote.storyName = "footnote";
