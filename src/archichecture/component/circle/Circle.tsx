import style from './Circle.module.scss'
import Point from '#archichecture/ui/point/Point';
import React, { useContext, useRef } from 'react';
import { Context } from '#reducers/context'
import { Action_E } from '#reducers/actions'
import { ComponentUtil } from '../_functions/utilits'
import { Position_I } from '#reducers/_types/interfaces'




type PropsT = {
  elements: Position_I[]
}

const Circle: React.FC<PropsT> = ({elements}) => {
  const cicleRef = useRef<HTMLDivElement>(null)
  const {state, dispatch} = useContext(Context)


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