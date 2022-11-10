import react from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function IndexComponent() {
  return(

    <>
    <h1> PROJECT ONE</h1>
    </>
  );
  const Root = ReactDOM.createRoot(document.getElementById("root"));
  Root.render(<IndexComponent/>)
 
}