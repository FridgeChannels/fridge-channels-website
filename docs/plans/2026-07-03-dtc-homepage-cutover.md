# DTC Homepage Cutover Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use Code workflow to implement this plan task-by-task.

**Goal:** Make the DTC Brands landing page render at `/` while preserving the legacy homepage and every existing industry route.

**Architecture:** Move the DTC landing implementation into a shared page component and keep both route files as thin entrypoints. Move the former homepage into a non-routable legacy component. Hide legacy industry navigation behind a centralized boolean without deleting its JSX.

**Tech Stack:** Next.js App Router, React, TypeScript.

---

### Task 1: Preserve the former homepage

**Files:**
- Move: `app/page.tsx`
- Create: `components/legacy/general-homepage.tsx`

Move the existing homepage implementation unchanged into a non-routable component and rename its exported function for clarity.

### Task 2: Share the DTC landing implementation

**Files:**
- Move: `app/who-we-serve/dtcbrands/page.tsx`
- Create: `components/pages/dtc-brands-landing.tsx`
- Create: `app/page.tsx`
- Create: `app/who-we-serve/dtcbrands/page.tsx`

Render the same shared DTC component from `/` and `/who-we-serve/dtcbrands` so the URL can remain `/` without duplicating page code.

### Task 3: Hide legacy navigation

**Files:**
- Modify: `components/navigation.tsx`

Point the logo to `/`, treat `/` as the DTC landing route, and hide desktop/mobile industry menus behind a feature flag while retaining their implementation.

### Task 4: Verify

Run `git diff --check`, verify both routes return HTTP 200, confirm both render the DTC headline, confirm old industry routes still resolve, and visually inspect `/` in the browser.
