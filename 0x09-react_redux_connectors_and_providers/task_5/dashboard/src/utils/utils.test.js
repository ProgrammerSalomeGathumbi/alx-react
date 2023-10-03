import { getFullYear, getFooterCopy, getLatestNotifications } from "./utils";

test("returns current year", () => {
    expect(getFullYear().toBe(2023));
});

test("correct footer", () => {
    expect(getFooterCopy(True).toBe("Holberton School"));
    expect(getFooterCopy(False).toBe("Holberton School main dashboard"));
});

test("returns correct notifications", () => {
    expect(getLatestNotifications()).toBe(" <strong>Urgent requirement</strong> - complete by EOD");
});
