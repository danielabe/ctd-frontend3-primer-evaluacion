import React, { Component } from "react";
import Historia from "./Historia";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio.js";
import data from "./data";

let historial = []

export default class Layout extends Component {
    constructor() {
        super();
        this.state = {
            nroHistoria: 1,
            historiaActual: this.buscarHistoria("1"),
            seleccionAnterior: ""
        };
    }

    componentDidUpdate() {
        this.state.seleccionAnterior !== "" ? historial.push(this.state.seleccionAnterior) : historial = []
    }

    buscarHistoria = (id) => {
        const historiaArray = data.filter(obj => obj.id === id)
        return historiaArray[0]
    }

    elegirOpcion = (opcion) => {
        if (this.state.nroHistoria === 5) {
            alert("Fin")
            const result = window.confirm("¿Querés comenzar de nuevo?");
            if(result) {
                historial = []
                this.setState({ nroHistoria: 1, historiaActual: this.buscarHistoria("1"), seleccionAnterior: "" })
            }
        } else {
            this.setState({
                nroHistoria: this.state.nroHistoria + 1,
                historiaActual: this.buscarHistoria(this.state.nroHistoria + 1 + opcion.toLowerCase()),
                seleccionAnterior: opcion
})
        }
    }

    render() {
        return (
            <>
                <Historia descripcion={this.state.historiaActual.historia} />
                <Opciones opcion={this.state.historiaActual} elegirOpcion={this.elegirOpcion} />
                <Recordatorio seleccionAnterior={this.state.seleccionAnterior} historial={historial} />
            </>
        );
    }
}