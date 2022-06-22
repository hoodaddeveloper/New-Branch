<html>
    <head>
       <meta charset="UTF-8">
       <title>UMBRELLA CORPORATION</title>
    </head>
    <body>
       <style>
       body {
       background-image:url('umb.jpg');
       background-repeat:no-repeat;
       }
       </style>
        <a name="Start"></a>
    <?php
        echo '****** WELCOME TO UMBRE<i>LL</i>A ******'.'<br/>';
        echo '**************************************'.'<br/>';
        echo "Datum und Uhrzeit: ".date("Y-m-d h:i:s").'<br/>';
        
        $h = date ('H');
            if ($h>=5 && $h<=10)
                echo 'Guten Morgen'.'<br/>';
            if ($h>=11 && $h<=13)
                echo 'Guten Tag'.'<br/>';
            if ($h>=14 && $h<=17)
                echo 'Guten Abend'.'<br/>';
            if ($h>=18 && $h<=23)
                echo 'Gute Nacht'.'<br/>';
                
        $start_time = 9;
        $end_time = 18;
            if ($h >= $start_time && $h < $end_time)
                echo 'Ich bin jetzt online ';
                else
                echo 'Ich bin jetzt nicht online ';
                    
        $w = date ('w');
        $wochentag = '';
            switch ($w) {
            case 1:
        $wochentag = 'Montag';
            break;
            case 2:
        $wochentag = 'Dienstag';
            break;
            case 3:
        $wochentag = 'Mittwoch';
            break;
            case 4:
        $wochentag = 'Donnerstag';
            break;
            case 5:
        $wochentag = 'Freitag';
            break;
            case 6:
        $wochentag = 'Samstag';
            break;
            case 0:
        $wochentag = 'Sonntag';
            }                                        
        echo 'und heute ist '.$wochentag.'.'.'<br/>';
        echo '**************************************'.'<br/>';    
        $heute = date("d.m.Y");
        setlocale(LC_TIME, 'de_DE', 'deu_deu');
        if (isset($_GET["Datum"]) && strlen($_GET["Datum"]) > 0)
        {
            $wochentag = strftime('%A', strtotime($_GET["Datum"]));
            $get = ($_GET["Datum"]);
            
        if (date("d.m.Y", strtotime($get)) == $get) {
                echo "Date is valid<br><br>";

            if (strtotime($get) < strtotime($heute))
                echo 'Das war ein '.$wochentag.'<br/>';
            if (strtotime($get) == strtotime($heute))
                echo 'Heute ist ein '.$wochentag.'<br/>';
            if (strtotime($get) > strtotime($heute))
                echo 'Das wird ein '.$wochentag.'<br/>';
            
                echo "<a href=\"index.php\">Go Back</a><br><br>";
            if (strtotime($get) > 0)
                echo "It works<br><br>";
            else
                echo "it doesn't work<br><br>";
              } 
            else 
              {
                echo "Date is not valid<br><br>";
                echo "<a href=\"index.php\">zur&uuml;ck</a><br><br>";
              }
            }
        else
            {
            echo "<form action=\"index.php\" method=\"GET\">";
            echo "Datum: <input type=\"text\" name=\"Datum\">";
            echo "<input type=\"submit\">";
            echo "</form>";
        }
        echo '**************************************'.'<br/><br/>'; 
    ?>
        <a href="Login.html" title="Login into Umbrella Corp.">Click Here to login into UMBRE<i>LL</i>A</a><br><br>
        <a href="About.html" title="See more about the Umbrella Corp.">Click Here to see about UMBRE<i>LL</i>A</a><br>
        <p style="width:200px; height:1200px;"><b>Our Business Is Life Itself</b></p>
        <a href='#Start'>Go to Top</a>
    </body>
</html>
