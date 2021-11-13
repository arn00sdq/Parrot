import App from "./components/app";

const Controller= () => {
  
  function handleChange(event){
    console.log(event.target.value);
  }
  return (

    <App
      model="oui"
    />
  );
};

export default Controller;