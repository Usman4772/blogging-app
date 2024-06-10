
"use client"
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Toast({toastVal,showToast}:any){
  const notify = () => toast(toastVal);
useEffect(()=>{
if(showToast){
    notify()
}
},[showToast])
  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default Toast