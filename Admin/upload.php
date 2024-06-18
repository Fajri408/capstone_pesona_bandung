<?php
// Koneksi ke database
require_once 'connect.php';

// Ambil data dari form
$lokasi = $_POST['lokasi'];
$gambar = $_FILES['gambar'];

// Proses upload gambar
$uploadOk = 1;
$gambar_path = '../assets/images/';
$target_file = $gambar_path . basename($gambar["name"]);
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
$check = getimagesize($gambar["tmp_name"]);
if ($check !== false) {
    $uploadOk = 1;
} else {
    echo "File is not an image.";
    $uploadOk = 0;
}

// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}

// Check file size
if ($gambar["size"] > 5000000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}

// Allow certain file formats
if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif") {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
} else {
    if (move_uploaded_file($gambar["tmp_name"], $target_file)) {
        // Masukkan data ke database
        $nama_file = basename($gambar["name"]);
        $sql = "INSERT INTO locations (lokasi, gambar) VALUES ('$lokasi', '$nama_file') ON DUPLICATE KEY UPDATE gambar='$nama_file'";
        if ($conn->query($sql) === TRUE) {
            echo "Gambar berhasil diupload dan data berhasil disimpan.";
            header("Location: ../Profil.php");
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>
