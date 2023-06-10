import { useState } from 'react' //importando o hook useState
import { Card } from '../../components/Card/card.jsx'
import './styles.css'





export function Home() {


  function horarioLocal() {
    const data = new Date()
    const minutes = data.getMinutes()
    const hour = data.getHours();
    let horario = `${hour}:${minutes}`
    return horario
  }

  /*O Hook useState 
  permite ter variáveis em componentes 
  funcionais. Você passa o estado inicial 
  para esta função e ele retorna uma variável com o 
  valor atual do estado (não necessariamente o estado inicial).*/

  /* Utilizando o useState, o estado tem dois 
  elementos onde o primeiro item do array é onde vai guardar o conteudo do estado
  e o segundo = Qual a função que atualiza esse estado.
  Padrão começar com set para o segundo estado*/

  const [studentName, setStudentName] = useState();

  return (
    <div className='container'>
      {/*usando studentName, toda vez que o conteudo do studentName mudar
                  irá refletir na interface*/}
      <h1>Nome: {studentName}</h1>
      <input type="text"
        placeholder='Digite um nome...'
        /*propriedade onChange, toda vez que o valor/conteudo desse input muda, 
        ele entrega um evento {e}, usar arrow function, para acessar dentro desse evento um target.value para entegrar
        o valor atual dentro do input. Função setStudentName parametro (e.target.value)*/

        /*pegando o conteudo atual do input e 
        atualizando o estado através da função setStudentName*/
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button">Adicionar</button>
      {/*Passando propriedades para o componente
    usar {} para usar uma variavel/função para o component*/}
      <Card name="Lucas" time={horarioLocal()} />
      <Card name="Rodrigo" time="8:34" />
    </div>
  )
}