import { base64UrlToString } from "../util/base64";

export interface Config {
  url: string;
  authUsername: string;
  authPassword: string;
}

export function fromBase64Url(base64Url: string): Config {
  const configString = base64UrlToString(base64Url);
  const configComponents = configString.split(";");
  if (configComponents.length != 3) {
    throw new Error("Invalid config");
  }
  return {
    url: configComponents[0],
    authUsername: configComponents[1],
    authPassword: configComponents[2]
  };
}
