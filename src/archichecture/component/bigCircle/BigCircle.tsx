import React, { useRef } from 'react';
import style from './BigCircle.module.scss'
import Point from '#archichecture/ui/point/Point';
import { ComponentUtil } from '../_functions/utilits';
import { Skills_I } from '#types/interfaces'

type PropsT = {
  children: React.ReactNode,
  elements: Skills_I[]
}
const BigCircle: React.FC<PropsT> = ({ children, elements }) => {
  const cicleRef = useRef<HTMLDivElement>(null)
  

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
              element={el}
              styleMode={true}
              key={item} />
          ))
        }
      </div>
      <div className={style.fon}>
      </div>
    </div>
  );
}
export default BigCircle;