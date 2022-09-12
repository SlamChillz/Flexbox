<?php
session_start();
require __DIR__."/users.php";

$email = "";

if($_SERVER['REQUEST_METHOD'] == "POST") {
    $email = $_POST['email']; $password = $_POST['password'];
    // print_r($_POST);
    if(empty($email) || empty($password)) {
        $_SESSION['message'] = "Enter your username and password";
    }else {
        access($email, $password);
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/login.css">
    <title>LogIn</title>
</head>
<body>
    <div>
        <?= 
            isset($_SESSION['message']) ? $_SESSION['message']: "";
        ?>
    </div>
    <div style="margin-bottom:10px;">
        <div style="text-align:right;margin:20px;float:right"><a href="signup.php" style="text-decoration:none;"><button style="background-color:#405d9b;border-radius:5px;border:1px solid;color:white;padding:10px;font-weight:bold;">Sign Up</button></a></div>
    </div>
        <!-- Login -->
        <h1 class="green" style="margin-top:50px;text-align:center;font-size:50px;">Log In</h1>
        <div style="text-align:center;margin-top:50px;">
            <form action="" method="POST">
                <input type="email" name="email" value="<?php echo $email; ?>" placeholder="Email"><br />
                <input type="password" name="password" placeholder="Password"><br />
                <input type="submit" name="login" value="Log In" style="background-color:#405d9b;color:white;font-weight:bold;">
            </form>
        </div>
</body>
</html>