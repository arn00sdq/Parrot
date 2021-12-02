import App from "./components/app";
import {data as model} from "./model"
const Controller= () => {
  
  function handleChange(event){
    console.log(event.target.value);
  }
  return (

    <App
      model={model}
    />
  );
};

export default Controller;