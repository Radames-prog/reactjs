import React, { Component } from 'react'
import './EntradasSaidas.css'

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
            extraDia:''

        }

        this.calcular = this.calcular.bind(this)
        


    }
    calcular(){
this.hora1 = this.state.ent1
this.hora1 = this.hora1.split(':')
let hent1 = this.hora1[0]
let ment1 = this.hora1[1]
console.log(hent1, ment1)

this.sai1 = this.state.sai1
this.sai1 = this.sai1.split(':')
let hsai1 = this.sai1[0]
let msai1 = this.sai1[1]
console.log(hsai1, msai1)

this.hora2 = this.state.ent2
this.hora2 = this.hora2.split(':')
let hent2 = this.hora2[0]
let ment2 = this.hora2[1]
console.log(hent2, ment2)

this.sai2 = this.state.sai2
this.sai2 = this.sai2.split(':')
let hsai2 = this.sai2[0]
let msai2 = this.sai2[1]
console.log(hsai2, msai2)

this.hora3 = this.state.ent3
this.hora3 = this.hora3.split(':')
let hent3 = this.hora3[0]
let ment3 = this.hora3[1]
console.log(hent3, ment3)

this.sai3 = this.state.sai3
this.sai3 = this.sai3.split(':')
let hsai3 = this.sai3[0]
let msai3 = this.sai3[1]
console.log(hsai3, msai3)


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
  console.log(ent1, sai1)
  console.log(ent2, sai2)
  console.log(ent3, sai3) 
  let totaldia = (sai1 - ent1) + (sai2 - ent2) + (sai3 - ent3)
  let tdiaHora = totaldia / 60
  
  let horInt = parseInt(tdiaHora)
  let min = tdiaHora - horInt
  let decimalParaMin = min * 60
  let inteMin= parseInt(decimalParaMin) // converte munutos para inteiro
  
  this.horasTotal = `${horInt}:${inteMin}`
  console.log(this.horasTotal)
  //console.log(`${horInt}:${inteMin}`)
  

}else{
  alert('Informa corretamento os campos')
}



    }
    render(){
        return(
<div className='container'>
<form>
   
<label>
  Entrada:
  <input type="time" id='ent1' name="ent1"defaultValue='ent1'
  onChange={(event)=>{this.setState({ent1:event.target.value})}} />
</label>
<label>
  Saida:
  <input type="time" id='sai1'name="sai1"defaultValue='sa1' 
  onChange={(event)=>{this.setState({sai1:event.target.value})}}/>
</label>
<label>
  Entrada:
  <input type="time" id='ent2' name="ent2" defaultValue='ent2' 
  onChange={(event)=>{this.setState({ent2:event.target.value})}}/>
</label>
<label>
  Saida:
  <input type="time" id='sai2' name="sai2"defaultValue='sai2' 
   onChange={(event)=>{this.setState({sai2:event.target.value})}}/>
</label>
<label>
  Entrada:
  <input type="time" id='ent3' name="ent3"defaultValue='ent3' 
  onChange={(event)=>{this.setState({ent3:event.target.value})}}/>
</label>
<label>
  Saida:
  <input type="time" id='sai3' name="sai3"defaultValue='sai3' 
  onChange={(event)=>{this.setState({sai3:event.target.value})}}/>
</label>
<input type="button" value="Calcular" value='Cacular'onClick= {this.calcular} />

        <h2>{`Valor toral da hora: ${this.horasTotal}`}</h2>
</form>
</div>
        )
    }

}
