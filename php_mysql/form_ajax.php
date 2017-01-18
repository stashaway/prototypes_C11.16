<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script
            src="https://code.jquery.com/jquery-3.1.1.js"
            integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA="
            crossorigin="anonymous"></script>
    <title>Ajax with MySQLi</title>
    <script>
        $(document).ready(function(){
            $('button').click(callAjax);
        });
        function callAjax(){
            $.ajax({
                type: "POST",
                url: "index_insert.php",
                data: $('#formative').serialize(),
//                cache: false,
//                contentType: false,
//                processData: false,
                success:  function(result){
                    //alert("---"+data);
                    alert("Settings has been updated successfully.");
//                    window.location.reload(true);
                    console.log(result);
                }
            });
        }
    </script>
</head>
<body>
<form action="index_insert.php" method="post" id="formative">
    <input name="title" type="text">
    <label for="title">Title</label>
    <input name="details" type="text">
    <label for="details">Details</label>
    <input name="timestamp" type="text">
    <label for="timestamp">Time/Date</label>
    <input name="progress" type="text">
    <label for="progress">Progress</label>
    <button type="button">Submit</button>
</form>

</body>
</html>


