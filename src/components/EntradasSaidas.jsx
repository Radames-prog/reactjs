import React, { Component } from 'react'
import './EntradasSaidas.css'
import Main from './template/Main'

const headerProps = {
  icon: 'calculator',
  title:'Calculadora',
  subtitle:'Calculo de Horas Extras'
}


export default class Horas extends Component{
   
    constructor(props){
        super(props)

        this.state = {
            ent1:'',
            sai1:'',
            ent2:'',
            sai2:'',
            ent3:'',
            sai3:'',
            totaldia:'',
            extraDia:'',
            baseDia:''

        }

        this.calcular = this.calcular.bind(this)
        
        

    }
    calcular(){
this.hora1 = this.state.ent1
this.hora1 = this.hora1.split(':')
let hent1 = this.hora1[0]
let ment1 = this.hora1[1]


this.sai1 = this.state.sai1
this.sai1 = this.sai1.split(':')
let hsai1 = this.sai1[0]
let msai1 = this.sai1[1]


this.hora2 = this.state.ent2
this.hora2 = this.hora2.split(':')
let hent2 = this.hora2[0]
let ment2 = this.hora2[1]


this.sai2 = this.state.sai2
this.sai2 = this.sai2.split(':')
let hsai2 = this.sai2[0]
let msai2 = this.sai2[1]


this.hora3 = this.state.ent3
this.hora3 = this.hora3.split(':')
let hent3 = this.hora3[0]
let ment3 = this.hora3[1]


this.sai3 = this.state.sai3
this.sai3 = this.sai3.split(':')
let hsai3 = this.sai3[0]
let msai3 = this.sai3[1]



if(hent1,hent2,hent3,msai1,ment2,msai3 >= 0){
//trnasforma horas em minutos
  let h1 = hent1 * 60
  let h2 = hent2 * 60
  let h3 = hent3 * 60

  let s1 = hsai1 * 60
  let s2 = hsai2 * 60
  let s3 = hsai3 * 60

// transforma string em float e soma tudo transformando tudo em min
  let ent1 = parseFloat(h1) + parseFloat(ment1)
  let ent2 = parseFloat(h2) + parseFloat(ment2)
  let ent3 = parseFloat(h3) + parseFloat(ment3)

  let sai1 = parseFloat(s1) + parseFloat(msai1)
  let sai2 = parseFloat(s2) + parseFloat(msai2)
  let sai3 = parseFloat(s3) + parseFloat(msai3)

  let totalD = (sai1 - ent1) + (sai2 - ent2) + (sai3 - ent3)
  let tdiaHora = totalD / 60
  
  let horInt = parseInt(tdiaHora)
  let min = tdiaHora - horInt
  let decimalParaMin = min * 60
  let inteMin= parseInt(decimalParaMin) // converte minutos para inteiro
  
  let totaldia = `${horInt}:${inteMin}`
  this.setState({totaldia})
  
 
 //console.log(this.totaldiaH)
  

}else{
  alert(`Informe corretamente todos campos, nos campos em que não tiver o que informar informe 00:00`)
}


    }
    render(){
        return(
          
                
         <Main {...headerProps}>  
<div className='container'>
<form className="form">
<label>
  Entrada:
  <input type="time"className="input" id='ent1' name="ent1"defaultValue=''
  onChange={(event)=>{this.setState({ent1:event.target.value})}} />
</label>
<label>
  Saida:
  <input type="time" id='sai1'name="sai1"defaultValue='' 
  onChange={(event)=>{this.setState({sai1:event.target.value})}}/>
</label>
<label>
  Entrada:
  <input type="time" id='ent2' name="ent2" defaultValue='' 
  onChange={(event)=>{this.setState({ent2:event.target.value})}}/>
</label>
<label>
  Saida:
  <input type="time" id='sai2' name="sai2"defaultValue='' 
   onChange={(event)=>{this.setState({sai2:event.target.value})}}/>
</label>
<label>
  Entrada:
  <input type="time" id='ent3' name="ent3"defaultValue='' 
  onChange={(event)=>{this.setState({ent3:event.target.value})}}/>
</label>
<label>
  Saida:
  <input type="time" id='sai3' name="sai3"defaultValue='' 
  onChange={(event)=>{this.setState({sai3:event.target.value})}}/>
</label>



        <h2>
        <label>
  Base por dia:
  <input type="namber" id='base' name="base"defaultValue='8' 
  onChange={(event)=>{this.setState({baseDia:event.target.value})}}/>
</label>
        <input type="button" className='button' value="Calcular" value='Cacular'onClick= {this.calcular} />
          {` Horas total Dia: ${this.state.totaldia}`}</h2>
</form>
</div>
</Main>

        )
    }

}

