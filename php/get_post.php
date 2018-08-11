<?php define("TITLE","GET & POST");
    if(isset($_POST["post_submit"]))
    {
        
        function validateFormData($formData)
        {
            $formData=trim(stripslashes(htmlspecialchars($formData)));
            return $formData;
        }
            
            //check to see if inputs are empty
            //create var iwth form data
            //wrap the data with our function
            if(!$_POST["post_name"])
            {
                $nameError="Please enter your name <br>";
            }
            else{
                $name =validateFormData($_POST["post_name"]);
            }
            
             if(!$_POST["post_email"]){
                $emailError="Please enter your email  <br>";
            }else{
                $email =validateFormData($_POST["post_email"]);
            }
        
    }
    
?>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!--
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../../../favicon.ico">
-->

    <title><?php echo TITLE;?></title>

    <!-- Bootstrap core CSS -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="style.css" rel="stylesheet">
  </head>

  <body>
    <div class="container">
        <h1><?php echo TITLE;?></h1>
        
        <h3>Submitted via get</h3>
        <form action="form_get.php" method="get">
            <input type="text" placeholder="Name" name="name">
            <input type="text" placeholder="Email" name="email">
            <input type="submit" name="form_submit">
        </form>
        
        <h3>Subitted via Post</h3>
        <form action="form_post.php" method="post">
            <input type="text" placeholder="Name" name="post_name">
            <input type="text" placeholder="Email" name="post_email">
            <input type="submit" name="post_submit">
        </form>
        
        <h3>Submitted to page hit self</h3>
        <small class="text_danger">* <?php echo $nameError ;?></small>
        <form action="<?php echo htmlspecialchars($_SERVE["PHP_SELF"] ); ?>" method="post">
            <input type="text" placeholder="Name" name="post_name">
            
            <small class="text_danger">* <?php echo $emailError ;?></small>
            <input type="text" placeholder="Email" name="post_email">
            <input type="submit" name="post_submit">
        </form>
        
        <?php 
            if(isset($_POST["post_submit"])){
                echo "your info";
                echo $name;
                echo $email;
            }
        ?>
       
    </div>  
      

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>')</script>
    <script src="../../assets/js/vendor/popper.min.js"></script>
    <script src="../../dist/js/bootstrap.min.js"></script>
  </body>
</html>