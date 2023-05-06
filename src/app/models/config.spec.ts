import { fromBase64Url } from "./config";

describe("fromBase64Url", () => {
  it("should transform base64url", () => {
    const config = fromBase64Url("dXJsO2FkbWluO3Bhc3N3b3Jk");

    expect(config).toEqual({
      url: "url",
      authUsername: "admin",
      authPassword: "password"
    });
  });

  it("should fail because of invalid format", () => {
    expect(() => fromBase64Url("dXJsO2FkbWlu")).toThrowError();
  });
});
