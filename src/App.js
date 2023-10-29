
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Main from './components/mainPage/Main';
import Accounting from './components/pages/accounting/Accounting';
import Business from './components/pages/business/Business';
import Legal from './components/pages/legal/Legal';
import Licenses from './components/pages/licenses/Licenses';
import Paperwork from './components/pages/paperwork/Paperwork';


function App() {
   return (
      <div className="app">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Main />}/>
                  <Route path="/accounting" element={<Accounting />}/>
                  <Route path="/business"   element={<Business />}/>
                  <Route path="/legal"      element={<Legal />}/>
                  <Route path="/licenses"   element={<Licenses />}/>
                  <Route path="/paperwork"  element={<Paperwork />}/>
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
