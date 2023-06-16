import { getFallbackFullStackDate } from '../boot/certificate';
import { fullStackChallenges } from './fixtures';

describe('boot/certificate', () => {
  describe('getFallbackFullStackDate', () => {
    it('should return the date of the latest completed challenge', () => {
      const latestChallengeDate = getFallbackFullStackDate(fullStackChallenges);
      expect(typeof latestChallengeDate).toBe('number');
      expect(latestChallengeDate).toBeGreaterThan(0);
    });
  });
});
