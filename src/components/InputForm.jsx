export const InputForm = (props) =>{
    const [studyContentForm, studyTimeForm]=props;
    {console.log(studyContentForm)}
    return(
        <>
        <input value={studyContentForm}/>
        <input value={studyTimeForm}/>
        </>
    );
}