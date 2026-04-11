# Monthly Planning

A single-page web application for organizing people across months: assign names to each month, reorder them, and keep two independent plans (“memory slots”) side by side. Built with **Angular** and **Angular Material**, with (optional) persistence to a backend over HTTP.

<div>
  <img src="https://github.com/fi3te/monthly-planning/blob/master/doc/screenshot1.png" width="300">
</div>

## What you can use it for

- **Rotating duties or coverage** — e.g. who is “on” in which month, with drag-and-drop to adjust the order.
- **Simple team calendars** — list participants per month without a full calendar product.
- **Two isolated planning iterations** — **Slot A** and **Slot B** are separate workspaces so two iterations can be planned in parallel without their data overlapping.

The UI is optimized for mobile devices and supports the languages **English** and **German** via Transloco.

## Features

### Modes

| Mode | Purpose |
|------|--------|
| **Read-only** | View the plan without changing it. |
| **Planning** | Drag entries between months; swap two entries via the swap action. |
| **Manage persons** | Add or remove people to/from months. |
| **Manage months** | Add or remove month rows at the top or bottom, or trim empty months. |

When there are unsaved changes, buttons for **Undo** and **Save** appear.

### Memory slots

Use the sidebar to switch between **Slot A** and **Slot B**. Each slot loads and saves its own data.

### Offline vs online

- **Offline** (no URL configuration): the app runs entirely in the browser with built-in demo data. Changes are not persisted across reloads. An “Offline” indicator is shown in the toolbar.
- **Online**: open the app with a **URL fragment** that encodes backend URL and HTTP Basic credentials (see [Connecting to a backend](#connecting-to-a-backend)). The app then loads and saves the active slot via your API.

## Requirements

- **Node.js** ≥ 24 (see `package.json` `engines`)

## Getting started

```bash
npm ci
npm start
```

Then open the dev server URL shown in the terminal (`http://localhost:4200/`).

## Connecting to a backend

When a configuration is present in a **URL fragment**, the app uses **HTTP GET** and **PUT** against the configured URL. The fragment must be a **Base64URL**-encoded string of three segments separated by semicolons:

```text
<api-url>;<basic-auth-username>;<basic-auth-password>
```

Example: If your API is `https://abc.lambda-url.eu-central-1.on.aws/`, user `alice`, password `secret`, encode `https://abc.lambda-url.eu-central-1.on.aws/;alice;secret` to Base64URL and append it as the hash to your app URL, e.g. `https://<host>/monthly-planning/#<encoded>`.

**Security note:** Credentials in the URL fragment are accessible to the browser and client-side scripts and may be stored in browser history. They are not sent to the server, but can still be exposed via XSS or user actions (e.g., sharing URLs). In general short-lived tokens should be used. For the intended use, this type of authentication offers a compromise between access restriction and user-friendliness. A single URL is meant to be easy to pass between friends — bookmark it, drop it in chat, and everyone can work with the same backend without a separate login step. For this app, the data behind the API is not treated as highly sensitive; if your case is different, use a stricter authentication setup.

## Build and deployment

```bash
npm run build
```

Output goes to `dist/monthly-planning/`. The production build is configured with `--base-href=/monthly-planning/`.

### Docker preview

To build and run a local nginx-based preview on port **8080**:

```bash
npm run preview:docker
```

This runs `docker compose up --build` and opens `http://localhost:8080/monthly-planning/` when the service is reachable.

## Testing

Unit tests use **Jest**:

```bash
npm test            # once
npm run test:watch  # watch mode
npm run test:ci     # CI-friendly (single band)
```
