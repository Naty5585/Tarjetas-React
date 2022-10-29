import Card from './componentes/Card';
import CardSection from './componentes/CardSection';
import Button from './componentes/Button';
import {infoCard} from './componentes/data'


function App() {
  return (
  <CardSection>
    {
      infoCard.map(el => 
        <Card>
          <div className='card'>
            <img  src={el.img} alt={el.lugar} width={250}/>
            <div className='cardInfo'>
              <h3>{el.lugar}</h3>
              <p>{el.descripcion}</p>
              <ul className='list'>
                <li key={el.id}>{el.duracion}</li>
                <li key={el.id}>{el.salidas}</li>
              </ul>
              <Button/>
            </div>
          </div>
        </Card>
        ) 
    }
  </CardSection>
  );
}

export default App;
