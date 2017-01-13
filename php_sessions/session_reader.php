<!-- Session Reader -->
<?php
session_start();
$name=$_GET['name'];
$age=$_GET['age'];
$job=$_GET['occupation'];
if (strlen($name)<2){
    $error="Error: Name must be at least 2 characters.  You entered $name";
    $_SESSION['errors']['name']=$error;
}
if (intval($age) != $age || intval($age) > 120) {
    $error="Error: Age must be a whole number below 120.  You entered $age";
    $_SESSION['errors']['age']=$error;
}
if (strlen($job)< 3) {
    $error="Error: Occupation must be at least 3 characters.  You entered $job";
    $_SESSION['errors']['job']=$error;
}
header('Location: session_setter.php');
print_r($_GET);
$_SESSION['name']=$_GET['name'];
$_SESSION['age']=$_GET['age'];
$_SESSION['occupation']=$_GET['occupation'];
?>