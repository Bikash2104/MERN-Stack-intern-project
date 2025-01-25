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
import BasicButtonGroup from './Acintyo-project/Mui-Project/ButtonGroup';
import SplitButton from './Acintyo-project/Mui-Project/ButtonGroup2';
import DisableElevation from './Acintyo-project/Mui-Project/ButtonGroup2';
import LoadingButtonGroup from './Acintyo-project/Mui-Project/ButtonGroup2';
import ControlledRadioButtonsGroup from './Acintyo-project/Mui-Project/RadioGroup';
import ErrorRadios from './Acintyo-project/Mui-Project/RadioGroup';
import SelectAutoWidth from './Acintyo-project/Mui-Project/Select';
import AutoCompleteApi from './Acintyo-project/Office-Task/AutoCompleteApi';
import DevApiLocal from './Acintyo-project/Office-Task/DevApiLocal';

// import bootstrap from '../node_modules/boostrap';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <  DevApiLocal/>
    </BrowserRouter>
   
  </StrictMode>
)
