import FilledInput, { FilledInputProps } from "@material-ui/core/FilledInput";
import { GetComponentThemeConfiguration } from "../lib/theme.types";
import { colors, fonts } from "@utilitywarehouse/customer-ui-design-tokens";
import { styled } from "../material/core";

export interface TextFieldProps
  extends Omit<FilledInputProps, "hiddenLabel" | "sx"> {
  success?: boolean;
}

const TextField = styled(FilledInput, {
  shouldForwardProp: (prop) => prop !== "success",
})<TextFieldProps>(({ success, error }) => ({
  ...(success && !error
    ? {
        borderColor: colors.jewel,
        transition: "border 120ms ease-out",
        ":before": {
          borderColor: colors.jewel,
        },
        ":hover": {
          "&:not(.Mui-disabled)": {
            "&:before": {
              borderColor: colors.jewel,
            },
          },
        },
        "&.Mui-focused": {
          borderColor: colors.jewel,
        },
        "&:after": {
          borderColor: colors.jewel,
        },
      }
    : {}),
}));

export default TextField;

export const getComponentThemeConfiguration: GetComponentThemeConfiguration = () => {
  return {
    MuiFilledInput: {
      defaultProps: {
        hiddenLabel: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: colors.white,
          borderRadius: 0,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          borderStyle: "solid",
          borderWidth: 2,
          borderBottom: 0,
          borderColor: colors.lightTint,
          transition: "border 120ms ease-out",
          ":hover": {
            backgroundColor: colors.white,
            "&:not(.Mui-disabled)": {
              "&:before": {
                borderBottom: `2px solid ${colors.blueRibbon}`,
              },
            },
          },
          "&:before": {
            borderBottom: "2px solid ",
            borderColor: colors.purple,
            transition: "border 120ms ease-out",
          },
          "&:after": {
            borderBottom: "2px solid ",
            borderColor: colors.blueRibbon,
            transition: "border 120ms ease-out",
          },
          "&.Mui-focused": {
            backgroundColor: colors.white,
            borderColor: colors.blueRibbon,
          },
          "&.Mui-disabled": {
            "&:before": {
              borderColor: colors.whiteOwl,
            },
          },
          "&.Mui-error": {
            "&.Mui-focused": {
              borderColor: colors.maroonFlush,
            },
            "&:after": {
              borderColor: colors.maroonFlush,
            },
          },
        },
        input: {
          height: 27, // + padding = 60px
          paddingTop: 16,
          paddingRight: 12,
          paddingBottom: 17,
          paddingLeft: 12,
          fontFamily: fonts.secondary,
        },
      },
    },
  };
};
