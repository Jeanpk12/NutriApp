import React, {useEffect, useState} from "react";
import './style.css' 

function App(){

  const[nutri, setNutri] = useState([]);

  useEffect(()=> {

    function callAPI(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      
      fetch(url)
      .then((r)=> r.json())
      .then((json)=> {
        
        setNutri(json)
      })
    }

    callAPI();

  }, []);

  return(
    <div className="container">
      <header>
        <strong>Refeição Nutritiva</strong>
      </header>

      {nutri.map((item)=>{
        return(
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa" />

            <p className="subtitulo">{item.subtitulo}</p>
            <p className="categoria">#{item.categoria}</p>
            <a href="#" className="btn">Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;
