
 const List = (props )=>{
  const onRemoveCLick = (id) => () => {
    props.remove(id);
  };

  const toggle = (id) => ()=> {
     props.toggle(id);
  };
    const markStyleCompleted = {   color: 'green'};
    const markStyleUnCompleted = {   color: 'red'};
 
    return (
        <div>
      <ol>
      {
        <table>
          <th>task</th>
          <th>status</th>
          <th></th>
          <th></th>{
          props.tasks.map(t=>(
          <tr><td><span>{t.text}   </span> </td>
          <td><span style={t.completed?markStyleCompleted:markStyleUnCompleted}>{t.completed?'V':'O'}</span> </td>
          <td> <button onClick={toggle(t.id)}>{t.completed?"undo":"complete"}</button> </td>
          <td>  <button onClick={onRemoveCLick(t.id)}>X</button></td>
          
           </tr>
 
        ))
          }
        </table>
       
      }
      </ol>
      
    </div>
    )
}
export default List;