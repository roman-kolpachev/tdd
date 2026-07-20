import { describe, it, expect } from "vitest";
import { BowlingGame } from "./tdd";

describe("BowlingGame", () => {
  it("should exist and be creatable", () => {
    expect(BowlingGame).toBeDefined();

    const game = new BowlingGame();
    expect(game).toBeInstanceOf(BowlingGame);
  });

  it("should add player", () => {
    const game = new BowlingGame();
    game.addPlayer("John");
  });

  it("should return players and score for them", () => {
    const game = new BowlingGame();
    game.addPlayer("John");
    expect(game.getScore("John")).toBe(0);
  });

  it("should return an error if we try to get score for a player that does not exist", () => {
    const game = new BowlingGame();
    expect(() => game.getScore("John")).toThrowError();
  });

  it("if player hit 7 pins, the score should be 7", () => {
    const game = new BowlingGame();
    game.addPlayer("John");
    game.addScore("John", 7);
    expect(game.getScore("John")).toBe(7);
  });

  it("if player hit 7 pins and player doesn't exist, it should throw an error", () => {
    const game = new BowlingGame();
    expect(() => game.addScore("John", 7)).toThrowError();
  });

  it("calculate score for multiple player with multiple scores", () => {
    const game = new BowlingGame();
    game.addPlayer("John");
    game.addPlayer("Jane");
    game.addScore("John", 7);
    game.addScore("John", 3);
    game.addScore("Jane", 5);
    game.addScore("Jane", 2);
    expect(game.getScore("John")).toBe(10);
    expect(game.getScore("Jane")).toBe(7);
  });

  it("if player hit 10 pins in 2 rolls for a frame, next hit should be doubled", () => {
    const game = new BowlingGame();
    game.addPlayer("John");
    game.addScore("John", 5);
    game.addScore("John", 5);
    game.addScore("John", 5);
    expect(game.getScore("John")).toBe(20);
  });

  it("if player hit 10 pins in 2 rolls for a frame, next hit should be doubled. second round", () => {
    const game = new BowlingGame();
    game.addPlayer("John");
    // 1
    game.addScore("John", 7);
    game.addScore("John", 3);
    // 2
    game.addScore("John", 8);
    expect(game.getScore("John")).that.toBe(26);
    game.addScore("John", 2);
    // 3
    expect(game.getScore("John")).toBe(28);
    game.addScore("John", 7);
    expect(game.getScore("John")).toBe(42);
  });
});
