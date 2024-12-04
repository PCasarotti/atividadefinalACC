const express = require("express");
const cors = require("cors");
const app = express();
const porta = 3001;
app.use(express.json());

app.use(cors({ origin: "http://localhost:3000", credentials: true }));


const musicaRoutes = require("./routes/musicaRoutes");
app.use("/musica", musicaRoutes);



app.listen(porta, () => {
  console.log("Servidor escutando na porta:", porta);
});
