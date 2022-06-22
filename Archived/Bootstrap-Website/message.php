<?php
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $phone = htmlspecialchars($_POST['phone']);
  $website = htmlspecialchars($_POST['website']);
  $message = htmlspecialchars($_POST['message']);

  if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $receiver = "hoodad94@gmail.com";
      $subject = "From: $name <$email>";
      $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\n\nMessage:\n$message\n\nRegards,\n$name";
      $sender = "From: $email";
      if(mail($receiver, $subject, $body, $sender)){
         echo "Ihre Nachricht wurde gesendet";
      }else{
         echo "Sorry, Ihre Nachricht konnte nicht gesendet werden!";
      }
    }else{
      echo "Geben Sie eine gültige E-Mail-Adresse an!";
    }
  }else{
    echo "E-Mail- und Nachrichtenfeld sind erforderlich!";
  }
?>
