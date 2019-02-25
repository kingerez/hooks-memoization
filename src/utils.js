const colors = ['white', 'gold', 'beige', 'blueviolet', 'cadetblue', 'cornsilk', 'crimson', 'darkcyan', 'darkseagreen', 'dimgrey'];
const names = ['Erez', 'Lee', 'Jonathan', 'Eddie', 'Revital', 'Shani', 'Yuri', 'Michal', 'Yang', 'Eliran', 'Bar'];

export const randomizeColor = () => colors[Math.floor(Math.random() * colors.length)];

export const randomizeName = () => names[Math.floor(Math.random() * names.length)];