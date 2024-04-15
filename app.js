const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

// Configuración de la conexión a la base de datos
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jaasiel',
    database: 'usersLogin'
});

// Middleware para analizar datos de formularios
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para manejar el inicio de sesión
app.post('/login', (req, res) => {
    const correo = req.body.mail;
    const contraseña = req.body.password;

    // Consulta SQL para verificar las credenciales
    const sql = `SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?`;
    conexion.query(sql, [correo, contraseña], (error, resultados) => {
        if (error) {
            res.status(500).send('Error en el servidor.');
        } else {
            if (resultados.length > 0) {
                res.send('Inicio de sesión exitoso.');
            } else {
                res.send('Credenciales incorrectas.');
            }
        }
    });
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});

app.post('/registro', (req, res) => {
  const nombre = req.body.name_input;
  const correo = req.body.email_input;
  const contraseña = req.body.password;
  const confirmarContraseña = req.body.password_confirm;

  // Verificar si las contraseñas coinciden
  if (contraseña !== confirmarContraseña) {
      return res.status(400).send('Las contraseñas no coinciden.');
  }

  // Consulta SQL para insertar el nuevo usuario en la base de datos
  const sql = `INSERT INTO users(users_name, users_mail, users_password) VALUES (?, ?, ?)`;
  conexion.query(sql, [users_name, users_mail, users_password], (error, resultados) => {
      if (error) {
          res.status(500).send('Error en el servidor.');
      } else {
          res.send('Usuario registrado exitosamente.');
      }
  });
});