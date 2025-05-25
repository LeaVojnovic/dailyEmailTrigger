import { EmailClient } from "@azure/communication-email";
import { config } from "dotenv";
import { render } from "@react-email/render";
import { MyTemplate } from "../emails/MyTemplate";
import * as React from 'react';

config();

const connectionString = process.env.COMMUNICATION_SERVICES_CONNECTION_STRING;

if (!connectionString) {
  throw new Error("COMMUNICATION_SERVICES_CONNECTION_STRING is not set in .env");
}

const emailClient = new EmailClient(connectionString);

async function sendEmail() {
  const html = await render(<MyTemplate />);

  const message = {
    senderAddress: "dostava@e-racun.iskap.hr",
    content: {
      subject: "Obavijest o računima za ovjeru",
      html
    },
    recipients: {
      to: [
        {
          address: "lvojnovic22@unizd.hr",
          displayName: "Lea Vojnović"
        }
      ]
    }
  };

  try {
    const poller = await emailClient.beginSend(message);
    const result = await poller.pollUntilDone();

    if (result.status === "Succeeded") {
      console.log("Email poslan uspješno:", result.id);
    } else {
      console.error("Slanje nije uspjelo:", result.error);
    }
  } catch (err) {
    console.error("Greška prilikom slanja:", err);
  }
}

if (require.main === module) {
  sendEmail(); // omogućuje ručno pokretanje preko npx ts-node
}

export default sendEmail;
