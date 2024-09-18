// export default function TabContent({title,description,code}){
//     return(

//         <div id='tab-content'> 
//             <h3>{title}</h3>
//             <p>{description}</p>
//             <pre>
//               <code>{code}</code>
//             </pre>
//           </div>
//     );
// }

export default function TabContent(props) {
    return (
      <div id='tab-content'> 
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <pre>
          <code>{props.code}</code>
        </pre>
      </div>
    );
  }

  //both works