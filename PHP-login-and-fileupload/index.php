<?php
require __DIR__."/users.php";

session_start();

if(!isset($_SESSION['email'])) {
    die(header('Location:login.php'));
}

$dp = isset($_SESSION['image']) ? "../" . $_SESSION['image'] : "../images/default.jpg";

if(isset($_POST['upload'])) {
    upload($_FILES['profile'], $_SESSION['email']);
}
// echo $_SESSION['image'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>profile</title>
    <style>
        .body {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div>
        <?= 
            isset($_SESSION['message']) ? $_SESSION['message']: "";
        ?>
    </div>
    <div class="body">
        <div>
            Welcome: <?=$_SESSION['username'];?>
        </div>
        <div>
            <form action="" method="post" enctype="multipart/form-data">
                <img src="<?= $dp ;?>" alt="" height="170px", width="150px"><br>
                <input type="file" name="profile" id="" style="background-color:blue;width:87px">
                <input type="submit" value="Upload" name="upload">
            </form>
        </div>
        <div>
            <a href="logout.php"><button>Logout</button></a>
        </div>
    </div>
</body>
</html>