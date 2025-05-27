# core-ui
Repo for common UI components, mostly built in PrimeVue, using their [hybrid styling](https://primevue.org/theming/unstyled/#hybrid), which requires downloading a [release](https://github.com/primefaces/primevue-tailwind/releases), which has the appropriate CSS files.

## Headless UI

Didn't use this because their ComboBox required using PopperJS, and that kind of defeated the purpose of using the library.

## Vuetify

I couldn't get the props to autocomplete in the IDE, and their TypeScript support seemed a little non-existent.  Also, they use Material UI, and it's not a great idea to completely overhaul their styling.

## Quasar

This seemed promising, but they strongly recommend using their CLI, and that seems a bit aggressive for a UI library.  Also, their Tailwind support seemed non-existent.

## DaisyUI

This seemed a bit immature... they didn't even have a Select/ComboBox component.

## Reka UI

This actually seems a little promising.