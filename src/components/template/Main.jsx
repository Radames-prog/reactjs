import './Main.css'
import React from 'react'
import Header from './Header'
import Hextra from '../../components/EntradasSaidas'

export default props =>
    <React.Fragment>
        <Header {...props}/>
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
            <div>
                <Hextra />
            </div>
        </main>


    </React.Fragment>