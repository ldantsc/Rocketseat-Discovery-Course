import './styles.css';

/*Para renderizar o cartão com as 
propriedades passadas para o componente 
em Home/index.jsx através do props*/

/*Podemos desestruturar o argumento por exemplo: ({name, time})
e não precisa utilizar o props Ex:<strong>{name}</strong>*/

export function Card(props) {
    return (
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}
