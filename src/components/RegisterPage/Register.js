import React from 'react';

class Register extends React.Component {
    render() {
        return (
            <>
                <h1 className="green">Registro</h1>
                <form>
                    <div className="input_group">
                        <label htmlFor="user">Nombre de usuario: </label>
                        <input id="user" name="user" type="text" aria-label="Nombre de usuario" placeholder="Usuario" />
                        <p>De 3 a 14 carácteres. Letras, números y carácteres como (. , ; : - @).</p>
                    </div>
                    <div className="input_group">
                        <label htmlFor="email">Correo electrónico: </label>
                        <input id="email" name="email" type="email" aria-label="Correo electrónico"
                            placeholder="correo@correo.com" />
                        <p>¡Para estar en contacto en caso de problemas!</p>
                    </div>
                    <div className="input_group">
                        <label htmlFor="password">Contraseña: </label>
                        <input id="password" name="password" type="password" aria-label="Contraseña" placeholder="******" />
                        <p>Se recomiendan mayúsculas, minúsculas y números a la vez.</p>
                    </div>
                    <div className="input_group">
                        <label htmlFor="password2">Repite contraseña: </label>
                        <input id="password2" name="password2" type="text" aria-label="Repite contraseña"
                            placeholder="******" />
                        <p>Por seguridad.</p>
                    </div>

                    <div className="input_group">
                        <input id="accept" name="accept" type="checkbox" />
                        <label htmlFor="accept">Acepto los términos y condiciones</label>
                    </div>
                    <div className="input_group">
                        <input type="submit" value="Entrar" aria-label="Entrar" />
                    </div>
                </form>
            </>
        );
    }
}

export default Register;