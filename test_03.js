// Change date to January 1, 2024
const now = new Date(); // Re-initialize if necessary
now.setFullYear(2024);
now.setMonth(0); // January
now.setDate(1);

// Display the new date in your local timezone
console.log("Changed date:", now.toLocaleDateString("en-US")); // Adjust locale as needed