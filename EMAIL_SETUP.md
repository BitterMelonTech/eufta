# Email Setup Guide for PDF Requests

## Current Status
The PDF request form is set up to send notifications to **info@eufta.in** when customers request the 2026 Tariff Schedule PDF.

## Option 1: PHP Backend Integration (Your Preference)

Since you prefer PHP solutions, you can create a PHP endpoint to handle emails:

### 1. Create PHP Endpoint
Create `send-email.php` on your server:

```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$customerEmail = $data['email'] ?? '';

if (empty($customerEmail)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email is required']);
    exit;
}

// Send notification to info@eufta.in
$to = 'info@eufta.in';
$subject = "New PDF Request: 2026 Tariff Schedule - " . $customerEmail;
$message = "A customer has requested the 2026 Tariff Schedule PDF.\n\n";
$message .= "Customer Email: " . $customerEmail . "\n";
$message .= "Timestamp: " . date('Y-m-d H:i:s') . "\n\n";
$message .= "Action Required: Send the 2026 Tariff Schedule PDF to the customer.";

$headers = "From: noreply@eufta.in\r\n";
$headers .= "Reply-To: " . $customerEmail . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?>
```

### 2. Update API Route
Update `app/api/pdf-request/route.ts` to call your PHP endpoint:

```typescript
const response = await fetch('https://your-domain.com/send-email.php', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email })
});
```

## Option 2: Resend (Recommended for Next.js)

Resend is a modern email service that works great with Next.js:

1. Sign up at https://resend.com
2. Get your API key
3. Install: `npm install resend`
4. Update the API route to use Resend

## Option 3: SendGrid

Similar to Resend, SendGrid is another popular option.

## Current Implementation

Right now, the API route logs the request. You'll see it in your server logs. To receive actual emails, you need to:

1. **Set up one of the options above**, OR
2. **Check your server logs** for PDF requests until email is configured

## Testing

After setup, test by:
1. Going to the home page
2. Entering an email in the "Get the 2026 Tariff Schedule PDF" form
3. Submitting
4. Checking info@eufta.in inbox
