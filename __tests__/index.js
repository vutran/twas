const twas = require('../dist');

describe('twas', () => {
    // now -- 2018-01-24T17:51:30+00:00 (ISO 8601)
    const NOW = 1516816290;
    const SECONDS = 1000;
    const MINUTES = SECONDS * 60;
    const HOURS = MINUTES * 60;
    const DAYS = HOURS * 24;
    const WEEKS = DAYS * 7;
    const MONTHS = DAYS * 30;
    const YEARS = MONTHS * 12;

    // overrides Date.now()
    Date.now = jest.fn(() => NOW);

    it('should mock Date.now()', () => {
        expect(Date.now()).toBe(NOW);
    });

    it('should be "just now"', () => {
        expect(twas(NOW)).toBe('just now');
        expect(twas(NOW - 1)).toBe('just now');
    });

    it('should be "5 seconds ago"', () => {
        expect(twas(NOW - 5 * SECONDS)).toBe('5 seconds ago');
    });

    it('should be "32 seconds ago"', () => {
        expect(twas(NOW - 32 * SECONDS)).toBe('32 seconds ago');
    });

    it('should be "1 minute ago"', () => {
        expect(twas(NOW - 1 * MINUTES)).toBe('1 minute ago');
    });

    it('should be "5 minutes ago"', () => {
        expect(twas(NOW - 5 * MINUTES)).toBe('5 minutes ago');
    });

    it('should be "15 minutes ago"', () => {
        expect(twas(NOW - 15 * MINUTES)).toBe('15 minutes ago');
    });

    it('should be "2 hours ago"', () => {
        expect(twas(NOW - 2 * HOURS)).toBe('2 hours ago');
    });

    it('should be "3 days ago"', () => {
        expect(twas(NOW - 3 * DAYS)).toBe('3 days ago');
    });

    it('should be "4 weeks ago"', () => {
        expect(twas(NOW - 4 * WEEKS)).toBe('4 weeks ago');
    });

    it('should be "5 months ago"', () => {
        expect(twas(NOW - 5 * MONTHS)).toBe('5 months ago');
    });

    it('should be "6 years ago"', () => {
        expect(twas(NOW - 6 * YEARS)).toBe('6 years ago');
    });

    it('should be 10 seconds ago', () => {
        const n = 1514764800; // Monday, January 1, 2018 12:00:00 AM
        expect(twas(n - 10 * SECONDS, n)).toBe('10 seconds ago');
    });
});
