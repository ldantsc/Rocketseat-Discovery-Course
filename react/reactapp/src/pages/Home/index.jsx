import { useState, useEffect } from 'react' //importando o hook useState
import { Card } from '../../components/Card/card.jsx'
import './styles.css'


/*  Imutabilidade
O conteúdo da variável não deve ser modificado e sim substituído.*/


export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
                     {/*estado anterior + novo estado
                    colocar o estado anterior com spread operator(...)
                    Porque se não cria um vetor do estado anterior dentro de um novo vetor
                    ex sem spread operator : [['Rodrigo'], Lucas]*/}
    setStudents(prevState => [...prevState, newStudent])
  };


  /*O Hook useState 
  permite ter variáveis em componentes 
  funcionais. Você passa o estado inicial 
  para esta função e ele retorna uma variável com o 
  valor atual do estado (não necessariamente o estado inicial).*/

  /* Utilizando o useState, o estado tem dois 
  elementos onde o primeiro item do array é onde vai guardar o conteudo do estado
  e o segundo = Qual a função que atualiza esse estado.
  Padrão começar com set para o segundo estado*/

  useEffect(() => {
    //corpo do useEffect
    //useEffect é usado assim que a pagina for renderizada
    // Dentro do objeto devemos colocar todas. ações que serão executadas.
     console.log('useEffect test')
    // Os arrays definem quais os estados que o useEffect depende.
  }, [students])

  return (
    <div className='container'>
      {/*usando studentName, toda vez que o conteudo do studentName mudar
      irá refletir na interface*/}
      <header>
        <h1>Nome: {studentName}</h1>
        <div>
          <strong>Lucas</strong>
          <img src="https://github.com/ldantsc.png" alt="foto de perfil" />
        </div>
      </header>
      <input type="text"
        placeholder='Digite um nome...'
        /*propriedade onChange, toda vez que o valor/conteudo desse input muda, 
        ele entrega um evento {e}, usar arrow function, para acessar dentro desse evento um target.value para entegrar
        o valor atual dentro do input. Função setStudentName parametro (e.target.value)*/

        /*pegando o conteudo atual do input e 
        atualizando o estado através da função setStudentName*/
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>Adicionar</button>
      {/*Passando propriedades para o componente
    usar {} para usar uma variavel/função para o component*/}
      {
        /*(.map) para cada estudante, estamos gerando um novo componente Card*/
        students.map((student) => (
        <Card 
        /*KeyProp
        Em uma listagem, normalmente utilizamos o map() 
        do JavaScript para trazer todos os dados dessa lista. 
        No React, precisamos passar uma propriedade key para que esse dado nunca 
        se repita e evitar que erros desse tipo aconteçam.
        Obs: a chave tem que ser unica*/
         key={student.time}
         name={student.name} 
         time={student.time} 
        />))
      }
   </div>
  );
}