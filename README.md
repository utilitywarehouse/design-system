# UW Design Systems

[![Code Checks](https://github.com/utilitywarehouse/design-systems/actions/workflows/checks.yml/badge.svg)](https://github.com/utilitywarehouse/design-systems/actions/workflows/checks.yml) [![Release](https://github.com/utilitywarehouse/design-systems/actions/workflows/release.yml/badge.svg)](https://github.com/utilitywarehouse/design-systems/actions/workflows/release.yml)

Shared tools and libraries for building UW applications.

## Packages

### Web UI

A set of React components for building UW branded UIs, built in collaboration
with the UX design team.

Please have a look at [the documentation](https://uw-web-ui.vercel.app/?path=/docs/web-ui-introduction--documentation) for how to get started using these
components.

### Native UI

A set of React Native components for building UW branded UIs, built in collaboration
with the UX design team.

Please have a look at [the documentation](https://uw-native-ui.vercel.app/?path=/docs/native-ui-introduction--docs) for how to get started using these
components.

### Colour System

Sets of colour scales for web and mobile, including light and dark mode for
native mobile applications, as well as colours common to both colour modes.
These colour scales are autogenerated from the Figma source.

Please have a look at [the documentation](https://uw-web-ui.vercel.app/?path=/docs/colour-system-introduction--documentation) for how to get started using these
colours.

### Prettier Config

A UW standard config for Prettier code formatting.

Please have a look at [the package README](./packages/prettier-config/README.md) for how to get started using these
colours.

## Contributing

Please read our [contribution guide](CONTRIBUTING.md).

### Issues

Please feel free to open issues here, however we are using
[linear](https://linear.app/utilitywarehouse/team/UWUI/all) for issue tracking,
so it may be moved there after being evaluated.

## Publishing

All changes are published through [Github Actions](https://github.com/features/actions) on the
`main` branch. All development should take place on branches from `main` then
submit a PR to merge back to `main`.

[Changesets](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md)
will be added as changes are contributed. When changes are merged to `main` the
release workflow will run which will open, and keep updated, a Version Pull
Request containing all changes. When this is merged to `main` all packages will
be versioned, published to npm and changelogs will be generated based on the
changesets.

## Local development

You can use storybook to develop UW Web UI components locally. To get started,
clone this repo and run the following command in the root directory.

```console
npm run setup
```

This will get `pnpm` set up. If necessary, refer to the [corepack documentation](https://github.com/nodejs/corepack#manual-installs)
if there are issues with the corepack installation.

You can then install all the necessary dependencies, build the packages, and run
the Storybook app and the Web UI library in watch mode. As before, run these
commands in the root directory.

```console
pnpm install
pnpm build
pnpm dev
```

