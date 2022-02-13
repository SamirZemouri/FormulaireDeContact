<?php
var_dump($_POST);

$name=$_POST['nom'];
$email=$_POST['mail'];
$messaage=$_POST['message'];

if(isset($_POST["valider"])){

    if(isset($_POST["nom"]) AND isset($_POST["mail"]) AND isset($_POST["message"])){

        if(!empty($_POST["nom"]) AND !empty($_POST["mail"]) AND !empty($_POST["message"])){

            $header= "MIME-Version 1.0\r\n";
            $header.='Content-Type:text/html; charset="utf-8'."\n";

            $name=htmlspecialchars($_POST['nom']);
            $email=htmlspecialchars($_POST['mail']);
            $message=htmlspecialchars($_POST['message']);

            // Variables pour l'email
            $destinataire = 'samirspacetech@gmail.com';
            $contenu = '<p> Tu as un nouveau message!</p>'
            $contenu .= '.$nom.';
            $contenu .= '$.email.';
            $contenu .='$.message.';

            mail($destinataire, $nom, $contenu, $header);
            header("location:index.html");

            //Pour envoyer un email, le header Content-type doit être défini


        // }
        
        echo 'Nom:' . $name . ' eMail :' . $email . 'Message:' . $message;
    // }
}}}

?>
