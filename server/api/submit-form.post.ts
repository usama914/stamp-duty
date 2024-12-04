import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const referenceNumber = `SD${Date.now()}${Math.floor(Math.random() * 1000)}`;
    
    const emailContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; padding: 20px; background-color: #f8f9fa; margin-bottom: 30px; }
            .reference { color: #666; font-size: 14px; text-align: center; margin-bottom: 30px; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
            th { background-color: #f8f9fa; text-align: left; padding: 12px; }
            td { padding: 12px; border-bottom: 1px solid #eee; }
            .section-title { background-color: #f1f1f1; font-weight: bold; }
            .footer { text-align: center; font-size: 12px; color: #666; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="color: #333; margin: 0;">New Lead Received</h2>
            </div>
            
            <div class="reference">
              <strong>Reference Number:</strong> ${referenceNumber}
            </div>

            <table>
              <tr class="section-title">
                <td colspan="2">Property Details</td>
              </tr>
              <tr>
                <th>Property Purchased within 4 years</th>
                <td>${body.propertyPurchased}</td>
              </tr>
              <tr>
                <th>Purchase Method</th>
                <td>${body.purchaseMethod}</td>
              </tr>
              <tr>
                <th>Probate Purchase</th>
                <td>${body.probatePurchase}</td>
              </tr>
              <tr>
                <th>Repairs Required</th>
                <td>${body.repairsRequired}</td>
              </tr>

              <tr class="section-title">
                <td colspan="2">Purchase Details</td>
              </tr>
              <tr>
                <th>Law Firm Name</th>
                <td>${body.lawFirmName}</td>
              </tr>
              <tr>
                <th>Property Cost</th>
                <td>${body.propertyCost}</td>
              </tr>
              <tr>
                <th>Purchase Date</th>
                <td>${body.purchaseMonth}</td>
              </tr>

              <tr class="section-title">
                <td colspan="2">Contact Information</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>${body.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>${body.email}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>${body.phone}</td>
              </tr>
              <tr>
                <th>Best Time to Call</th>
                <td>${body.callTime}</td>
              </tr>
              <tr>
                <th>Postcode</th>
                <td>${body.postcode}</td>
              </tr>

              <tr class="section-title">
                <td colspan="2">Marketing Information</td>
              </tr>
              <tr>
                <th>Source</th>
                <td>${body.utm_source || 'Direct'}</td>
              </tr>
              <tr>
                <th>Medium</th>
                <td>${body.utm_medium || 'None'}</td>
              </tr>
              <tr>
                <th>Campaign</th>
                <td>${body.utm_campaign || 'None'}</td>
              </tr>
              <tr>
                <th>Term</th>
                <td>${body.utm_term || 'None'}</td>
              </tr>
              <tr>
                <th>Content</th>
                <td>${body.utm_content || 'None'}</td>
              </tr>
            </table>

            <div class="footer">
              <p>© ${new Date().getFullYear()} Stamp Duty Claims. All Rights Reserved.</p>
              <p>This email and any files transmitted with it are confidential and intended solely for the use of the individual or entity to whom they are addressed.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO,
      bcc: process.env.MAIL_BCC,
      subject: `New Stamp Duty Claim Enquiry - Ref: ${referenceNumber}`,
      html: emailContent,
    });

    return { success: true, referenceNumber };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw createError({
      statusCode: 500,
      message: 'Failed to send email',
    });
  }
});