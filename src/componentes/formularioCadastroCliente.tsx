import { Component } from "react";
import M from 'materialize-css'; //importando o js do materialize

type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {
    
    componentDidMount() {

        const elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">sobrenome</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <select id="genero" defaultValue="">
                                <option value="" disabled>Escolha o gênero</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                            </select>
                            <label htmlFor="genero">Gênero</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="telefone" type="text" className="validate" />
                            <label htmlFor="telefone">telefone</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">e-mail</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Enviar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
