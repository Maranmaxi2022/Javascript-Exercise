// Current date and time
const now = new Date();
console.log("Current date and time:", now);

// Specific date: December 25, 2023
const specificDate = new Date(2023, 11, 25); // Note: month is 0-indexed, so 11 is December
console.log("Specific date:", specificDate);

const specificDate_02 = new Date(2024,2,21);
console.log("Specific date:",specificDate_02);

// Formatting date to 'MM/DD/YYYY' style
const formattedDate = now.toLocaleDateString("en-US");
console.log("Formatted date:", formattedDate);

// Formatting time
const formattedTime = now.toLocaleTimeString("en-US");
console.log("Formatted time:", formattedTime);

// Getting Individual Components
console.log("Year:", now.getFullYear());
console.log("Month (0-indexed):", now.getMonth()); // 0 = January
console.log("Day:", now.getDate());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());


// Add 7 days to the current date
const futureDate = new Date(now);
futureDate.setDate(now.getDate() + 7);
console.log("Future date:", futureDate);
