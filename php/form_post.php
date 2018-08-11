<html>
<body>
    <?php
    if(isset($_POST["post_submit"]))
    {
    echo "your name is" ;   
    echo $_POST["post_name"];
    
    echo "your email is" ;
    echo $_POST["post_email"];
    }
    ?>
</body>
</html>