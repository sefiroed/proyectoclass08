import express from 'express';
import Producto from './productos';

/** INICIALIZACION API con EXPRESS */
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);
/*Levantando el server*/
server.on('error', (err) => {
  console.log('ERROR ATAJADO', err);
});

/**
 * DATOS A MANIPULAR
 */
const miProducto = new Producto();
app.get('/api/productos/listar', (req, res) => {
  const data = miProducto.leer();
  if (data.length == 0) {
    res.json({
      msg: 'no hay productos cargados',
    });
  }
  res.json({
    data,
  });
});
/*Listando los productos*/
app.get('/api/productos/listar/:id', (req, res) => {
  const id = req.params.id;
  const data = miProducto.leerPorId(id);
  if (!data) {
    res.json({
      msg: 'Error producto no encontrado',
    });
  }
  res.json({
    data,
  });
});

/*Con los siguientes metodos podemos pasar el body via postman*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*Para agregar productos a nuestra api*/
app.post('/api/productos/guardar', (req, res) => {
  const body = req.body;
  const producto = miProducto.guardar(body);
  res.json({
    producto,
  });
});


