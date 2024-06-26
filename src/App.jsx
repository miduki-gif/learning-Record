import { useState } from "react";
import { ListDisplay } from "./components/ ListDisplay";
import { InputForm } from "./components/InputForm";

export const App = () =>{
const records = [
  { title: "勉強の記録1", time: 1},
  { title: "勉強の記録2", time: 3},
  { title: "勉強の記録3", time: 5}
];
const [studyContent, setStudyContent] = useState("");
const [studyTime, setStudyTime] = useState("");
  return (
    <>
    <h1>学習記録一覧</h1>
    <InputForm studyContentForm={studyContent} studyTimeForm={studyTime}/>
    <ListDisplay recordList={records} />
    </>
  );
}
