import { useEffect } from "react";
import { Coordinate_I } from "#archichecture/component/_types/types";
import { Position_I, Skills_I } from "#reducers/_types/interfaces";


export function useCustomHook(
  func: undefined | (() => Coordinate_I),
  elemRef: React.RefObject<HTMLDivElement>,
  labelRef: React.RefObject<HTMLDivElement>,
  element: Position_I | Skills_I,
) {
  useEffect(() => {
    if (func) {
      const { x, y } = func();
      if (x && y) {
        assignPos(elemRef, labelRef, x, y, element);
      }
    }
  }, [func ? func().x : null, element]);
}


function assignPos(
  elemRef: React.RefObject<HTMLDivElement>,
  labelRef: React.RefObject<HTMLDivElement>,
  x: string,
  y: string,
  element: Position_I | Skills_I
) {
  if (elemRef.current && labelRef.current && x && y) {
    elemRef.current.id = element.id;
    elemRef.current.style.position = "absolute";
    elemRef.current.style.transform = "translateX(-50%) translateY(-50%)";
    elemRef.current.style.top = y;
    elemRef.current.style.left = x;

    positionLabel(x, y, labelRef);
  }
}


function positionLabel(
  x: string,
  y: string,
  labelRef: React.RefObject<HTMLDivElement>
) {
  if (labelRef.current) {
  
      const _x = parseInt(x);
  const _y = parseInt(y);

      if (_x === 100) {
        labelRef.current.style.left = "220%";
      } else if (100 > _x && _x > 75) {
        labelRef.current.style.left = "170%";
      } else if (75 > _x && _x > 55) {
        labelRef.current.style.left = "130%";
      } else if (55 > _x && _x > 45) {
        labelRef.current.style.left = "50%";
      } else if (45 > _x && _x > 25) {
        labelRef.current.style.left = "-40%";
      } else if (25 > _x && _x > 0) {
        labelRef.current.style.left = "-110%";
      } else if (_x === 0) {
        labelRef.current.style.left = "-160%";
      }

      if (_y === 100) {
        labelRef.current.style.top = "200%";
      } else if (100 > _y && _y > 75) {
        labelRef.current.style.top = "180%";
      } else if (75 > _y && _y > 55) {
        labelRef.current.style.top = "150%";
      } else if (55 > _y && _y > 45) {
        labelRef.current.style.top = "50%";
      } else if (45 > _y && _y > 25) {
        labelRef.current.style.top = "-50%";
      } else if (25 > _y && _y > 0) {
        labelRef.current.style.top = "-100%";
      } else if (_y === 0) {
        labelRef.current.style.top = "-110%";
    }
    }
}