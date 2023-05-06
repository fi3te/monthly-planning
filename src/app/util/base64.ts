import { Buffer } from "buffer";

export function base64UrlToString(base64Url: string): string {
  const base64 = base64UrlToBase64(base64Url);
  return base64ToString(base64);
}

export function base64ToString(base64: string): string {
  return Buffer.from(base64, 'base64').toString();
}

export function stringToBase64Url(value: string): string {
  const base64 = stringToBase64(value);
  return base64ToBase64Url(base64);
}

export function stringToBase64(value: string): string {
  const buf = Buffer.from(value, "utf-8");
  return buf.toString("base64");
}

export function base64UrlToBase64(base64Url: string): string {
  let base64 = base64Url
    .replace(/-/g, "+")
    .replace(/_/g, "/");

  const remainder = base64Url.length % 4;

  if (remainder == 1) {
    throw new Error("Invalid base64url");
  }

  if (remainder > 0) {
    base64 += "=".repeat(4 - remainder);
  }

  return base64;
}

export function base64ToBase64Url(base64: string): string {
  return base64
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}
