import './Main.css'
import React from 'react'
import Header from './Header'
import HoraExtra from '../../components/EntradasSaidas'


export default props =>
    <React.Fragment>
        <Header {...props}/>
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
                {HoraExtra}
            </div>
            
        </main>


    </React.Fragment>