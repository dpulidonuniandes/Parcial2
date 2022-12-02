import { useParams } from "react-router-dom"
import { useState } from "react";

function BandaDetail(props) {
  
const [bandas, setBandas] = useState([]);
const params = useParams();

 return (
  <div class="card" style="width: 18rem;">
  <img src={props.banda.image} class="card-img-top" ></img>
  <div class="card-body">
    <h5 class="card-title">{props.banda.name}</h5>
    <p class="card-text">{props.banda.description}</p>
  </div>
</div>

 );
}

export default BandaDetail;