
# CloudBurst Lab Provider

This npm library enables OAuth 2.0 (OIDC) provider functionality, allowing users to log in via a CloudBurst Lab account in your Next.js application registered on the sh-authentication-system official website. Simply install, import, and start using it.

## Installation

```

npm i next-auth-provider-cloudburst-lab

```

## Usage

### 1. Register application to SH Authentication System [application page](https://sh-authentication-system.vercel.app/auth/profile/applications).

Copy the **app id** and **app secret** that is provided into application details page.

### 2. Import CloudBurst Lab provider

Import CloudBurst Lab provider to next auth **auth.config.ts** file in the root directory:

```

import CloudBurstLab from "next-auth-provider-cloudburst-lab";
// ... other imports

export const authConfig  = {
  providers: [
    CloudBurstLab
    // ... rest of providers
  ],
  // ...rest of your configuration
} satisfies NextAuthConfig;

```
If you want to modify provider configuration like others provider, you can do it.
```

CloudBurstLab({
	// ... provider configuration
});

```
**Note: If you have saved environment variables in this format you don't need to manually pass it.**
```

SHAS_APP_ID=
SHAS_APP_SECRET=

```
OR, Next auth default:
```

AUTH_CLOUDBURSTLAB_ID=
AUTH_CLOUDBURSTLAB_SECRET=

```

## Features

* Hassle free login system

* 3 popular providers to login your **CloudBurst Lab** account.

* If you want to remotely active, inactive, show toast message in your nextjs application, use [shas-app-controller](https://www.npmjs.com/package/shas-app-controller)

## Requirements

* Minimum version of Next Auth v5 @beta 15 for new configuration.

## Author

**[Shawkat Hossain Maruf](https://sh-portfolio-maker.vercel.app/p/shawkath646)**

<br  />

Contact: shawkath646@gmail.com

## Version

Current version: 1.0.0

##### Please use latest version to prevent bugs and errors!

<img  src="https://storage.googleapis.com/sh-cloudburst-labs.appspot.com/cloudburst_lab_logo_transparent.png?GoogleAccessId=firebase-adminsdk-lf84z%40sh-cloudburst-labs.iam.gserviceaccount.com&Expires=4863727974&Signature=B1G9adLuRnjVIxGHoh3dyMVtGsR00KdmatEJRzKpMHPDjgsUX%2Bi9VftAz71puzbFmFsC5xP%2FHZFcBKQ7NBfJbkQzhiuywJMBmOSJlsn7mNfLgZlEsU5ReaNaMXDF6y3W65YeR76u2XBiQjAvVNl%2FEIvMvgbanNJWoDULrxF1OgeF1q8O270oT05ZfzIytLpi7c%2BbBIv6OtmzeUHNa0KJaTX0QPcdesQKFL0pQpaQPncdk6iQtOCOUafgKfQregHwn9iOo1iW1SM4sLw92uJURvLWimyq8JUWjc8J8AXyActsuwQs9IRQz5%2BUjc4k5zVwIS4fQDODvN8t97FDR2Sg7g%3D%3D"  alt="CloudBurst Logo"  height="150"  width="150">

  
*A product of [CloudBurst Lab](https://cloudburstlab.vercel.app)*