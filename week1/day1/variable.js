// We're going to earn a profit by reselling tickets
// We bought some tickets to see Billie Eilish
// 4 regular tickets for $45 each and 2 front row tickets for $75 each
cost = 45 * 4 + 75 * 2
console.log('Cost:', (cost));


// We're reselling the tickets for 50% above the original price
ncost =  (cost) * 1.5
console.log('Selling price:', (ncost));


// But StubHub, the online ticket selling platform, charges a 20% seller fee
console.log('Seller fee:', ncost * 0.2);


// Our total profit:
console.log('Profit:', ncost - cost - ncost * 0.2);