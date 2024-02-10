import React, {useState,useEffect} from 'react';
import style from './EmployDashboard.module.scss'
import BigCircle from '#archichecture/component/bigCircle/BigCircle';
import Circle from '#archichecture/component/circle/Circle';
import { employees, skills } from '#constant/employees'

type PropsT = {

}
const EmployDashboard: React.FC<PropsT> = () => {


  return (
    <div
      className={style.wrapper}
    >
      <div className={style.container_1}>
        <BigCircle elements={ skills }>
          <Circle elements={employees}/>
        </BigCircle>
      </div>
     

    </div>
  );
}
export default EmployDashboard;