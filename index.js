const { SESv2Client, SendEmailCommand } = require("@aws-sdk/client-sesv2");

const ses = new SESv2Client({
  endpoint: 'http://localhost:8005',
  region: 'aws-ses-v2-local',
  credentials: { accessKeyId: 'ANY_STRING', secretAccessKey: 'ANY_STRING' },
});

(async function main() {
  await ses.send(new SendEmailCommand({
    FromEmailAddress: 'sender@example.com',
    Destination: { ToAddresses: ['receiver@example.com'] },
    Content: {
      Simple: {
        Subject: { Data: 'This is the subject1' },
        Body: { Text: { Data: 'This is the email contents' } },
      }
    },
  }))
})()
