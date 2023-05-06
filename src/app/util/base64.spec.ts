import { base64ToBase64Url, base64UrlToBase64, base64UrlToString, stringToBase64Url } from "./base64";

describe("string <-> base64Url", () => {
  it("should return encoded string", () => {
    expect(stringToBase64Url("Hallo")).toBe("SGFsbG8");
  });

  it("should return decoded string", () => {
    expect(base64UrlToString("SGFsbG8")).toBe("Hallo");
  });
});

describe("base64 <-> base64Url", () => {
  it("should return base64url string", () => {
    expect(base64ToBase64Url("SGFsbG8=")).toBe("SGFsbG8");
  });

  it("should return base64 string", () => {
    expect(base64UrlToBase64("SGFsbG8")).toBe("SGFsbG8=");
  });

  it("should fail because of invalid base64url", () => {
    expect(() => base64UrlToBase64("SGFsb")).toThrowError();
  });
});
