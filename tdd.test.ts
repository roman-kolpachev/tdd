import { describe, it, expect } from 'vitest';
import { BowlingGame } from './tdd';

describe('BowlingGame', () => {
	it('should exist and be creatable', () => {
		expect(BowlingGame).toBeDefined();

		const game = new BowlingGame();
		expect(game).toBeInstanceOf(BowlingGame);
	});
});
