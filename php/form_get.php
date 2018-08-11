<html>
<body>
    <?php
    if(isset($_GET["form_submit"])){
    echo "your name is"    ;
    echo $_GET['name'];
    
    echo "your email is" ;
    echo $_GET['email'];
    }
    ?>
</body>
</html>