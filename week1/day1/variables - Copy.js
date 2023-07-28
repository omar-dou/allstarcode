// We're going to earn a profit by reselling tickets
// We bought some tickets to see Billie Eilish
// 4 regular tickets for $45 each and 2 front row tickets for $75 each
console.log('Cost:', (45 * 4 + 75 * 2));


// We're reselling the tickets for 50% above the original price
console.log('Selling price:', (45 * 4 + 75 * 2) * 1.5);


// But StubHub, the online ticket selling platform, charges a 20% seller fee
console.log('Seller fee:', (45 * 4 + 75 * 2) * 1.5 * 0.2);


// Our total profit:
console.log('Profit:', (45 * 4 + 75 * 2) * 1.5 - (45 * 4 + 75 * 2) - (45 * 4 + 75 * 2) * 1.5 * 0.2);