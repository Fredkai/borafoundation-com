<?php
/**
 * BORA FOUNDATION - Contact Form Handler
 * Sends form submissions to info@borafoundation.com
 */

// Security headers
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');

// Configuration
$to_email = "info@borafoundation.com";
$from_email = "noreply@borafoundation.com"; // Change this to your domain email
$subject_prefix = "New Contact Form Submission - BORA Foundation";

// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

// Get form data and sanitize
$name = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
$email = isset($_POST['email']) ? trim(filter_var($_POST['email'], FILTER_SANITIZE_EMAIL)) : '';
$subject = isset($_POST['subject']) ? trim(strip_tags($_POST['subject'])) : '';
$message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : '';

// Validation
$errors = [];

if (empty($name)) {
    $errors[] = "Name is required";
}

if (empty($email)) {
    $errors[] = "Email is required";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Invalid email format";
}

if (empty($subject)) {
    $errors[] = "Subject is required";
}

if (empty($message)) {
    $errors[] = "Message is required";
}

// If there are validation errors
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Validation failed",
        "errors" => $errors
    ]);
    exit;
}

// Prepare email content
$email_subject = $subject_prefix . ": " . $subject;

$email_body = "
New contact form submission from BORA Foundation website

From: $name
Email: $email
Subject: $subject

Message:
$message

---
This email was sent from the BORA Foundation website contact form.
Sender IP: {$_SERVER['REMOTE_ADDR']}
Time: " . date('Y-m-d H:i:s') . "
";

// Email headers
$headers = [
    "From: $from_email",
    "Reply-To: $email",
    "X-Mailer: PHP/" . phpversion(),
    "Content-Type: text/plain; charset=UTF-8"
];

// Send email
$mail_sent = mail($to_email, $email_subject, $email_body, implode("\r\n", $headers));

// Response
if ($mail_sent) {
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Thank you for your message! We will get back to you soon."
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Failed to send email. Please try again later or contact us directly at info@borafoundation.com"
    ]);
}
?>
