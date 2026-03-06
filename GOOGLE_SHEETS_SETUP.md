# Google Sheets Integration Setup

This guide will help you set up Google Sheets integration with the Chris Tect Solution website contact form.

## Overview

The contact form on your website sends data directly to a Google Sheet using Google Apps Script webhooks. This keeps everything in the cloud without requiring a traditional backend.

## Setup Steps

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Chris Tect Solution - Contacts"
3. In the first row, add these headers:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Company`
   - E1: `Message`

### 2. Create Google Apps Script

1. In your Google Sheet, click `Extensions` → `Apps Script`
2. Replace the default code with this script:

```javascript
function doPost(e) {
  try {
    // Get the sheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Add a new row with the form data
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.company,
      data.message
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({ 
      success: false, 
      error: error.toString() 
    }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click the "Deploy" button (top right)
4. Select "New deployment" → Choose "Web app"
5. Set "Execute as" to your Google account
6. Set "Who has access" to "Anyone"
7. Click "Deploy"
8. Copy the deployment URL that appears (it will look like: `https://script.google.com/macros/d/{SCRIPT_ID}/userweb?v=1`)

### 3. Configure Environment Variable

1. In your Vercel project (or local `.env.local`), add:
   ```
   GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/d/{SCRIPT_ID}/userweb?v=1
   ```
   
   Replace `{SCRIPT_ID}` with the ID from the deployment URL.

2. If you're using Vercel, add this to your project settings under "Environment Variables"

### 4. Test the Integration

1. Go to your website's contact page
2. Fill out the form and submit
3. Check your Google Sheet - the data should appear in a new row within a few seconds

## How It Works

1. User fills out the contact form on the website
2. Form data is sent to `/api/contact` (Next.js API route)
3. The API route validates the data and forwards it to the Google Apps Script webhook
4. Google Apps Script receives the data and adds it to the Google Sheet
5. User sees a success message

## Troubleshooting

### Data not appearing in Google Sheet

1. Check that the `GOOGLE_SHEETS_WEBHOOK_URL` environment variable is set correctly
2. Verify the Google Apps Script deployment is set to "Anyone" for access
3. Check your browser console for any error messages (F12)
4. Check the server logs in Vercel Dashboard

### CORS Errors

The Google Apps Script should handle CORS automatically, but if you encounter issues:
1. Make sure the Apps Script deployment is set to "Web app"
2. Try deploying again with a new version

### Script not running

1. Go back to the Google Apps Script editor
2. Click "Run" to test the script manually
3. Check for any error messages in the Execution log

## Advanced Setup (Optional)

### Send Email Notification

You can enhance the Google Apps Script to also send you an email:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Add row to sheet
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.company,
      data.message
    ]);
    
    // Send email notification
    GmailApp.sendEmail(
      "your-email@gmail.com",
      `New Contact Form Submission from ${data.name}`,
      `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nMessage: ${data.message}`
    );
    
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      success: false, 
      error: error.toString() 
    }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Format Timestamps

To make timestamps more readable in Google Sheets, you can format the Timestamp column:
1. Select column A
2. Right-click → "Format cells"
3. Choose "Date time" format

## Security Notes

- The Google Apps Script is public (anyone can POST to it), but this is intentional for a contact form
- All data sent through the contact form is stored in your Google Sheet
- Make sure to keep your Google Sheet private and only share it with authorized people
- The GOOGLE_SHEETS_WEBHOOK_URL should be kept in environment variables and never committed to git

## Support

For issues with Google Apps Script, refer to:
- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Google Sheets API Documentation](https://developers.google.com/sheets)

For issues with the Next.js integration, check:
- [Next.js API Routes Documentation](https://nextjs.org/docs/api-routes/introduction)
