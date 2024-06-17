<?php
session_start();

if (empty($_SESSION['fullname'])) {
    header("Location: index.php");
    exit();
}
?>

<!DOCTYPE html>
<html  >
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="generator" content="Mobirise v5.8.14, mobirise.com">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
  <link rel="shortcut icon" href="assets/images/logo.png" type="image/x-icon">
  <meta name="description" content="">
  <title>Page 2</title>
  <link rel="stylesheet" href="assets/web/assets/mobirise-icons2/mobirise2.css">
  <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-grid.min.css">
  <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-reboot.min.css">
  <link rel="stylesheet" href="assets/dropdown/css/style.css">
  <link rel="stylesheet" href="assets/socicon/css/styles.css">
  <link rel="stylesheet" href="assets/theme/css/style.css">
  <link rel="preload" href="https://fonts.googleapis.com/css?family=Bellota+Text:300,300i,400,400i,700,700i&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bellota+Text:300,300i,400,400i,700,700i&display=swap"></noscript>
  <link rel="preload" as="style" href="assets/mobirise/css/mbr-additional.css"><link rel="stylesheet" href="assets/mobirise/css/mbr-additional.css" type="text/css">

  
  
  
</head>
<body>
  
  <section data-bs-version="5.1" class="menu menu1 cid-ufWrwG7gtV" once="menu" id="menu1-t">
    

    <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
        <div class="container">
            <div class="navbar-brand">
                
                <span class="navbar-caption-wrap"><a class="navbar-caption text-black display-7" >Pesona Bandung</a></span>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true"><li class="nav-item"><a class="nav-link link text-black display-7" href="#top">Home</a></li><li class="nav-item"><a class="nav-link link text-black display-7" href="index.html#features12-6">Destinasi</a></li>
                    <li class="nav-item"><a class="nav-link link text-black display-7" href="index.html#features3-4">Fasilitas</a></li>
                    <li class="nav-item"><a class="nav-link link text-black display-7" href="index.html#form5-d">Transportasi</a>
                    </li></ul>
                <div class="icons-menu">
                    <a class="iconfont-wrapper" href="profil.html" target="_blank">
                        <span>
                            <img src="assets/images/akun-removebg-preview.png" alt="logoakun kecil" style="height: 40px; width: auto;">
                        </span>
                    </a>
                </div>
                
            </div>
        </div>
    </nav>
</section>

<section data-bs-version="5.1" class="features16 cid-ufWrwH2Sln" id="features17-u">
    <div class="container">
        <div class="content-wrapper">
            <div class="row align-items-center">
                <div class="col-12 col-lg-6">
                    <div class="image-wrapper">
                        <img src="assets/images/transportasi/hero-terminal.jpg" alt="Mobirise Website Builder">
                    </div>
                </div>
                <div class="col-12 col-lg">
                    <div class="text-wrapper">
                        <h6 class="card-title mbr-fonts-style display-5">
                            <strong> <?php echo "<h1>Hallo, " . $_SESSION['fullname'] ."!". "</h1>"; ?></strong></h6>
                        <p class="mbr-text mbr-fonts-style mb-4 display-4">
                            Ucapan Terimakasih Lucu Lucuan</p>
                        <div class="mbr-section-btn mt-3"><a class="btn btn-secondary display-4" href="Admin/logout.php">Logout</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="footer7 cid-ufWrwHZs6d" once="footers" id="footer7-v">

    

    

    <div class="container">
        <div class="media-container-row align-center mbr-white">
            <div class="col-12">
                <p class="mbr-text mb-0 mbr-fonts-style display-7">
                    © 2024 - PesonaBandung/Destini by Sinyosimpers - All Rights Reserved
                </p>
            </div>
        </div>
    </div>
<script src="assets/bootstrap/js/bootstrap.bundle.min.js"></script>  <script src="assets/smoothscroll/smooth-scroll.js"></script>  <script src="assets/ytplayer/index.js"></script>  <script src="assets/dropdown/js/navbar-dropdown.js"></script>  <script src="assets/theme/js/script.js"></script>  
  
  
</body>
</html>