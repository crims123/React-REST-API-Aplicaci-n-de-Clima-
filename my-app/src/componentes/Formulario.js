import React from "react";

class Formulario extends React.Component{


//creamos los refs

ciudadRef= React.createRef();
paisRef = React.createRef();


// creamos el metodo para recibir el formulario

buscarClima = (e)=>{
	e.preventDefault();
	// cremos el objeto par recibir el clima

	const respuesta = {
		ciudad:this.ciudadRef.current.value,
		pais:this.paisRef.current.value,
	}

	// lo enviamos al padre por props

	this.props.datosConsulta(respuesta);

}


render(){
	return(
		<div className="contenedor-form">
		
			<div className="container">

				<div className="row">
					<form onSubmit={this.buscarClima} >
						<div className="input-field col s12 m8 l4 offset-m2">

							<input ref={this.ciudadRef} id="ciudad" type="text" />
							<label htmlFor="ciudad">Ciudad:</label>


						</div>

						<div className="input-field col s12 m8 l4 offset-m2">

							<select ref={this.paisRef} >
								<option value="" defaultValue>Elige un pais</option>
								<option value="AR">Argentina</option>
								<option value="CO">Colombia</option>
								<option value="CR">Costa Rica</option>
								<option value="ES">España</option>
								<option value="US">Estados Unidos</option>
								<option value="MX">Mexico</option>
								<option value="PE">Peru</option>
							
							</select>
							<label htmlFor="pais">Pais: </label>


						</div>

						<div className="input-field col s12 m8 l4 offset-2 buscador">

						<input type="submit" className="waves-effect waves-light btn-large yellow accent-4" 
						 value="Buscar..."/>
						</div>


					</form>
				
			</div>
			</div>

		</div>
		);
}

}

export default Formulario;