import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App'
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom';
import Example from './Acintyo-project/Mui-Project/MUIPratice';
import FormPropsTextFields from './Acintyo-project/Mui-Project/MUITextField';
import BasicGrid from './Acintyo-project/Mui-Project/GridPratice';
import FullWidthGrid from './Acintyo-project/Mui-Project/GridPratice';
import CustomButton from './Acintyo-project/Mui-Project/ButtonBase';

// import bootstrap from '../node_modules/boostrap';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CustomButton />
    </BrowserRouter>
   
  </StrictMode>
)
