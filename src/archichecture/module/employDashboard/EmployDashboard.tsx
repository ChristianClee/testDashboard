import React, { useContext } from 'react';
import { Context } from '#reducers/context'
import style from './EmployDashboard.module.scss'
import BigCircle from '#archichecture/component/bigCircle/BigCircle';
import Circle from '#archichecture/component/circle/Circle';


type PropsT = {

}
const EmployDashboard: React.FC<PropsT> = () => {
  const {state} = useContext(Context)



  return (
    <div
      className={style.wrapper}
    >
      <div className={style.container_1}>
        <BigCircle elements={ state.skills }>
          <Circle elements={ state.employees }/>
        </BigCircle>
      </div>
     

    </div>
  );
}
export default EmployDashboard;