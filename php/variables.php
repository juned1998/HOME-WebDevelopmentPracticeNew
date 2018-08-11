<?php define("TITLE","PHP VARIABLES");?>
<!doctype html>
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
        <h1>PHP VARIABLES</h1>
        <?php
            //simple array
            $user= array( " Junaid" , "19", "male");
            echo $user[0];
            
            //array accessing with keys
            $person=array(
                name=>"junaid", age=>18 ,gender=>"male"
            );
            echo("<br>My name is ".$person[name].".My age is ".$person[age]);
            
            //Multi-dimensional Array
            $employees=array(
                                array( name=>"John", age=>18, gender=>"male"),
                                array(name=>"Heinstein", age=>30, gender=>"male")
                            );
            
            echo("employee no.01<br>".$employees[0][name]."<br>".$employees[0][age]."<br>".$employees[0][gender]."<br><br>");
            echo("employee no.02<br>".$employees[1][name]."<br>".$employees[1][age]."<br>".$employees[1][gender]."<br><br>");
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