<!-- Session Setter -->
<?php
session_start();
?>
<html>
<form action="session_reader.php">
    <div>
        <input type="text" name="name" placeholder="Name" value="<?PHP
            if (isset($_SESSION['name'])) {
                print $_SESSION['name'];
            } else {
                print "";
            }
        ?>">
        <?php
        if (isset($_SESSION['errors']['name'])) {
            print_r($_SESSION['errors']['name']);
            $_SESSION['errors']['name']="";
        }
        ?>
    </div>
    <div>
        <input type="text" name="age" placeholder="Age" value="<?PHP
        if (isset($_SESSION['age'])) {
            print $_SESSION['age'];
        } else {
            print "";
        }
        ?>">
        <?php
        if (isset($_SESSION['errors']['age'])) {
            print_r($_SESSION['errors']['age']);
            $_SESSION['errors']['age']="";
        }
    ?>
    </div>
    <div>
        <input type="text" name="occupation" placeholder="Occupation" value="<?PHP
        if (isset($_SESSION['occupation'])) {
            print $_SESSION['occupation'];
        } else {
            print "";
        }
        ?>">
        <?php
        if (isset($_SESSION['errors']['job'])) {
            print_r($_SESSION['errors']['job']);
            $_SESSION['errors']['job']="";
        }
        ?>
    </div>
    <button>Submit</button>
</form>
</html>