import { useState } from "react";
import { ListDisplay } from "./components/ ListDisplay";
import { InputForm } from "./components/InputForm";
import { Insert } from "./components/Insert";

export const App = () =>{

const [inputs, setInputs] = useState({ content: "", time:0});

const [records, setReCords] = useState([]);
 const [error, setError] = useState("");

const handleChange = (e) => {
  const {name, value } = e.target;
  if (name === 'time' && !/^[0-9]*$/.test(value)) {
    return;
}
  setInputs(prevInputs =>({
    ...prevInputs,
    [name]:value
}));
}

  const handleRegister = () =>{
    console.log(inputs);
    if(!inputs.content ||!inputs.time){
      setError("入力されていない項目があります。");
      console.log("入力されていない項目があります。");
    }
    else{
      setReCords(prevsetReCords =>[
        ...prevsetReCords,
        {title: inputs.content, time: `${inputs.time}時間`}
    ]);
    setInputs({content:"", time:0});
  }
  };
  
//   console.log(inputs);
//   if(!inputs.content ||!inputs.time){
//     setError("入力されていない項目があります。");
//     console.log("入力されていない項目があります。");
//   }
//   else{
//     setReCords(prevsetReCords =>[
//       ...prevsetReCords,
//       {title: inputs.content, time: `${inputs.time}時間`}
//   ]);
//   setInputs({content:"", time:0});
// }
// };
  return (
    <>
    <h1>学習記録一覧</h1>
    <InputForm name="content" value={inputs.content} onChange={handleChange} label="学習内容"/>
    <InputForm name="time" value={inputs.time === initialSettingTime ? "" : inputs.time} onChange={handleChange} label="学習時間" suffix="時間" pattern="^[0-9]*$"/>
    <p>入力されている学習内容: {inputs.content}</p>
    <p>入力されている時間: {inputs.time}時間</p>
    <Insert onClick={handleRegister}/>
    <div>{error}</div>
    <ListDisplay recordList={records}/>
    </>
  );
}
