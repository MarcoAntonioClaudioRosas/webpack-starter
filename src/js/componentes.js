import '../css/componentes.css';
//import webpack from '../assets/img/webpack.jpg';

export const saludar = (nombre) =>{
    console.log('Creando etiqueta H1');

    const h1=document.createElement('h1');
    h1.innerText = `Hola ${nombre}!!!`;

    document.body.append(h1);

    //creando  imagendcd 
    //const img = document.createElement('img');
    //img.src = webpack;
    //document.body.append(img);
}