const is = (interval, cycle) =>
    cycle > interval ? Math.floor(cycle / interval) : 0;

module.exports = time => {
    const now = Date.now();
    const secs = (now - time) / 1000;
    const mins = is(60, secs);
    const hours = is(60, mins);
    const days = is(24, hours);
    const weeks = is(7, days);
    const months = is(30, days);
    const years = is(12, months);

    let amt = years;
    let cycle = 'years';

    if (years > 0) {
        amt = years;
        cycle = 'years';
    } else if (months > 0) {
        amt = months;
        cycle = 'months';
    } else if (weeks > 0) {
        amt = weeks;
        cycle = 'weeks';
    } else if (days > 0) {
        amt = days;
        cycle = 'days';
    } else if (hours > 0) {
        amt = hours;
        cycle = 'hours';
    } else if (mins > 0) {
        amt = mins;
        cycle = 'minutes';
    } else if (secs > 0) {
        amt = secs;
        cycle = 'seconds';
    }

    return `${amt} ${cycle} ago`;
};
