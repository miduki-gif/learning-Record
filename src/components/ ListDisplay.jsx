export const ListDisplay = (props)=>{
    const {recordList} =props;
    return(
        <ul style={{listStyle:"none"}}>
        {recordList.map((record, time)=>
        (
           <li key={time}>
            <p>{record.title}{record.time}</p>
           </li>
        )
       )}
         </ul>
    );
}