<?php
if($_POST) {
  $to = "gourmetmapofma@gmail.com"; // your mail here
  $fname = filter_var($_POST["firstname"], FILTER_SANITIZE_EMAIL);
  $lname = filter_var($_POST["lastname"], FILTER_SANITIZE_EMAIL);
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $comment = filter_var($_POST["comment"], FILTER_SANITIZE_STRING);
  $headers = "From: $email"; 
  $subject = "You have a message sent from your site"; 
  $body = "E-mail: $email\n\nFrom: First Name: $fname + Last Name: $lname\n\nMessage: $comment";
  
  if(mail($to, $subject, $body, $headers)) {
    $output = json_encode(array('success' => true));
    die($output);
  } else {
    $output = json_encode(array('success' => false));
    die($output);
  }
}
?>







<!--

<?php
/*    $to = "mail@yourdomain.com"; 
    $from = $_REQUEST['email']; 
    $name = $_REQUEST['name']; 
    $headers = "From: $from"; 
    $subject = "You have a message sent from your site"; 
    $fields = array(); 
    $fields{"name"} = "name"; 
    $fields{"email"} = "email"; 
    $fields{"phone"} = "phone"; 
    $fields{"message"} = "message";
    $body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }
    $send = mail($to, $subject, $body, $headers);
*/
?>




<?php
// Fetching Values from URL.
/* $fname = $_POST['firstname'];
$lname = $_POST['lastname'];
$email = $_POST['email1'];
$comment = $_POST['comment1'];
$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
// After sanitization Validation is performed
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
if (!preg_match("/^[0-9]{10}$/", $contact)) {
echo "<span>* Please Fill Valid Contact No. *</span>";
} else {
$subject = $lname;
// To send HTML mail, the Content-type header must be set.
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From:' . $email. "\r\n"; // Sender's Email
$headers .= 'Cc:' . $email. "\r\n"; // Carbon copy to Sender
$template = '<div style="padding:50px; color:white;">Hello ' . $lname . ',<br/>'
. '<br/>Thank you...! For Contacting Us.<br/><br/>'
. 'First Name:' . $fname . '<br/>'
. 'Last Name:' . $lname . '<br/>'
. 'Email:' . $email . '<br/>'
. 'Comment:' . $comment . '<br/><br/>'
. 'This is a Contact Confirmation mail.'
. '<br/>'
. 'We Will contact You as soon as possible .</div>';
$sendmessage = "<div style=\"background-color:#7E7E7E; color:white;\">" . $template . "</div>";
// Message lines should not exceed 70 characters (PHP rule), so wrap it.
$sendmessage = wordwrap($sendmessage, 70);
// Send mail by PHP Mail Function.
mail("lisazhad@yahoo.com", $subject, $sendmessage, $headers);
echo "Your comment has been received, We will contact you soon.";
}
} else {
echo "<span>* invalid email *</span>";
} */
?>