<?php
session_start();
include "connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["signup"])) {
        $fullname = $_POST["fullname"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        
        $role = 'user'; 
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO users (fullname, email, password, role) VALUES ('$fullname', '$email', '$hashed_password', '$role')";

        if ($conn->query($sql) === TRUE) {
            echo '<script>alert("Pendaftaran Berhasil!");</script>';
            header("Location: index.html");
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    // Bagian Login
    elseif (isset($_POST["login"])) {
        $email = $_POST["email"];
        $password = $_POST["password"];

        // Query untuk memeriksa login
        $stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
        $stmt->bind_param("s", $email);
        $stmt->execute();

        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            if (password_verify($password, $row["password"])) {
                $_SESSION['fullname'] = $row['fullname'];
                $_SESSION['role'] = $row['role'];

                if ($row['role'] === 'admin') {
                    echo '<script>alert("Login Admin Berhasil!");</script>';
                    header("Location: Insert.php");
                } else {
                    echo '<script>alert("Login Berhasil!");</script>';
                    header("Location: ../Profil.php");
                }
                exit();
            } else {
                echo '<script>alert("Gagal, Password Berbeda!");</script>';
            }
        } else {
            echo '<script>alert("User Belum Terdaftar!");</script>';
        }

        $stmt->close();
    }
}

$conn->close();
?>
