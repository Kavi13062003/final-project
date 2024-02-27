<?php
// Retrieve form data
$username_value = $_POST['username'];
$email_value = $_POST['email'];
$password_value = $_POST['password'];
$phone_value = $_POST['phone']; // corrected the variable name

// Connect to MySQL database
$con = mysqli_connect("localhost", "root", "", "project");


// SQL query to insert data into the database
$sql = "INSERT INTO registerdata(User_Name, Email_id, Password, Phone_Number) 
        VALUES ('$username_value', '$email_value', '$password_value', '$phone_value')";

// Execute SQL query
$r = mysqli_query($con, $sql);

// Check if query was successful
if ($r) {
    echo "Successfully Submitted";
} else {
    echo "Not Added";
}

// Close database connection
mysqli_close($con);
?>
