import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

export default _props =>
<aside className="menu-area">
    <nav className="menu">
        <Link to="/">
            <i className="fa fa-home"></i> Início
        </Link>
        <Link to="/users">
            <i className="fa fa-users"></i> Usuário
        </Link>
        <Link to='/hextra'>
            <i className="fa fa-calculator"></i> Calc Horas
        </Link>
    </nav>
</aside>