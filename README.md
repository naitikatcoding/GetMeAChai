<div align="center">

<img src="https://raw.githubusercontent.com/naitikatcoding/GetMeAChai/main/app/icon.svg" alt="GetMeAChai logo" width="90" height="90" />

# ☕ GetMeAChai

**A creator-support / crowdfunding platform — build a personalized public page and let your supporters fund you with a Razorpay-powered "Buy me a chai" button.**

[![Next.js](https://img.shields.io/badge/Next.js-16.3.3-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![NextAuth.js](https://img.shields.io/badge/NextAuth.js-4.24.15-8B5CF6?style=for-the-badge&logo=auth0&logoColor=white)](https://next-auth.js.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Razorpay](https://img.shields.io/badge/Razorpay-Payments-0C2451?style=for-the-badge&logo=razorpay&logoColor=white)](https://razorpay.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

<br/>

### 🎥 Demo Video

<br/>

> _(Add your demo video / GIF here)_

<br/>

</div>

---

<div align="center">

## 📖 Table of Contents

</div>

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Architecture](#-project-architecture)
- [Route Documentation](#-route-documentation)
- [Authentication Flow](#-authentication-flow)
- [Creator Onboarding Guide](#-creator-onboarding-guide)
- [How Supporters Make a Payment](#-how-supporters-make-a-payment)
- [Razorpay Setup](#-razorpay-setup)
- [Environment Variables](#-environment-variables)
- [Local Installation and Setup](#-local-installation-and-setup)
- [Available Scripts](#-available-scripts)
- [Database Schema](#-database-schema)
- [Payment and Data Flow](#-payment-and-data-flow)
- [Security and Production Considerations](#-security-and-production-considerations)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Limitations and Future Improvements](#-limitations-and-future-improvements)
- [Quick Start](#-quick-start)

---

<div align="center">

## 🧾 Overview

</div>

**GetMeAChai** is a crowdfunding / creator-support platform built with the Next.js App Router. Creators sign in with Google or GitHub, configure a personal profile (display name, unique username, profile picture, cover banner, and their own Razorpay keys), and get a public page at `/<username>`. Supporters visit that page, enter their name, a message, and an amount, and pay the creator directly through **Razorpay Checkout**. Successful payments are verified server-side and shown on the creator's page as a running list of supporters plus a total amount raised.

---

<div align="center">

## ✨ Features

</div>

| Category | Feature |
|---|---|
| **Authentication** | Google OAuth login via NextAuth |
| **Authentication** | GitHub OAuth login via NextAuth (with private-email fallback lookup) |
| **Authentication** | JWT-based sessions (`session.strategy = "jwt"`) |
| **Authentication** | Auto-creation of a MongoDB `User` document on first sign-in, with a unique auto-generated username |
| **Profile** | Creator dashboard for editing name, username, profile picture, cover picture, and Razorpay keys |
| **Profile** | Unique creator username with a public profile URL at `/<username>` |
| **Profile** | Profile picture and cover/banner picture, both stored as **image URLs** (no file upload) |
| **Payments** | Per-creator Razorpay **Key ID** and **Key Secret**, entered and stored on the creator's own profile |
| **Payments** | Razorpay Checkout modal for supporter payments |
| **Payments** | Server-side Razorpay payment **signature verification** |
| **Payments** | Supporter list (name, message, amount) and total amount raised, shown on the creator page |
| **UI/UX** | Fully responsive UI built with Tailwind CSS v4 |
| **UI/UX** | Toast notifications via `react-toastify` |
| **UI/UX** | Navbar dropdown with Dashboard, "Your page", and Sign-out actions |

> **Note — disabled social logins:** the login page (`app/login/page.js`) renders **LinkedIn, Twitter, Facebook, and Apple** buttons with the `disabled` attribute. Only **Google** and **GitHub** are wired to actual NextAuth providers; the other four are visual placeholders only.

---

<div align="center">

## 🛠 Technology Stack

</div>

| Technology | Logo | Purpose in this project |
|---|:---:|---|
| **Next.js** `16.3.3` | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="28" /> | App Router framework — pages, layouts, API routes, and server actions |
| **React** `19.2.8` | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="28" /> | UI component library used throughout `app/` and `components/` |
| **React DOM** `19.2.8` | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="28" /> | React renderer for the browser |
| **NextAuth.js** `^4.24.15` | <img src="https://next-auth.js.org/img/logo/logo-sm.png" width="28" /> | Handles Google/GitHub OAuth, JWT sessions, sign-in/sign-out flow |
| **MongoDB** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="28" /> | Primary datastore for creator profiles and payment records |
| **Mongoose** `^9.9.4` | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg" width="28" /> | ODM used to define and query the `User` and `Payment` models |
| **Razorpay SDK** `^2.9.8` | <img src="https://razorpay.com/favicon.png" width="28" /> | Server-side order creation (`actions/Useraction.js`) and payment-signature validation (`app/api/razorpay/route.js`) |
| **Razorpay Checkout.js** | <img src="https://razorpay.com/favicon.png" width="28" /> | Client-side checkout widget, loaded from `checkout.razorpay.com` in `Paymentpage.js` |
| **Tailwind CSS** `^4` | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="28" /> | Utility-first styling for every page and component |
| **@tailwindcss/postcss** `^4` | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postcss/postcss-original.svg" width="28" /> | PostCSS plugin that powers the Tailwind v4 pipeline |
| **PostCSS** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postcss/postcss-original.svg" width="28" /> | CSS transformation pipeline configured in `postcss.config.mjs` |
| **ESLint** `^9` | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" width="28" /> | Linting, configured in `eslint.config.mjs`, run via `npm run lint` |
| **eslint-config-next** `16.3.3` | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="28" /> | Next.js-specific ESLint rule set |
| **babel-plugin-react-compiler** `1.0.0` | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" width="28" /> | Enables the React Compiler optimization for the app |
| **react-toastify** `^11.1.0` | 🔔 | Toast notifications (save success/errors, payment errors, etc.) |
| **next/font (Geist)** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="28" /> | Loads and optimizes the Geist Sans / Geist Mono fonts in `app/layout.js` |

---

<div align="center">

## 🏗 Project Architecture

</div>

```
GetMeAChai/
├── actions/
│   └── Useraction.js         # "use server" actions: initiate payment, fetch/update user, fetch payments
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/route.js   # NextAuth handler (Google + GitHub, JWT callbacks)
│   │   └── razorpay/route.js             # Payment callback + signature verification
│   ├── [username]/page.js    # Public creator page (dynamic route)
│   ├── dashboard/page.js     # Authenticated creator dashboard (profile + Razorpay keys form)
│   ├── login/page.js         # Sign-in page (Google / GitHub active, 4 others disabled)
│   ├── about/page.js         # Static "About" page
│   ├── contact/page.js       # Static "Contact" page
│   ├── policy/page.js        # Static privacy policy page
│   ├── refund/page.js        # Static refund policy page
│   ├── terms/page.js         # Static terms of service page
│   ├── layout.js             # Root layout: Navbar, Footer, SessionWrapper, ToastProvider, fonts
│   └── page.js                # Landing/home page
├── components/
│   ├── Navbar.jsx             # Top navigation, session-aware dropdown
│   ├── Footer.jsx             # Site footer
│   ├── Paymentpage.js         # Full public creator-page UI + Razorpay Checkout integration
│   ├── SessionWrapper.js      # Wraps the app in NextAuth's SessionProvider
│   └── ToastProvider.jsx      # react-toastify container
├── db/
│   └── connectDb.js           # Mongoose connection helper (reads MONGO_URI)
├── models/
│   ├── User.js                 # Mongoose schema for creators
│   └── Payment.js              # Mongoose schema for supporter payments
├── public/                     # Static assets (SVGs, cover.gif, etc.)
├── next.config.mjs
├── postcss.config.mjs
├── eslint.config.mjs
├── jsconfig.json
└── package.json
```

---

<div align="center">

## 🧭 Route Documentation

</div>

| Route | Description | Auth Required |
|---|---|:---:|
| `/` | Landing page introducing the platform | No |
| `/login` | Sign-in page with Google/GitHub buttons (LinkedIn, Twitter, Facebook, Apple shown but disabled) | No |
| `/dashboard` | Creator profile form (name, username, images, Razorpay keys); redirects to `/login` if unauthenticated | Yes |
| `/<username>` | Public creator page — supporter form, Razorpay Checkout, supporter list, total raised | No |
| `/about` | Static informational page about the platform | No |
| `/contact` | Static contact-details page | No |
| `/policy` | Static privacy policy page | No |
| `/refund` | Static refund policy page | No |
| `/terms` | Static terms of service page | No |
| `/api/auth/[...nextauth]` | NextAuth route — handles OAuth sign-in, callbacks, session, and sign-out | N/A (auth engine) |
| `/api/razorpay` | Server route that receives the Razorpay checkout `POST` callback, verifies the signature, marks the payment `done`, and redirects to `/<username>?paymentdone=true` | No (validated by signature) |

---

<div align="center">

## 🔐 Authentication Flow

</div>

1. The user clicks **Continue with Google** or **Continue with GitHub** on `/login`, which calls `signIn(provider, { callbackUrl: "/dashboard" })`.
2. NextAuth (`app/api/auth/[...nextauth]/route.js`) exchanges the OAuth code for the user's profile via the corresponding provider.
3. In the `signIn` callback, the app resolves an email address:
   - Uses `user.email` / `profile.email` if present.
   - For GitHub users with a private email, it calls `https://api.github.com/user/emails` with the GitHub access token to fetch the verified/primary address.
   - If GitHub still returns no email, it falls back to `<github-login>@users.noreply.github.com`.
4. The app connects to MongoDB (`connectDb()`) and looks up a `User` by that normalized email.
5. **If no user exists**, a new `User` document is created: a URL-safe username is derived from the GitHub login, display name, or email prefix, then de-duplicated by appending a random 4-digit suffix if the username is already taken.
6. The resolved `id` and `username` are attached to the in-memory `user` object, then propagated into the **JWT** (`jwt` callback) and exposed on `session.user` (`session` callback).
7. On success, NextAuth redirects the user to `/dashboard` (the requested `callbackUrl`).
8. Signing out is triggered from the Navbar dropdown via `signOut({ callbackUrl: "/" })`, which clears the session and returns the user to the home page.

---

<div align="center">

## 🚀 Creator Onboarding Guide

</div>

1. Open the application.
2. Click **Login**.
3. Choose **Continue with Google** or **Continue with GitHub**.
4. You're redirected to the **Dashboard**.
5. Enter a **display name**.
6. Choose a unique **username** (used to build your public URL).
7. Paste a **Profile Picture URL**.
8. Paste a **Cover/Banner Picture URL**.
9. Enter your **Razorpay Key ID**.
10. Enter your **Razorpay Key Secret**.
11. Click **Save Profile**.
12. Visit your generated public page at `/<username>` (or use **Your page** in the Navbar dropdown).

> **Image handling:** the dashboard only accepts **image URLs** for the profile picture and cover picture — there is no file-upload/storage mechanism in the current codebase. You must host your images elsewhere (e.g. an image hosting service) and paste the direct link.

---

<div align="center">

## 💳 How Supporters Make a Payment

</div>

1. A supporter visits the creator's public page at `/<username>`.
2. They fill in their **name**, an optional **message**, and an **amount in ₹ (INR)** — or tap one of the quick-pay buttons (₹10 / ₹20 / ₹30).
3. On submit, the entered rupee amount is converted to **paise** (`amount * 100`) before being sent to Razorpay, since Razorpay's API operates in the smallest currency unit.
4. The client calls the `initiate` server action, which:
   - Looks up the creator's `razorpayid` / `razorpaysecret` (falling back to server-side env vars if not set on the profile).
   - Creates a Razorpay **order** via the Razorpay Node SDK.
   - Saves a `Payment` document in MongoDB with `done: false`.
5. **Razorpay Checkout** (loaded from `checkout.razorpay.com/v1/checkout.js`) opens in a modal using the returned order ID.
6. After the supporter completes payment, Razorpay calls back to **`/api/razorpay`** with `razorpay_order_id`, `razorpay_payment_id`, and `razorpay_signature`.
7. The route looks up the matching `Payment` by order ID, resolves the creator's secret, and calls Razorpay's `validatePaymentVerification` to check the **signature**.
8. If verification succeeds, the `Payment` document is updated to `done: true`, and the supporter is redirected to `/<username>?paymentdone=true`.
9. A payment only appears in the **supporters list** and counts toward the **total raised** once `done` is `true` — `fetchpayments()` only returns payments where `done: true`, sorted by amount and limited to 10.
10. The creator page then re-renders with the updated total (`₹{totalRaised}`) and supporter count.

---

<div align="center">

## 💰 Razorpay Setup

</div>

1. Create a [Razorpay](https://razorpay.com/) account and open the **Dashboard → API Keys** section.
2. Generate a key pair. You will receive:
   - **Key ID** (`razorpayid` field) — safe to expose to the browser; used as the `key` in the Razorpay Checkout options.
   - **Key Secret** (`razorpaysecret` field) — must stay server-side only; used to create orders and to verify payment signatures.
3. **Test vs. Live credentials:** Razorpay test keys are prefixed `rzp_test_...` and only process test-mode payments with no real money movement. Live keys (`rzp_live_...`) process real transactions and require a fully activated Razorpay account.
4. Both values are entered in the **Dashboard** form (`/dashboard`) under **Razorpay Key ID** and **Razorpay Key Secret**, and are saved directly onto the creator's `User` document.
5. **Never commit real Razorpay secrets to Git or expose them in client-side code.** Only the Key ID is meant to be public.
6. **Known limitation:** in the current implementation, `razorpaysecret` is stored in plaintext on the `User` document in MongoDB rather than in a secrets manager or encrypted field — treat your database access controls accordingly.

---

<div align="center">

## 🔑 Environment Variables

</div>

| Variable | Required | Purpose | Scope | Example |
|---|:---:|---|:---:|---|
| `MONGO_URI` | Required | MongoDB connection string used by `connectDb()` | Server | `mongodb+srv://user:pass@cluster.mongodb.net/getmeachai` |
| `NEXTAUTH_SECRET` | Required | Secret used by NextAuth to sign/encrypt JWTs and cookies | Server | `a-long-random-string` |
| `GOOGLE_ID` | Required (for Google login) | Google OAuth Client ID | Server | `xxxxx.apps.googleusercontent.com` |
| `GOOGLE_SECRET` | Required (for Google login) | Google OAuth Client Secret | Server | `GOCSPX-xxxxxxxxxxxx` |
| `GITHUB_ID` | Required (for GitHub login) | GitHub OAuth App Client ID | Server | `Iv1.xxxxxxxxxxxx` |
| `GITHUB_SECRET` | Required (for GitHub login) | GitHub OAuth App Client Secret | Server | `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` |
| `NEXT_PUBLIC_KEY_ID` | Optional (fallback) | Default Razorpay Key ID used when a creator hasn't set their own | Client + Server | `rzp_test_xxxxxxxxxxxx` |
| `KEY_SECRET` | Optional (fallback) | Default Razorpay Key Secret used server-side when a creator hasn't set their own | Server | `xxxxxxxxxxxxxxxxxxxx` |
| `NEXT_PUBLIC_KEY_SECRET` | Optional (fallback) | Secondary fallback for the Razorpay Key Secret, read server-side | Client + Server | `xxxxxxxxxxxxxxxxxxxx` |
| `NEXT_PUBLIC_CALLBACK_URL` | Optional | Fallback Razorpay callback URL used only if `window.location.origin` is unavailable | Client | `http://localhost:3000/api/razorpay` |

> ⚠️ Any variable prefixed with `NEXT_PUBLIC_` is bundled into client-side JavaScript and is visible to anyone using the site. `NEXT_PUBLIC_KEY_SECRET` exists in the current code as a fallback, but **a Razorpay Key Secret should never actually be shipped to the browser** — treat this variable as a code smell to fix rather than a pattern to copy, and prefer configuring `KEY_SECRET` (server-only) instead.

---

<div align="center">

## 💻 Local Installation and Setup

</div>

**Prerequisites:** Node.js (LTS), npm, a MongoDB database (local or Atlas), a Google OAuth app, a GitHub OAuth app, and a Razorpay account.

1. **Clone the repository**
   ```bash
   git clone https://github.com/naitikatcoding/GetMeAChai.git
   cd GetMeAChai
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Create `.env.local`** in the project root:
   ```env
   MONGO_URI=mongodb+srv://<user>:<password>@<cluster>/<db>
   NEXTAUTH_SECRET=replace-with-a-long-random-string
   GOOGLE_ID=your-google-client-id
   GOOGLE_SECRET=your-google-client-secret
   GITHUB_ID=your-github-client-id
   GITHUB_SECRET=your-github-client-secret
   NEXT_PUBLIC_KEY_ID=rzp_test_xxxxxxxxxxxx
   KEY_SECRET=your-razorpay-test-secret
   NEXT_PUBLIC_CALLBACK_URL=http://localhost:3000/api/razorpay
   ```
4. **Configure MongoDB** — create a free cluster on MongoDB Atlas (or run MongoDB locally) and put the connection string in `MONGO_URI`.
5. **Configure Google OAuth** — in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials), create an OAuth Client ID (Web application) and add `http://localhost:3000/api/auth/callback/google` as an authorized redirect URI.
6. **Configure GitHub OAuth** — in [GitHub Developer Settings](https://github.com/settings/developers), create an OAuth App with callback URL `http://localhost:3000/api/auth/callback/github`.
7. **Configure NextAuth** — set `NEXTAUTH_SECRET` to any long random string (e.g. `openssl rand -base64 32`).
8. **Configure Razorpay test credentials** — grab your **test-mode** Key ID and Key Secret from the Razorpay Dashboard and set them as fallback env vars (each creator can also override them from their own Dashboard page).
9. **Run the development server**
   ```bash
   npm run dev
   ```
10. **Open the app** at [http://localhost:3000](http://localhost:3000).

---

<div align="center">

## 📜 Available Scripts

</div>

| Script | Command | Description |
|---|---|---|
| `dev` | `npm run dev` | Starts the Next.js development server |
| `build` | `npm run build` | Builds the app for production |
| `start` | `npm run start` | Runs the production build |
| `lint` | `npm run lint` | Runs ESLint across the project |

---

<div align="center">

## 🗄 Database Schema

</div>

### `User` (models/User.js)

| Field | Type | Required | Default | Purpose |
|---|---|:---:|---|---|
| `email` | String | Yes | — | Unique identifier used to find/create a user during sign-in |
| `name` | String | No | — | Display name shown on the dashboard and (as fallback) the public page |
| `username` | String | Yes | — | Unique slug used for the public URL `/<username>` |
| `profilePic` | String | No | — | Profile picture **URL** |
| `coverPic` | String | No | — | Cover/banner picture **URL** |
| `razorpayid` | String | No | — | Creator's own Razorpay Key ID |
| `razorpaysecret` | String | No | — | Creator's own Razorpay Key Secret |
| `isProfileSaved` | Boolean | No | `false` | Set to `true` once the dashboard form has been successfully saved |
| `createdAt` | Date | No | `Date.now` | Record creation timestamp |
| `updatedAt` | Date | No | `Date.now` | Last update timestamp (set manually on `updateUser`) |

### `Payment` (models/Payment.js)

| Field | Type | Required | Default | Purpose |
|---|---|:---:|---|---|
| `user_name` | String | No | `"Anonymous"` | Supporter's display name |
| `to_user` | String | Yes | — | Username of the creator being supported (links to `User.username`) |
| `o_id` | String | Yes | — | Razorpay order ID, used to match the checkout callback |
| `message` | String | No | `""` | Supporter's message |
| `amount` | Number | Yes | — | Payment amount, stored in **rupees** (converted from paise on creation) |
| `createdAt` | Date | No | `Date.now` | Record creation timestamp |
| `updatedAt` | Date | No | `Date.now` | Last update timestamp |
| `done` | Boolean | No | `false` | Flips to `true` once the Razorpay signature is verified |

**Relationship:** `Payment.to_user` is a plain string reference to `User.username` (no Mongoose `ref`/populate is used). Completed payments for a creator are selected with `Payment.find({ to_user: username, done: true })`, sorted by `amount` descending and capped at 10 results.

---

<div align="center">

## 🔄 Payment and Data Flow

</div>

```mermaid
flowchart TD
    A[Visitor clicks Login] --> B[Google / GitHub OAuth]
    B --> C{User exists in MongoDB?}
    C -- No --> D[Create User with generated username]
    C -- Yes --> E[Load existing User]
    D --> F[JWT session created]
    E --> F
    F --> G[Redirect to /dashboard]
    G --> H[Creator fills name, username, image URLs, Razorpay keys]
    H --> I[updateUser server action saves profile]
    I --> J["Public page live at /username"]
    J --> K[Supporter fills name, message, amount]
    K --> L[initiate action creates Razorpay order + Payment record]
    L --> M[Razorpay Checkout modal opens]
    M --> N[Supporter completes payment]
    N --> O["POST /api/razorpay callback"]
    O --> P{Signature valid?}
    P -- Yes --> Q[Payment marked done = true]
    P -- No --> R[Verification failed response]
    Q --> S[Redirect to /username?paymentdone=true]
    S --> T[Supporter shown in list + total raised updated]
```

---

<div align="center">

## 🛡 Security and Production Considerations

</div>

- **OAuth secrets** (`GOOGLE_SECRET`, `GITHUB_SECRET`) must only ever be set as server-side environment variables — never committed to Git or logged.
- **Razorpay secrets**: the app currently stores each creator's `razorpaysecret` directly on the `User` document in MongoDB. This is functional but means anyone with database read access can see plaintext Razorpay secrets — consider encrypting this field at rest or moving to a dedicated secrets manager for production use.
- **JWT sessions**: NextAuth is configured with `session.strategy = "jwt"`, signed using `NEXTAUTH_SECRET`. Keep this secret long, random, and rotated if ever leaked.
- **Payment signature verification** is performed server-side in `/api/razorpay` using Razorpay's `validatePaymentVerification` utility — the app does not trust the client-supplied payment status directly.
- **Input validation** is minimal: usernames are lowercased and stripped of non-alphanumeric characters, and duplicate usernames are rejected, but there is no explicit validation on image URLs, message length, or Razorpay key formats — consider adding stricter validation before production use.
- **Username uniqueness** is enforced at the application layer (a `findOne` uniqueness check in `updateUser`), not via a MongoDB unique index — under concurrent writes this leaves a small race-condition window.
- **HTTPS** is required in production for OAuth callbacks and for Razorpay Checkout to operate securely; always deploy behind HTTPS.
- **MongoDB connection security**: use a connection string with a dedicated database user, IP allow-listing (or VPC peering), and TLS, rather than an open/public cluster.
- **Live vs. test Razorpay credentials**: because the Key Secret is stored per-creator in the database, moving from test to live keys should be done carefully, with the understanding that a Key Secret written to the database is only as safe as the database itself.
- This project does **not** currently implement rate limiting, CSRF protection beyond what NextAuth provides by default, or webhook-based payment reconciliation — these would be worthwhile additions before handling real, high-volume traffic.

---

<div align="center">

## ☁️ Deployment

</div>

The project can be deployed to any Next.js-compatible host, such as **Vercel**:

1. **Build command:** `npm run build` (or `next build`, auto-detected by Vercel).
2. **Start command:** `npm run start` (Vercel runs this automatically for the App Router).
3. **Required environment variables:** set all variables from the [Environment Variables](#-environment-variables) table in your hosting provider's dashboard (e.g. Vercel Project Settings → Environment Variables).
4. **OAuth callback URLs:** update your Google and GitHub OAuth app settings to include your production domain, e.g. `https://your-domain.com/api/auth/callback/google` and `https://your-domain.com/api/auth/callback/github`.
5. **Razorpay callback considerations:** the client computes the callback URL from `window.location.origin` at payment time, so no extra Razorpay-side redirect URL configuration is required — just ensure `NEXT_PUBLIC_CALLBACK_URL` is set correctly as a fallback for non-browser contexts.
6. **MongoDB network access:** if using MongoDB Atlas, allow-list your hosting provider's outbound IP ranges (or use `0.0.0.0/0` only for testing, never for production).

---

<div align="center">

## 🩺 Troubleshooting

</div>

| Problem | Likely Cause / Fix |
|---|---|
| **MongoDB connection failures** | Verify `MONGO_URI` is set and correct; check MongoDB Atlas network access/IP allow-list; confirm the cluster is running. |
| **OAuth callback errors** | Confirm the callback URL registered in Google/GitHub exactly matches `<your-domain>/api/auth/callback/<provider>`. |
| **Missing OAuth credentials** | Ensure `GOOGLE_ID`, `GOOGLE_SECRET`, `GITHUB_ID`, and `GITHUB_SECRET` are all set — sign-in will fail silently or error out if any are blank. |
| **Invalid or missing Razorpay credentials** | The `initiate` action throws `"Payment gateway credentials are not configured"` if neither the creator's saved keys nor the `NEXT_PUBLIC_KEY_ID` / `KEY_SECRET` fallbacks are set. |
| **Payment signature verification failures** | Ensure the Key Secret used to verify matches the Key ID used to create the order (creator-specific vs. env fallback mismatch is the most common cause). |
| **Creator page not found** | `fetchUser` found no matching `username` or `email` — check the username was actually saved via the dashboard. |
| **Images not loading** | Since only image URLs are supported, confirm the URL is publicly accessible and returns a valid image (the UI falls back to initials/gradient on load error). |
| **Username conflicts** | `updateUser` returns `"Username is already taken by another creator"` — choose a different username. |
| **Missing environment variables** | `connectDb()` throws if `MONGO_URI` is empty; double-check `.env.local` (development) or your host's environment variable settings (production). |

---

<div align="center">

## 🚧 Limitations and Future Improvements

</div>

- **Image URLs only** — profile and cover pictures require an externally hosted URL; there is no built-in file upload/storage.
- **Social logins disabled** — LinkedIn, Twitter, Facebook, and Apple buttons are present in the UI but marked `disabled`; only Google and GitHub are functional.
- **Razorpay secrets in the database** — `razorpaysecret` is stored directly on the `User` document rather than in a dedicated secrets vault.
- **No webhook or refund handling** — payment status is only updated via the client-driven checkout callback; there's no Razorpay webhook listener or refund workflow.
- **Limited creator analytics** — the public page shows only a live supporter list and total raised; there are no charts, exports, or historical trends.
- **Minimal validation and hardening** — usernames, URLs, and payment amounts could use stricter server-side validation, and there's no rate limiting on API routes.

---

<div align="center">

## ⚡ Quick Start

</div>

**Developer:** `git clone` → `npm install` → create `.env.local` → `npm run dev` → open `http://localhost:3000`.

**Creator:** Login with Google/GitHub → open Dashboard → fill in name, username, image URLs, and Razorpay keys → Save Profile → share your `/<username>` link.

**Supporter:** Visit a creator's `/<username>` page → enter your name, message, and amount → pay via Razorpay Checkout → see your support appear instantly in the supporters list.

</div>