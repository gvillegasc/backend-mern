const express = require('express');
const conectarDB = require('./config/db');

// crear el servidor
const app = express();

// Conectar a las base de datos
conectarDB();

// Habilidar express.json
app.use(
	express.json({
		extended: true,
	})
);

// puerto de la app
const PORT = process.env.PORT || 4000;

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios.route'));

// arrancar la app
app.listen(PORT, () => {
	console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
