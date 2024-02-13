import React, { useRef, useContext } from 'react';
import style from './BigCircle.module.scss';
import Point from '#archichecture/ui/point/Point';
import { ComponentUtil, myCanvas } from '../_functions/utilits';
import { Skills_I } from '#reducers/_types/interfaces'
import { Context } from '#reducers/context';
import { Action_E } from '#reducers/actions';




type PropsT = {
  children: React.ReactNode,
  elements: Skills_I[]
}
const BigCircle: React.FC<PropsT> = ({ children, elements }) => {
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
        {children}
        {
          elements.map((el, item, arr) => (
            <Point
              func={
                ComponentUtil.insertIn(item, arr)
              }
              func_2={() => {
              dispatch({
                type: Action_E.EnableSkills,
                payload: el
              })
              }}
              func_3={() => {
                myCanvas.drowLinesSckils(el, state.employees)
              }}
              element={el}
              styleMode={true}
              key={item} />
          ))
        }
      </div>
      <div className={style.fon}>
      </div>
      <svg className={style.canvas} id='canvas'/>
    </div>
  );
}
export default BigCircle;