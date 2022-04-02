import React, { Component } from "react";

export default class Opciones extends Component {

    render() {
        return (
            <div className="opciones">
                <div className="opcion">
                    <button id="A" className="botones" onClick={() => this.props.elegirOpcion("A")}>A</button>
                    <h2>{this.props.opcion.opciones.a}</h2>
                </div>
                <div className="opcion">
                    <button id="B" className="botones" onClick={() => this.props.elegirOpcion("B")}>B</button>
                    <h2>{this.props.opcion.opciones.b}</h2>
                </div>
            </div>
        );
    }
}