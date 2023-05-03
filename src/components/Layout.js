import React from 'react';
import '../styles/Sidebar.css';
import '../styles/Header.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Header from './header/Header';
import Overview from '../pages/overview/Overview';
import Tenants from '../pages/tenants/Tenants';
import Users from '../pages/users/Users';
import AddressBook from '../pages/addressBook/AddressBook';
import Payments from '../pages/payments/Payments';
import Tasks from '../pages/tasks/Tasks';
import Invoice from '../pages/invoice/Invoice';
import Promotions from '../pages/promotions/Promotions';
import CreateNew from '../pages/createNew/CreateNew';
import TenantView from '../pages/tenants/TenantView';
import TenantEdit from '../pages/tenants/TenantEdit';
import TenantAddModule from '../pages/tenants/TenantAddModule';
import TenantStatus from '../pages/tenants/TenantStatus';
import TenantChangeType from '../pages/tenants/TenantChangeType';
import TenantPay from '../pages/tenants/TenantPay';
import LoginForm from '../utility/forms/LoginForm';
import LoginForm2 from '../utility/forms/LoginForm2';

function Layout() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar>
         <Header/> 
          <Routes>
            <Route path="/" element={<Overview/>}></Route>
            <Route path="/tenants" element={<Tenants/>}></Route>
            {/* <Route path="/users" element={<Users/>}></Route> */}
            <Route path="/users" element={<LoginForm/>}></Route>
            {/* <Route path="/users" element={<LoginForm2/>}></Route> */}
            <Route path="/addressbook" element={<AddressBook/>}></Route>
            <Route path="/payments" element={<Payments/>}></Route>
            <Route path="/tasks" element={<Tasks/>}></Route>
            <Route path="/invoice" element={<Invoice/>}></Route>
            <Route path="/promotions" element={<Promotions/>}></Route>
            <Route path="/createnew" element={<CreateNew/>}></Route>
            <Route path="/tenantView" element={<TenantView/>}></Route>
            <Route path="/tenantEdit" element={<TenantEdit/>}></Route>
            <Route path="/tenantAddModule" element={<TenantAddModule/>}></Route>
            <Route path="/tenantStatus" element={<TenantStatus/>}></Route>
            <Route path="/tenantChangeType" element={<TenantChangeType/>}></Route>
            <Route path="/tenantPay" element={<TenantPay/>}></Route>
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  )
}

export default Layout
