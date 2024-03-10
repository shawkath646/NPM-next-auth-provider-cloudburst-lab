"use server";
import { Profile } from "next-auth";
import type { OIDCConfig } from "@auth/core/providers";

const CloudBurstLab = (params: Partial<OIDCConfig<Profile>> = {}): OIDCConfig<Profile> => {

  if (!params.clientId) params.clientId = process.env.SHAS_APP_ID;
  if (!params.clientSecret) params.clientSecret = process.env.SHAS_APP_SECRET;

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
    ...params
  };
};

export default CloudBurstLab;