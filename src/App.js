import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicForm from './Component/Forms/BasicForm';
import ShortCircuitEval from './Component/ShortCircuitEval';
import UseEffectAPI from './Component/UseEffect/UseEffectAPI';
import UseEffects1 from './Component/UseEffect/UseEffects1';
import UseEffects2 from './Component/UseEffect/UseEffects2';
import UseStateArray from './Component/UseStateArray';
import Uncontrolled from './Component/Forms/Uncontrolled';
import UseReducer from './Component/UseReducer/UseReducer';
import ComA from './Component/UseContext/ComA';
import Test from './Component/UseEffect/github/Test';
import About from './Component/myApp/About';
import Home from './Component/myApp/Home';
import Index from './Component/myApp/Index';
import Error from './Component/myApp/Error';
import Contact from './Component/myApp/Contact';
import Login from './Component/myApp/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/index" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <UseStateArray /> */}
      {/* <ShortCircuitEval /> */}
      {/* <BasicForm /> */}
      {/* <UseEffects1 /> */}
      {/* <UseEffects2 /> */}
      {/* <UseEffectAPI /> */}
      {/* <Uncontrolled /> */}
      {/* <UseReducer /> */}
      {/* <ComA /> */}
      {/* <Test /> */}
    </div>
  );
}

export default App;
