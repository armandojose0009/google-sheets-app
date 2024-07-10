const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');
const credentials = require('../../credentials.json');


const spreadsheetId = '1Y7a7pwLpv2HN7k7xdC8c5Y1UogbLVHZeZKoF3wzlQVc'
const authorize = async () => {
  const serviceAccountAuth = new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
    ],
  });
  const doc = new GoogleSpreadsheet(spreadsheetId, serviceAccountAuth);
  return doc;
}


module.exports = { authorize }