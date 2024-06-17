<?php
session_start();

if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'admin') {
    header("Location: ../login.php"); 
    exit(); 
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Pesona Bandung">
    <meta name="keywords" content="Pesona Bandung">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insert Data</title>
    <link rel="stylesheet" href="./assets/css/style.css">
</head>
<body>
    <h1>Insert Data Page - Admin Only</h1>
    <form id="insertForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>
        
        <label for="description">Description:</label>
        <textarea id="description" name="description" required></textarea><br><br>
        
        <label for="imagesurl">Image URL:</label>
        <input type="text" id="imagesurl" name="imagesurl" required><br><br>
        
        <label for="lokasi">Location:</label>
        <input type="text" id="lokasi" name="lokasi" required><br><br>
        
        <label for="rating">Rating:</label>
        <input type="text" id="rating" name="rating" required><br><br>
        
        <label for="category">Category:</label>
        <input type="text" id="category" name="category" required><br><br>
        
        <label for="link">Destination Link:</label>
        <input type="text" id="link" name="link" required><br><br>
        
        <button type="submit">Submit</button>
    </form>

    <script>
        document.getElementById('insertForm').addEventListener('submit', function(event) {
            event.preventDefault(); 

            const data = {
                name: document.getElementById('name').value,
                description: document.getElementById('description').value,
                imagesurl: document.getElementById('imagesurl').value,
                lokasi: document.getElementById('lokasi').value,
                rating: document.getElementById('rating').value,
                category: document.getElementById('category').value,
                link: document.getElementById('link').value
            };

            fetch('https://pesonabandung-a88c9-default-rtdb.asia-southeast1.firebasedatabase.app/Destinasi.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Data successfully inserted!');
                
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Failed to insert data.');
            });
        });
    </script>
</body>
</html>
