function sell(cantidad, venta){

   if(venta < cantidad){
       return venta * .05
   }

   else {
      const porcentaje_sin_decimales = venta * .07;
      return porcentaje_sin_decimales.toFixed();

}
}

module.exports = sell