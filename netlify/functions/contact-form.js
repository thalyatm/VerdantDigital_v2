const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { name, business, email, phone, industry, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !business || !email) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Build email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #0D0D0F; color: #00FF9D; padding: 20px; text-align: center; }
          .content { background: #f9f9f9; padding: 20px; }
          .field { margin: 15px 0; padding: 15px; background: white; border-left: 3px solid #00FF9D; }
          .label { font-weight: bold; color: #555; display: block; margin-bottom: 5px; }
          .value { color: #333; }
          .footer { text-align: center; padding: 20px; color: #888; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>From Verdant Digital Website</p>
          </div>
          <div class="content">
            <h2>Contact Details</h2>
            <div class="field">
              <span class="label">Name:</span>
              <span class="value">${name}</span>
            </div>
            <div class="field">
              <span class="label">Business:</span>
              <span class="value">${business}</span>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <span class="value">${email}</span>
            </div>
            ${phone ? `
            <div class="field">
              <span class="label">Phone:</span>
              <span class="value">${phone}</span>
            </div>
            ` : ''}
            ${industry ? `
            <div class="field">
              <span class="label">Industry:</span>
              <span class="value">${industry}</span>
            </div>
            ` : ''}
            ${message ? `
            <div class="field">
              <span class="label">Message:</span>
              <span class="value">${message}</span>
            </div>
            ` : ''}
          </div>
          <div class="footer">
            <p>Verdant Digital | hello@verdantdigital.com.au</p>
            <p>This is an automated notification from your website contact form.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email to thalya@verdantlabs.com.au
    await resend.emails.send({
      from: 'Verdant Digital <noreply@verdantdigital.com.au>',
      to: 'thalya@verdantlabs.com.au',
      replyTo: email, // Allow easy reply to the customer
      subject: `New Contact Form - ${name} from ${business}`,
      html: emailHtml,
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        success: true,
        message: 'Contact form submitted successfully'
      })
    };
  } catch (error) {
    console.error('Error processing contact form:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: 'Failed to send contact form',
        details: error.message
      })
    };
  }
};
