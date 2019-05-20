import React from 'react';
import Logo from '../Generic/Logo';

class IndexHeader extends React.Component {
    render() {
        return (
            <header>
                <div className="header_container">
                    <Logo/>
                    <form>
                        <div className="input_group">
                            <label htmlFor="user">Usuario: </label>
                            <input id="user" name="user" type="text" aria-label="Usuario" placeholder="Usuario" />
                        </div>
                        <div className="input_group">
                            <label htmlFor="password">Contraseña: </label>
                            <input className="wrong" id="password" name="password" type="password" aria-label="Contraseña"
                                placeholder="Contraseña" />
                        </div>
                        <div className="input_group">
                            <input id="rememberme" name="rememberme" type="checkbox" />
                            <label htmlFor="rememberme">Recuérdame</label>
                            <input type="submit" value="Entrar" aria-label="Entrar" />
                        </div>
                    </form>
                </div>
            </header>
        );
    }
}

export default IndexHeader;