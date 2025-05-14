import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Jobs from "../Pages/Jobs";
import Network from "../Pages/Network";
import Messages from "../Pages/Messages";
import Notifications from "../Pages/Notifications";
import Account from "../Pages/Account";
import PageNotFound from "../Pages/PageNotFound";
import MyComponent from "../../UseSearchparams/UseSearchparams";

function RoutesPage() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/network" element={<Network />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notification" element={<Notifications />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/mycomponent" element={<MyComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesPage;
{
  /* <Layout>
<h2>Page</h2>
</Layout> */
}
