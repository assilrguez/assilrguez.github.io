// Function to calculate age
function calculateAge() {
    // Constant date of birth (November 24, 2005)
    var dob = new Date("2005-11-24");
    
    // Get the current date
    var currentDate = new Date();
    
    // Calculate the age by subtracting the birth year from the current year
    var age = currentDate.getFullYear() - dob.getFullYear();
    
    // Check if the birth month and day are ahead of the current month and day
    if (currentDate.getMonth() < dob.getMonth() ||
        (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
      age--;
    }
    
    // Display the age in the span element with id "age"
    document.getElementById("age").textContent = age;
}
calculateAge();