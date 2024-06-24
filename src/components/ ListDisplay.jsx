export const ListDisplay = (props)=>{
    const {recordList} =props;
    {console.log(recordList)};
    return(
        <ul style={{listStyle:"none"}}>
        {recordList.map((studyList)=>
        (
           <li key={studyList.time}>
            <p>{studyList.title}{studyList.time}時間</p>
           </li>
        )
       )}
         </ul>
    );
}