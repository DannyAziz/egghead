import { doesTimezoneWork } from "../src/lib/";

import Moment from "moment-timezone";

describe("doesTimezoneWork", () => {
  it("New York morning to London afternoon", () => {
    // 9am-12pm in New York should return true for 12pm-5pm in London

    expect(
      doesTimezoneWork(
        "Europe/London",
        Moment.tz("09:00", "HH:mm", "America/New_York"),
        Moment.tz("12:00", "HH:mm", "America/New_York"),
        "12:00",
        "17:00"
      )
    ).toBe(true);
  });

  it("SF Morning to Tokyo Early Morning", () => {
    // 9am-12pm in SF should return true for 12am-5am in Tokyo

    expect(
      doesTimezoneWork(
        "Asia/Tokyo",
        Moment.tz("09:00", "HH:mm", "America/Los_Angeles"),
        Moment.tz("12:00", "HH:mm", "America/Los_Angeles"),
        "00:00",
        "05:00"
      )
    ).toBe(true);
  });

  it("Tokyo Morning to Sf evening the day before", () => {
    // 9am-12pm in Tokyo should return true for 12pm-5pm in SF the day before

    expect(
      doesTimezoneWork(
        "America/Los_Angeles",
        Moment.tz("09:00", "HH:mm", "Asia/Tokyo"),
        Moment.tz("12:00", "HH:mm", "Asia/Tokyo"),
        "17:00",
        "21:00"
      )
    ).toBe(true);
  });

  it("Bali morning to NY late night", () => {
    // 9am-12pm in Bali should return true for 12am-5am in NY the day before

    expect(
      doesTimezoneWork(
        "America/New_York",
        Moment.tz("09:00", "HH:mm", "Asia/Singapore"),
        Moment.tz("12:00", "HH:mm", "Asia/Singapore"),
        "21:00",
        "00:00"
      )
    ).toBe(true);
  });

  it("Athens late afternoon to NY morning", () => {
    // 3pm-6pm in Athens should return true for 8am-11am in NY

    expect(
      doesTimezoneWork(
        "America/New_York",
        Moment.tz("15:00", "HH:mm", "Europe/Athens"),
        Moment.tz("18:00", "HH:mm", "Europe/Athens"),
        "08:00",
        "11:00"
      )
    ).toBe(true);
  });

  it("New york morning to london morning should be false", () => {
    // 9am-12pm in New York should return false for 9am-12pm in London

    expect(
      doesTimezoneWork(
        "Europe/London",
        Moment.tz("09:00", "HH:mm", "America/New_York"),
        Moment.tz("12:00", "HH:mm", "America/New_York"),
        "09:00",
        "12:00"
      )
    ).toBe(false);
  });

  it("Tokyo morning to SF morning should be false", () => {
    // 9am-12pm in Tokyo should return false for 9am-12pm in SF

    expect(
      doesTimezoneWork(
        "America/Los_Angeles",
        Moment.tz("09:00", "HH:mm", "Asia/Tokyo"),
        Moment.tz("12:00", "HH:mm", "Asia/Tokyo"),
        "09:00",
        "12:00"
      )
    ).toBe(false);
  });

  it("NY Afternoon to tokyo early morning should be true", () => {
    // 12pm-5pm in NY should return true for 12am-5am in Tokyo

    expect(
      doesTimezoneWork(
        "Asia/Tokyo",
        Moment.tz("12:00", "HH:mm", "America/New_York"),
        Moment.tz("17:00", "HH:mm", "America/New_York"),
        "00:00",
        "05:00"
      )
    ).toBe(true);
  });

  it("NY Afternoon to tokyo early morning should be true", () => {
    // 12pm-5pm in NY should return true for 12am-5am in Tokyo

    expect(
      doesTimezoneWork(
        "Asia/Tokyo",
        Moment.tz("12:00", "HH:mm", "America/New_York"),
        Moment.tz("17:00", "HH:mm", "America/New_York"),
        "21:00",
        "05:00"
      )
    ).toBe(true);
  });

  it("NY Afternoon to tokyo morning should be false", () => {
    // 12pm-5pm in NY should return true for 9am-12pm in Tokyo

    expect(
      doesTimezoneWork(
        "Asia/Tokyo",
        Moment.tz("12:00", "HH:mm", "America/New_York"),
        Moment.tz("17:00", "HH:mm", "America/New_York"),
        "09:00",
        "12:00"
      )
    ).toBe(false);
  });

  it("India morning to London afternoon should be false", () => {
    // 9am-12pm in India should return true for 12pm-5pm in London

    expect(
      doesTimezoneWork(
        "Europe/London",
        Moment.tz("09:00", "HH:mm", "Asia/Kolkata"),
        Moment.tz("12:00", "HH:mm", "Asia/Kolkata"),
        "12:00",
        "17:00"
      )
    ).toBe(false);
  });

  it("India morning to London early morning should be true", () => {
    // 9am-12pm in India should return true for 12am-5am in London

    expect(
      doesTimezoneWork(
        "Europe/London",
        Moment.tz("09:00", "HH:mm", "Asia/Kolkata"),
        Moment.tz("12:00", "HH:mm", "Asia/Kolkata"),
        "00:00",
        "05:00"
      )
    ).toBe(true);
  });

  it("New york 9-5 should be true for dubai 5pm-1am", () => {
    // 9am-5pm in NY should return true for 5pm-1am in Dubai

    expect(
      doesTimezoneWork(
        "Asia/Dubai",
        Moment.tz("09:00", "HH:mm", "America/New_York"),
        Moment.tz("17:00", "HH:mm", "America/New_York"),
        "17:00",
        "01:00"
      )
    ).toBe(true);
  });

  it("Dubai morning should be false for new york morning", () => {
    // 9am-12pm in Dubai should return false for 9am-12pm in NY

    expect(
      doesTimezoneWork(
        "America/New_York",
        Moment.tz("09:00", "HH:mm", "Asia/Dubai"),
        Moment.tz("12:00", "HH:mm", "Asia/Dubai"),
        "09:00",
        "12:00"
      )
    ).toBe(false);
  });
});
