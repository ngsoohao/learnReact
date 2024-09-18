export default function CoreConcept(props) {
    return (
      <div>
          <li>
            <img src={props.image} alt="Stylized atom" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </li>
      </div>
    );
  }