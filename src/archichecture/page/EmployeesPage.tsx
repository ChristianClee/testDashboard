import React from 'react';
import style from './EmployeesPage.module.scss'
import EmployDashboard from '#archichecture/module/employDashboard/EmployDashboard';

type PropsT = {

}
const EmployeesPage:React.FC<PropsT> = () => {
  return (
    <div
      className={style.wrapper}
    >
      <EmployDashboard/>

    </div>
  );
}
export default EmployeesPage;