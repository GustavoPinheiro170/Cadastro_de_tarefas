import React from 'react';
import axios from 'axios';
import { Component } from 'react';
import './style.css'

const baseUrl =  'http://localhost:3001/tarefa';
const initialState = {
    tarefa: { nome: '', dtentrega: '' , dtconclusao: ''},
    list: []
}

export default class tarefasCrud extends Component {



    validateUser(){
        const user = localStorage.getItem('nome')
        console.log(user )
    }
    

    state = { ...initialState}

    componentWillMount(){
        axios(baseUrl).then(resp => { 
            this.setState({ list: resp.data})
        })
    }

    clear() {
        this.setState({ tarefa: initialState.tarefa })
    }

    save(){
        const tarefa = this.state.tarefa
        const method = tarefa.id ?  'put' : 'post'
        const url = tarefa.id  ? `${baseUrl}/${tarefa.id}`: baseUrl
        axios[method](url, tarefa)
        .then(resp => {
            const list = this.getUpdatedList(resp.data)
            this.setState({ tarefa: initialState.tarefa, list})
        })
    }

    getUpdatedList(tarefa, add = true){
        const list = this.state.list.filter (t => t.id !== tarefa.id)
        if(add) list.unshift(tarefa)
        return list
    }
    updateField(event) {
        const tarefa = { ...this.state.tarefa }
        tarefa[event.target.name] = event.target.value
        this.setState ({tarefa})
    }
    renderForm(){
        return (
            <div className='Painel'>
                        <label htmlFor='nome'>Nome da Tarefa</label>
                      <input 
                      id='nome' 
                      type='text' 
                      name='nome' 
                      value={this.state.tarefa.nome}
                      onChange={e => this.updateField(e)}
                      placeholder ='Digite o nome da sua proxima tarefa'
                      />

                        <label htmlFor='dtentrega'>Data de entrega</label>
                        <input 
                      id='dtentrega' 
                      type='date' 
                      name='dtentrega' 
                      value={this.state.tarefa.dtentrega}
                      onChange={e => this.updateField(e)}
                      placeholder ='00/00/0000'
                      />
                    <label htmlFor='dtconclusao'>Data de conclusão</label>
                        <input 
                      id='dtconclusao' 
                      type='date' 
                      name='dtconclusao' 
                      value={this.state.tarefa.dtconclusao}
                      onChange={e => this.updateField(e)}
                      placeholder ='00/00/0000'
                      />
                  
                <div className='row-button'>
                    <button onClick={e => this.save(e)}>Salvar</button>
                    <button className='cancel' onClick={e => this.clear(e)}>Cancelar</button>
                    </div>
            </div>
        )
    }

    load(tarefa) {
        this.setState({ tarefa })
    }

    remove(tarefa){
        axios.delete(`${baseUrl}/${tarefa.id}`).then( resp => {
            const list = this.getUpdatedList(tarefa, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (

            <table className='table'>
                <thread className="thead-light">
                    <tr>
                        <th>Nome da Tarefa</th>
                        <th>Data de Entrega</th>
                        <th>Data de Conclusão</th>


                    </tr>
                </thread>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table> 
        );
    }

    renderRows(){
        return this.state.list.map(tarefa => {
            return (
                    <tr key={tarefa.id}>
                        <td>{tarefa.nome}</td>
                        <td>{tarefa.dtentrega}</td>
                        <td>{tarefa.dtconclusao}</td>
                        <td className='buttons_table'>
                            <button
                             className='edit'
                             onClick={() => this.load(tarefa)}>Editar</button>
                        </td>
                        <td>
                            <button 
                            className='cancel'
                            onClick={() => this.remove(tarefa)}
                            >Excluir</button>
                        </td>
                    </tr>    
            );
        })
    }
    render() {
        return (
            <main className='Painel-grid' >
                <>
                {this.renderTable()}
                
                </>
                <>
                {this.renderForm()}
                </>
            </main>
        );
    }
}
