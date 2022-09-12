<?php
function addUser($name, $email, $password) {
    $users = get();
    $user = $users['users'];
    if(count($user) == 1 && empty($user[0])) {
        $user[0]['name'] = $name; $user[0]['email'] = $email; $user['0']['password'] = $password;
        $users['users'] = $user;
        put($users);
        $_SESSION['message'] = "Sign Up was successful";
        die(header("Location:login.php"));
    }elseif(count($user) >= 1 && !empty($user[0])) {
        foreach($user as $person) {
            if($person['email'] == $email) {
                $_SESSION['message'] = "User already exist";
                return;
            }else {
                $data['name'] = $name; $data['email'] = $email; $data['password'] = $password;
                array_push($users['users'], $data);
                put($users);
                $_SESSION['message'] = "Sign Up was successful";
                die(header("Location:login.php"));
            }
        }
    }
}

function access($email, $password) {
    $users = get();
    foreach($users['users'] as $item) {
        if(count($item) > 0) {
            if($item['email'] == $email && $item['password'] == $password) {
                $_SESSION['message'] = "Login was successful";
                $_SESSION['username'] = $item['name']; $_SESSION['email'] = $item['email'];
                if(array_key_exists('image', $item)) {
                    $_SESSION['image'] = $item['image'];
                }
                die(header("Location:index.php"));
            }elseif($item['email'] != $email || $item['password'] != $password) {
                $_SESSION['message'] = "User does not exist or wrong password";
            }
        }else {
            # code...
            $_SESSION['message'] = "User does not exist or wrong password";
        }
    }
}

function get() {
    $users = file_get_contents(__DIR__."/users.json");
    return json_decode($users, true);
}

function put($data) {
    $new = json_encode($data);
    file_put_contents(__DIR__."/users.json", $new);
}

function check($name, $email, $password) {
    if(!preg_match("/[a-zA-Z]+$/", $name)) {
         return $_SESSION['message'] = "Please Enter a valid name";
    }elseif(!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email)) {
         return $_SESSION['message'] = "Email address must be valid";
    }elseif(strlen($password) < 8) {
         return $_SESSION['message'] = "Password must be at least 8 characters";
    }
    addUser($name, $email, $password);
}

function upload($file, $email) {

    $users = get();
    for($i = 0; $i < count($users['users']); $i++) {
        if($users['users'][$i]['email'] == $email) {
            if(array_key_exists("image", $users['users'][$i])) {
                $_SESSION['message'] = "You already have a profile picture";
                die(header("Location:index.php"));
            }else {
                $image = checkupload($file);
                $users['users'][$i]['image'] = $image;
                put($users);
                $_SESSION['image'] = $image;
                $_SESSION['message'] = "Image successful uploaded";
                die(header("Location:index.php"));
            }
        }
    }
}

function checkupload($file) {
    $target_dir = "uploads/";
    $target_file = $target_dir.basename($file["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    //Check if image file is an actual image or fake
    $check = getimagesize($file["tmp_name"]);
    if($check == false) {
        $_SESSION['message'] = "File is not an image"; $uploadOk = 0;
        die(header("Location:index.php"));
    }else {
        $uploadOk = 1;
    }

    // Check file size
    if($file["size"] > 500000) {
        $_SESSION['message'] = "Image is too large";
        $uploadOk = 0;
        die(header("Location:index.php"));
    }

    //Formats allowed
    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType!= "gif" && $imageFileType = "svg") {
        $_SESSION['message'] = "Only JPG, JPEG, PNG, GIF $ SVG are allowed";
        $uploadOk = 0;
        die(header("Location:index.php"));
    }

    if($uploadOk == 0) {
        $_SESSION['message'] = "Image wasn't uploaded";
        die(header("Location:index.php"));
    }else {
        if(move_uploaded_file($file["tmp_name"], $target_file)) {
            return $target_file;
        }
    }
}
