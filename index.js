const express = require('express');
const cors = require('cors');
const sendEmail = require('./emailSender');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  try {
    const { email, documentName } = req.body;
    await sendEmail(email, documentName);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error al enviar correo:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
