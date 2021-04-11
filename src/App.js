import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './App.css';
import { useEffect, useState } from 'react';

const API_URL = `https://api.chucknorris.io/jokes/random?category`;

function App() {
  const [joke, setJoke] = useState(``);
  const [message, setMessage] = useState('animal');


  const API = API_URL + `=${message}`;
  const generateJoke = () => {
    fetch(API)
      .then(res => res.json())
      .then(data => setJoke(data.value))
  }
  useEffect(() => {
    generateJoke();
  }, [API])

  return (
    <div className="App">
      <h2>Chuck Norries</h2>
      <div className="div__button">
        <button className="Button__Start" value="animal" onClick={e => { setMessage(e.target.value) }} >Animal</button>
        <button className="Button__Start" type="submit" value="career" onClick={e => {setMessage(e.target.value) }}>Career</button>
        <button  className="Button__Start" type="submit" value="celebrity" onClick={e=> setMessage(e.target.value)}>Celebrity</button>
        <button  className="Button__Start" type="submit" value="dev" onClick={e=> setMessage(e.target.value)}>Dev</button>
        <button  className="Button__Start" type="submit" value="explicit" onClick={e=> setMessage(e.target.value)}>Explicit</button>
        <button  className="Button__Start" type="submit" value="fashion" onClick={e=> setMessage(e.target.value)}>Fashion</button>
        <button  className="Button__Start" type="submit" value="food" onClick={e=> setMessage(e.target.value)}>Food</button>
        <button  className="Button__Start" type="submit" value="history" onClick={e=> setMessage(e.target.value)}>History</button>
        <button  className="Button__Start" type="submit" value="money" onClick={e=> setMessage(e.target.value)}>Money</button>
        <button  className="Button__Start" type="submit" value="movie" onClick={e=> setMessage(e.target.value)}>Movie</button>
        <button  className="Button__Start" type="submit" value="music" onClick={e=> setMessage(e.target.value)}>Music</button>
        <button  className="Button__Start" type="submit" value="political" onClick={e=> setMessage(e.target.value)}>Political</button>
        <button  className="Button__Start" type="submit" value="religion" onClick={e=> setMessage(e.target.value)}>Religion</button>
        <button  className="Button__Start" type="submit" value="science" onClick={e=> setMessage(e.target.value)}>Science</button>
        <button  className="Button__Start" type="submit" value="sport" onClick={e=> setMessage(e.target.value)}>Sport</button>
        <button  className="Button__Start" type="submit" value="travel" onClick={e=> setMessage(e.target.value)}>Travel</button>
        
      </div>
      <h5 className="message" style={{textTransform: 'capitalize'}}>Selected Cateogery : { message }</h5>
      <Card className="Card_">
      <CardActionArea>
        <CardContent>
          <Typography  color="textSecondary" component="p">
            
                   {joke}
           
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      <Button color="primary" variant="contained" onClick={generateJoke}>New Joke</Button>
    </div>
  );
}

export default App;
