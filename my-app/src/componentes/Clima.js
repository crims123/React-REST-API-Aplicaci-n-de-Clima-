import React from "react";

class Clima extends React.Component{
// creamos un metodo para mostrar el resultado
mostrarResultado =()=>{

// hacemos un destructor para separar todas la informacion que queremos de nuestra api
// yo solo voy  cojer 3 datos
const {name,weather,main} = this.props.resultado;
console.log(this.props.resultado);
		//hacemos una condicion para saber si mostrar o no el contenido del clima

		if (!name) {

			return null;
		}
		else{
			const kelvin = 273.5;
			return(
				
						<div className="row">
							<div className=" resultado col s12 m8 l6 offset-l3 ">
								<div className="card-panel light-blue align-center">
									<span className="white-text">
										


										<h2>Resultado de clima de {name} </h2>
										<p className="temperatura">
											Actual: {(main.temp - kelvin).toFixed(2)} &deg;C
										</p>
										<p className="temperatura">
											Temperatura Maxima: {(main.temp_max - kelvin).toFixed(2)} &deg;C
										</p>

										<p className="temperatura">
											Temperatura Minima: {(main.temp_min - kelvin).toFixed(2)} &deg;C
										</p>
									</span>

								</div>




							</div>

						</div>

				);
			
		}

		
}


render(){


	return(
		<div>
			{this.mostrarResultado()}
		</div>
		);
}

}

export default Clima;