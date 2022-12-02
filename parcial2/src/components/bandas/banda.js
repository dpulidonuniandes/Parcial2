import { Link } from "react-router-dom";

function Banda(props) {
  return (
    <tr>
      <th scope="row">{props.banda.id}</th>
      <td>
      <Link to={"/bandas/" + props.banda.id}>
        {props.banda.name}
      </Link>
      </td>
      <td>{props.banda.country}</td>
      <td>{props.banda.genre}</td>
      <td>{props.banda.foundation_year}</td>
    </tr>
  );

 

}

export default Banda;