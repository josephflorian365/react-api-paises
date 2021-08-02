import React, { Component } from 'react';

class Paises extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listaPaises: [],
        }
    }

    componentDidMount() {
        const ruta = "https://restcountries.eu/rest/v2/all";
        fetch(ruta)
            .then(rest => rest.json())
            .then((result) => {
                this.setState({
                    listaPaises: result
                }
                )
                console.log(result);
            })

    }

    dibujarTabla(datosTabla) {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Capital</th>
                        <th>Sub region</th>
                    </tr>
                </thead>
                <tbody>
                    {datosTabla.filter(dato => dato.subregion === 'Southern Asia' ).map(itemPais =>
                        <tr key={itemPais.alpha3Code}>
                            <td>{itemPais.name}</td>
                            <td>{itemPais.capital}</td>
                            <td>{itemPais.subregion}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    render() {
        const contenidoTabla = this.dibujarTabla(this.state.listaPaises)

        return (

            <section className="padded">
                <div className="container">
                    <h2>Paises</h2>
                    {contenidoTabla}
                </div>
            </section>
        );
    }
}

export default Paises;
