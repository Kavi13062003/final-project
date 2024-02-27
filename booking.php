<?php
// Retrieve form data
$n_value = $_POST['name'];
$e_value = $_POST['email'];
$date_value = $_POST['date'];
$des_value = $_POST['destinaion'];
$fe_value = $_POST['feadback']; 

// Connect to MySQL database
$con = mysqli_connect("localhost", "root", "", "project");

// Check connection


// SQL query to insert data into the database
$sql = "INSERT INTO bookingdata(Full_Name, Email_id, Date_of_Journey, Destination, Text_Area) 
        VALUES ('$n_value', '$e_value', '$date_value', '$des_value', '$fe_value')";

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
