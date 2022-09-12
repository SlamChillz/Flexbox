<?php
session_start();
require __DIR__."/users.php";
$username = ""; $email = ""; $alert = "";

if($_SERVER['REQUEST_METHOD'] == "POST") {
    $username = $_POST['username']; $email = $_POST['email']; $password = $_POST['password'];
    // print_r($_POST);
    if(empty($username) || empty($email) || empty($password)) {
        $_SESSION['message'] = "Fill all fields!";
    }else {
        check($username, $email, $password);
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/signup.css">
    <title>Sign Up</title>
</head>
<body>
    <div>
        <?= 
            isset($_SESSION['message']) ? $_SESSION['message']: "";
        ?>
    </div>
    <div style="margin-bottom:10px;">
        <div style="text-align:right;margin:20px;float:right"><a href="login.php" style="text-decoration:none;"><button style="background-color:#405d9b;border-radius:5px;border:1px solid;color:white;padding:10px;font-weight:bold;">Log In</button></a></div>
    </div>
    <!-- Signup -->
    <h1 class="green" style="margin-top:100px;text-align:center;font-size:50px;">Sign Up</h1>
    <div style="text-align:center;margin-top:50px;">
        <form action="" method="POST">
            <input type="text" name="username" id="name" value="<?php echo $username; ?>" placeholder="Username"><br />
                <span style="margin-left:-280px;color:#405d9b">Must be letters only</span><br />
            <input type="email" name="email" id="email" value="<?php echo $email; ?>" placeholder="Enter email" style="margin-top:20px;"><br />
                <span style="margin-left:-220px;color:#405d9b">Email address must be valid</span><br />
            <input placeholder="Password" type="password" name="password" id="password" style="margin-top:20px;"><br />
                <span style="margin-left:-250px;color:#405d9b">At least 8 characters long</span><br />
            <input type="submit" name="login" value="Sign Up" style="background-color:#405d9b;color:white;font-weight:bold;margin-top:20px;">
        </form>
    </div>
</body>
</html>