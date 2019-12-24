import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from '../components/home/Home'
import UserCrud from '../components/users/UsersCrud'
import CalcHextra from '../components/EntradasSaidas'

export default props =>
    <Switch>
        <Route exact path='/' componoent={Home} />
        <Route path='/users' componoent={UserCrud} />
        <Route path='/calhextra' componoent={CalcHextra} />
        <Redirect from='#' to='/'/>

    </Switch>