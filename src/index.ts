import type { OAuthUserConfig, OIDCConfig } from "@auth/core/providers";

export interface CloudBurstLabProfile extends Record<string, any> {
  aud: string
  azp: string
  email: string
  email_verified: boolean
  exp: number
  family_name?: string
  given_name: string
  hd?: string
  iat: number
  iss: string
  jti?: string
  locale?: string
  name: string
  nbf?: number
  picture: string
  sub: string
  gender?: string
  dateOfBirth?: Date
  country?: string
  phoneNumber?: string
  phoneNumberVerified?: boolean
  isEnterpriseUser?: boolean
}

interface CloudBurstLabConfig<P extends CloudBurstLabProfile> extends OIDCConfig<P> {
  options: OAuthUserConfig<P>;
}


export default function CloudBurstLab<P extends CloudBurstLabProfile>(
  options: OAuthUserConfig<P>
): CloudBurstLabConfig<P> {

  if (!options.clientId) options.clientId = process.env.SHAS_APP_ID;
  if (!options.clientSecret) options.clientSecret = process.env.SHAS_APP_SECRET;

  return {
    id: "cloudburst-lab",
    name: "CloudBurst Lab",
    type: "oidc",
    issuer: "https://sh-authentication-system.vercel.app/api/oauth",
    style: {
      bg: "#fff",
      logo: "./cloudburst_lab.png",
      text: "#000",
    },
    options
  };
};
