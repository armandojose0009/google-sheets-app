const { authorize, spreadsheetId } = require('./../helpers/googleHelper');
const Joi = require('joi');

const updateStatusSchema = Joi.object({
  leadId: Joi.string().required(),
  newStatus: Joi.string().valid('Contactado', 'Esperando respuesta', 'En llamada', 'Win', 'Lose').required(),
});

const saveStatus = async (req, res) => {
  
  const { error, value } = updateStatusSchema.validate(req.body);
  
  if (error) {
    return res.status(400).send(error.details);
  }

  const { leadId, newStatus } = value;
  const doc = await authorize();
  await doc.loadInfo();

  const sheetCalls = doc.sheetsByTitle['Llamadas'];
  const rows = await sheetCalls.getRows();
  const rowToUpdate = rows.find(row => row._rawData[1] === leadId);

  if (rowToUpdate) {
    rowToUpdate._rawData[8] = newStatus;
    await rowToUpdate.save();

    const sheetLogs = doc.sheetsByTitle['Logs'];
    const timestamp = new Date().toISOString();
    const data ={ timestamp, leadId, newStatus };
    await sheetLogs.addRow(data, {insert: true})

    return res.status(200).send();
  } else {
    return res.status(404).send('Email Not Found');
  }
};

const logs = async (req, res) => {
  const doc = await authorize();
  await doc.loadInfo();

  const sheet = doc.sheetsByTitle['Logs'];
  await sheet.loadCells();
  const data = await sheet.getRows();
  const resp = data.map( (row) => row._rawData );
  res.status(200).json(resp);
}

module.exports = { saveStatus, logs }