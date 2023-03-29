import '@utilitywarehouse/fontsource';
import { ThemeProvider } from '../src/ThemeProvider';
import { breakpoints } from '@utilitywarehouse/design-tokens';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { MDXProvider } from '@mdx-js/react';
import { DocsContainer as StorybookDocsContainer } from '@storybook/blocks';
import { Heading } from '../src/Heading';
import { Text } from '../src/Text';

const components = {
  h1: props => <Heading component="h1" variant="h1" color="secondary" gutterBottom {...props} />,
  h2: props => <Heading component="h2" variant="h2" color="secondary" gutterBottom {...props} />,
  h3: props => <Heading component="h3" variant="h3" color="secondary" gutterBottom {...props} />,
  h4: props => <Heading component="h4" variant="h4" color="secondary" gutterBottom {...props} />,
  p: props => <Text paragraph component="p" variant="body" {...props} />,
};

export const DocsContainer = props => (
  <ThemeProvider>
    <MDXProvider components={components}>
      <StorybookDocsContainer {...props} />
    </MDXProvider>
  </ThemeProvider>
);

const customerUiViewports = {
  mobile: {
    name: 'Web UI mobile',
    styles: {
      width: `${breakpoints.mobile}px`,
      height: '100vh',
    },
  },
  tablet: {
    name: 'Web UI tablet',
    styles: {
      width: `${breakpoints.tablet}px`,
      height: '100vh',
    },
  },
  desktop: {
    name: 'Web UI desktop',
    styles: {
      width: `${breakpoints.desktop}px`,
      height: '100vh',
    },
  },
  ...INITIAL_VIEWPORTS,
};

const preview = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
    viewport: {
      viewports: customerUiViewports,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      container: DocsContainer,
    },
  },
  decorators: [
    Story => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
