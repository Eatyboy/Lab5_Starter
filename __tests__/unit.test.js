// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test("123-456-7890 is a valid phone number", () => {
    expect(isPhoneNumber("123-456-7890")).toBe(true)
});
test("+1-123-456-7890 is a valid phone number", () => {
    expect(isPhoneNumber("+1-123-456-7890")).toBe(true)
});
test("cake is an invalid phone number", () => {
    expect(isPhoneNumber("cake")).toBe(false)
});
test("111 is an invalid phone number", () => {
    expect(isPhoneNumber("111")).toBe(false)
});

test("test@gmail.com is a valid email", () => {
    expect(isEmail("test@gmail.com")).toBe(true)
});
test("test@test.gov is a valid email", () => {
    expect(isEmail("test@test.gov")).toBe(true)
});
test("bad is not a valid email", () => {
    expect(isEmail("bad")).toBe(false)
});
test("123456 is not a valid email", () => {
    expect(isEmail("123456")).toBe(false)
});

test("strong is a strong password", () => {
    expect(isStrongPassword("strong")).toBe(true)
});
test("Very_strong1 is a strong password", () => {
    expect(isStrongPassword("Very_strong1")).toBe(true)
});
test("s is not a strong password", () => {
    expect(isStrongPassword("s")).toBe(false)
});
test("correct-horse-battery-staple is not a strong password", () => {
    expect(isStrongPassword("correct-horse-battery-staple")).toBe(false)
});

test("01/23/4567 is a valid date", () => {
    expect(isDate("01/23/4567")).toBe(true)
});
test("1/1/1111 is a valid date", () => {
    expect(isDate("1/1/1111")).toBe(true)
});
test("1/1/1 is not a valid date", () => {
    expect(isDate("1/1/1")).toBe(false)
});
test("time is not a valid date", () => {
    expect(isDate("time")).toBe(false)
});

test("fff is a valid hex color", () => {
    expect(isHexColor("fff")).toBe(true)
});
test("a4a4a4 is a valid hex color", () => {
    expect(isHexColor("a4a4a4")).toBe(true)
});
test("f is not a valid hex color", () => {
    expect(isHexColor("f")).toBe(false)
});
test("cool_color is not a valid hex color", () => {
    expect(isHexColor("cool_color")).toBe(false)
});
