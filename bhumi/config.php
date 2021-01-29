<?php 

$server = "localhost";
$username = "root";
$password = "";
$database = "database_bhumi";

$conn = mysqli_connect($server, $username, $password, $database);

if (!$conn) { 
    die("<script>alert('Terjadi masalah dengan koneksi.')</script>");
}

?>