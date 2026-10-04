<!-- HEADER SECTION -->
<div align="center">

# NextAuth Provider — CloudBurst Lab

**[DEPRECATED] NextAuth.js OAuth 2.0 (OIDC) provider for legacy CloudBurst Lab accounts.**

<!-- BADGES -->
[![Status](https://img.shields.io/badge/Status-Deprecated-inactive?style=flat-square)](#)
[![Author](https://img.shields.io/badge/Author-Shawkat%20Hossain%20Maruf-black?style=flat-square)](https://shawkath646.dev)
[![Ecosystem](https://img.shields.io/badge/Ecosystem-clouburstlab-2563EB?style=flat-square)](https://clouburstlab.com)
[![Modern Successor](https://img.shields.io/badge/Modern%20Successor-clouauth-2563EB?style=flat-square)](https://github.com/shawkath646/clouauth)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](#-license)

</div>

---

### 📋 Project Overview

| Property | Details |
| :--- | :--- |
| **Author** | [Shawkat Hossain Maruf](https://shawkath646.dev) |
| **Platform** | NPM Package / NextAuth.js / Auth.js Extension |
| **Period / Timeline** | Mar 2024 |
| **Status** | Deprecated / Archived |
| **Modern Successor** | **[`clouauth`](https://github.com/shawkath646/clouauth)** |
| **Primary Stack** | TypeScript, NextAuth.js, OAuth 2.0, OpenID Connect |

---

> [!WARNING]
> **Deprecation Notice & Migration to `clouauth`**  
> This package is **deprecated and archived**. It provided an OpenID Connect (OIDC) provider for the legacy SH Authentication System. For all current and future OAuth 2.0 application management across `clouburstlab`, please migrate to **[`clouauth`](https://github.com/shawkath646/clouauth)**.

---

## 🎯 Purpose & History

### Why It Existed
To allow third-party client web applications built with Next.js to authenticate users via CloudBurst Lab accounts using the industry-standard NextAuth.js (Auth.js) library.

### What It Provided
- **Standardized NextAuth Provider:** Implemented the `OAuthConfig` interface allowing simple plug-and-play inclusion in `auth.config.ts`.
- **OpenID Connect (OIDC) Flow:** Handled authorization code exchange, access token retrieval, and user profile deserialization.

---

## 📦 Historical Usage (Legacy Reference)

```bash
npm install next-auth-provider-cloudburst-lab
```

### Integration (`auth.config.ts`)

```typescript
import CloudBurstLab from "next-auth-provider-cloudburst-lab";
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers: [
    CloudBurstLab({
      clientId: process.env.CLOUDBURST_CLIENT_ID!,
      clientSecret: process.env.CLOUDBURST_CLIENT_SECRET!
    })
  ]
} satisfies NextAuthConfig;
```

---

## 🔄 Migration Guide

To authenticate applications today:
1. Refer to **[`clouauth`](https://github.com/shawkath646/clouauth)**.
2. Use modern OpenID Connect (OCID) client endpoints provided by `clouauth`.

---

## 📄 License

Distributed under the [MIT License](LICENSE). See `LICENSE` for more information.

---

<!-- BRANDING FOOTER -->
<div align="center">
  <sub>Engineered by</sub><br/>
  <strong><a href="https://shawkath646.dev">Shawkat Hossain Maruf</a></strong>
  <br/><br/>
  <sub>A product of</sub><br/>
  <a href="https://clouburstlab.com" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://assets.clouburstlab.com/branding/icon_dark.png">
      <source media="(prefers-color-scheme: light)" srcset="https://assets.clouburstlab.com/branding/icon_light.png">
      <img alt="clouburstlab" src="https://assets.clouburstlab.com/branding/icon_light.png" width="230">
    </picture>
  </a>
</div>
