<?php
$host = "localhost"; 
$username = "root"; 
$password = ""; 
$database = "Pesona_Bandung"; 
// Buat koneksi
$conn = new mysqli($host, $username, $password, $database);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>
