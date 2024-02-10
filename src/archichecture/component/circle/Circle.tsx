import React, {useRef} from 'react';
import style from './Circle.module.scss'
import Point from '#archichecture/ui/point/Point';
import { ComponentUtil } from '../_functions/utilits'
import { Position_I } from '#types/interfaces'


type PropsT = {
  elements: Position_I[]
}

const Circle: React.FC<PropsT> = ({elements}) => {
  const cicleRef = useRef<HTMLDivElement>(null)



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
            <Point func={
              ComponentUtil.insertIn(item, arr)
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