import style from './Circle.module.scss'
import Point from '#archichecture/ui/point/Point';
import React, { useContext,  useRef } from 'react';
import { Context } from '#reducers/context'
import { Action_E } from '#reducers/actions'
import { ComponentUtil, myCanvas } from '../_functions/utilits'
import { Position_I, Skills_I } from '#reducers/_types/interfaces'
import { Position_E, Skills_E } from '#reducers/_types/enums'




type PropsT = {
  elements: Position_I[]
}

const Circle: React.FC<PropsT> = ({elements}) => {
  const cicleRef = useRef<HTMLDivElement>(null)
  const {state, dispatch} = useContext(Context)
  const sckils = state.skills



  return (
    <div
      className={style.wrapper}
    >
      <div
        className={style.circle}
        ref={cicleRef}
      >

      </div>
      {
        elements.map((el, item, arr) => (
          <Point
            func={
              ComponentUtil.insertIn(item, arr)
            }
            func_2={() => {
              dispatch({
                type: Action_E.EnablePoints,
                payload: el
              })
            }}
            func_3={() => 
              myCanvas.drowLinesEmploe(el, sckils)
            }
            element={el}
            key={item} />
            
          ))
      } 
      <div className={style.fon}>
      </div>
    </div>
  );
}
export default Circle;