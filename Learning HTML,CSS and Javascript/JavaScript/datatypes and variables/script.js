// ============ DATA TYPES AND VARIABLES ============

const busID = "42A";
let passengerCount = 10;
let isDelayed = false;
let driverName = null;

console.log(typeof busID);          // "string"
console.log(typeof passengerCount); // "number"
console.log(typeof isDelayed);      // "boolean"
console.log(typeof driverName);     // "object" (quirk — remember this!)


// ============ OPERATORS AND COMPARISONS ============

let speedLimit = 50;
let currentSpeedStr = "50";

console.log(speedLimit == currentSpeedStr);  // true  — == converts types before comparing
console.log(speedLimit === currentSpeedStr); // false — === checks type AND value, no conversion