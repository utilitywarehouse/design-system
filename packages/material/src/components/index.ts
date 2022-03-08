import { Theme as MuiTheme } from "@mui/material/styles";
import { Theme as CustomerUITheme } from "@utilitywarehouse/customer-ui-theme";
import { getComponentThemeConfiguration as getButtonComponentThemeConfiguration } from "./Button";
import { getComponentThemeConfiguration as getLinkComponentThemeConfiguration } from "./Link";
import { getComponentThemeConfiguration as getTextLinkComponentThemeConfiguration } from "./TextLink";
import { getComponentThemeConfiguration as getMenuComponentThemeConfiguration } from "./Menu";
import { getComponentThemeConfiguration as getMenuItemComponentThemeConfiguration } from "./MenuItem";
import { getComponentThemeConfiguration as getTextFieldComponentThemeConfiguration } from "./TextField";
import { getComponentThemeConfiguration as getTypographyComponentThemeConfiguration } from "./Typography";
import { GetComponentThemeConfiguration } from "../lib/theme.types";

export const getComponentThemeConfiguration: GetComponentThemeConfiguration = (
  theme: CustomerUITheme,
  muiTheme: MuiTheme
) => ({
  ...getButtonComponentThemeConfiguration(theme, muiTheme),
  ...getLinkComponentThemeConfiguration(theme, muiTheme),
  ...getTextLinkComponentThemeConfiguration(theme, muiTheme),
  ...getMenuComponentThemeConfiguration(theme, muiTheme),
  ...getMenuItemComponentThemeConfiguration(theme, muiTheme),
  ...getTextFieldComponentThemeConfiguration(theme, muiTheme),
  ...getTypographyComponentThemeConfiguration(theme, muiTheme),
  ...getTextFieldComponentThemeConfiguration(theme, muiTheme),
});
