const express = require('express');
let sheetController;
const cors = require('cors');
const fs = require('fs').promises;
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const createCredentialsFile = async () => {
  const credentials = {
    type: process.env.GOOGLE_SERVICE_ACCOUNT_TYPE,
    project_id: process.env.GOOGLE_SERVICE_ACCOUNT_PROJECT_ID,
    private_key_id: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_ID,
    auth_uri: process.env.GOOGLE_SERVICE_ACCOUNT_AUTH_URI,
    token_uri: process.env.GOOGLE_SERVICE_ACCOUNT_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.GOOGLE_SERVICE_ACCOUNT_AUTH_PROVIDER_CERT_URL,
    client_x509_cert_url: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_CERT_URL
  };

  try {
    await fs.writeFile('credentials.json', JSON.stringify(credentials, null, 2));
    console.log('credentials.json file created successfully');
  } catch (error) {
    console.error('Error creating credentials.json file:', error);
  }
};

const checkAndCreateFiles = async () => {
  try {
    const credentialsExists = await fs.access('credentials.json').then(() => true).catch(() => false);
    if (!credentialsExists) {
      await createCredentialsFile();
    }
  } catch (error) {
    console.error('Error checking or creating files:', error);
  }
};

checkAndCreateFiles().then(() => {
  sheetController = require('./src/controllers/sheetController');
  app.post('/update-status', sheetController.saveStatus);
  app.get('/change-log', sheetController.logs);
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
