# Foodland Hawaiʻi Mobile Design System

Reusable React Native components and a stakeholder-facing Storybook for the Foodland Hawaiʻi mobile app. The library covers everyday shopping (Foodland green) and Maikaʻi loyalty (teal and lime) without app-specific APIs, authentication, routing, or analytics.

## Live demo

Published Storybook: https://kentsalcedo.github.io/piiku-foodland-rn-component-poc/

If that URL 404s, GitHub Pages is not enabled yet: **Settings → Pages → Source = GitHub Actions**, then re-run **Deploy Storybook**.

## For product, marketing, and design reviewers

1. Open web Storybook (`npm run storybook`, or the GitHub Pages URL once published).
2. Use the **Brand** toolbar control to switch between **Foodland** and **Maikaʻi**. The preview updates without a reload.
3. Open **Controls** on a component to try disabled, loading, error, compact, and other states.
4. Start with **00 Welcome**, then **01 Foundations**, then the example screens under **06 Examples**.
5. These components are foundational stubs for review. They are not connected to live store, account, or rewards data.

## Local setup

```bash
npm ci
```

Use Node 20 or later. `npm ci` requires the committed `package-lock.json`.

## Web Storybook

```bash
npm run storybook
```

Then open http://localhost:6006. `npm run storybook:web` is an alias.

## Native Storybook

```bash
npm run storybook:native
npm run storybook:ios
npm run storybook:android
```

These start Expo with on-device Storybook enabled. If stories are added, regenerate the native loader:

```bash
npm run storybook-generate
```

## Expo app

The Expo app shows the same `DesignSystemShowcase` screen used in Storybook.

```bash
npm start
npm run ios
npm run android
npm run web
```

The Foodland theme is the default.

## Static Storybook build

```bash
npm run build-storybook
```

Output is written to `storybook-static/`. Also run:

```bash
npm run typecheck
npm run lint
```

## GitHub Pages

The workflow in `.github/workflows/deploy-storybook.yml` runs on pushes to `main` and from **Actions → Deploy Storybook → Run workflow**.

One-time repository setting:

1. Open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.

The workflow installs with `npm ci`, typechecks, builds Storybook, and deploys `storybook-static`.

## Importing components

```tsx
import {
  Button,
  DesignSystemProvider,
  RewardCard,
  TextInput,
} from "./src";

export function Example() {
  return (
    <DesignSystemProvider brand="foodland">
      <TextInput label="Search" placeholder="Weekly ad" />
      <Button label="Find a store" />
      <RewardCard name="Bakery treat" points={1000} status="available" />
    </DesignSystemProvider>
  );
}
```

Pass `brand="maikai"` for the loyalty theme. Optional `tokens` overrides can extend semantic colors later without editing every component.

## Project structure

```text
.storybook/          Web Storybook (React Native Web + Vite)
.rnstorybook/        On-device Storybook
.github/workflows/   GitHub Pages deployment
app/                 Expo Router demo app
src/components/      Reusable primitives
src/foundations/     Color, type, space, radius, and theme tokens
src/providers/       DesignSystemProvider
src/screens/         Shared showcase and example screens
src/stories/         Welcome, foundations, and composed examples
src/index.ts         Public exports
```

## Adding a component

1. Create a folder under `src/components/` with the component, `index.ts`, and a `*.stories.tsx` file.
2. Export the component and its public types from `src/index.ts`.
3. Do not import Storybook, Expo Router, or demo screens from component source.
4. Use NativeWind `className` with complete class strings (no `bg-${color}` construction).

## Adding a story

1. Colocate `ComponentName.stories.tsx` or add a file under `src/stories/`.
2. Use titles under `00 Welcome` through `06 Examples`.
3. Include Default, Variants, relevant disabled/error/loading states, and All Variants.
4. Run `npm run storybook-generate` so native Storybook picks up new files.

## Accessibility

- Interactive targets are at least 48 × 48.
- Buttons, inputs, headers, and loaders expose labels, roles, and disabled/busy state.
- Reward and promo cards accept an accessibility label.
- Focus and error treatment on inputs must remain visible. Do not rely on opacity alone for disabled buttons.

## Approved brand assets

The `FOODLAND` and `MAIKAʻI` wordmarks are text placeholders. Do not invent or trace official logos. Replace the logo slot with an approved asset when it is available. Stories use geometric illustrations — not photography or unlicensed artwork.

## Component inventory

| Component | Purpose |
| --- | --- |
| `AppText` | Work Sans variants and semantic colors |
| `Button` | Primary, secondary, inverse, destructive actions |
| `TextInput` | Labeled field with helper, error, and focus states |
| `HeaderNav` | Mobile header with logo slot and actions |
| `Footer` | Data-driven content footer |
| `StickyFooter` | Pinned bottom actions |
| `Loader` | Inline and fullscreen activity indicator |
| `Card` | Base surface |
| `PromoCard` | Shopping / recipe / weekly offer card |
| `RewardCard` | Maikaʻi loyalty reward card |
| `DesignSystemProvider` | Brand theme and Work Sans loading |
