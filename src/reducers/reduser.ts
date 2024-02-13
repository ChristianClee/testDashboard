import { Items_T } from "./state";
import { Position_I, Skills_I } from "./_types/interfaces";

import { Action_T, Action_E } from "./actions";

export function Reduser(state: Items_T, action: Action_T) {
  switch (action.type) {
    case Action_E.EnablePoints:
      return {
        ...PositionUtilit.anableEmployer(state, action.payload),
      };
  
    case Action_E.EnableSkills:
      return {
        ...PositionUtilit.anableSkills(state, action.payload),
      };
      
    default:
      return state;
  }
}



class PositionUtilit {
  public static anableEmployer(state: Items_T, item: Position_I): Items_T {
    this.cleanLists(state);
    let numb: number = 0;
    const employees = state.employees.map((i, index) => {
      if (i.name === item.name) {
        i.onClick = 1;
        numb = index;
      }
      return i;
    });
    let skills = state.skills.map((i) => {
      const condition: boolean =
        item.mainSkills.includes(i.name) || item.otherSkills.includes(i.name);

      if (condition) i.onClick = 2;
      return i;
    });

    skills = this.groopByOne(skills);
    this.centrate(numb, employees, skills);
    
    return { employees, skills };
  }

  public static anableSkills(state: Items_T, item: Skills_I): Items_T {
    this.cleanLists(state);
    let numb: number = 0;
    const skills = state.skills.map((i, index) => {
      if (i.name === item.name) {
        i.onClick = 1;
        numb = index;
      }
      return i;
    });

    let employees = state.employees.map((i) => {
      const condition: boolean =
        item.mainPositions.includes(i.name) ||
        item.otherPositions.includes(i.name);

      if (condition) i.onClick = 2;
      return i;
    });

    employees = this.groopByOne(employees);
    this.centrate(numb, skills, employees);

    return { skills, employees };
  }

  private static cleanLists(state: Items_T) {
    const employees = state.employees.map((i) => {
      i.onClick = null;
      return i;
    });
    const skills = state.skills.map((i) => {
      i.onClick = null;
      return i;
    });
    return { employees, skills };
  }

  private static groopByOne(item: Skills_I[]): Skills_I[];
  private static groopByOne(item: Position_I[]): Position_I[];
  private static groopByOne(
    item: Skills_I[] | Position_I[]
  ): Skills_I[] | Position_I[] {
    // item.sort((one, two) => {
    //   if (one.onClick === 2) return -1;
    //   else return 1;
    // });
    if ("mainPositions" in item[0]) {
      const result: Skills_I[] = [];
      const other: Skills_I[] = [];
      item.forEach((i) => {
        if (i.onClick === 2) {
          result.push(i as Skills_I);
        } else {
          other.push(i as Skills_I);
        }
      });
      return [...result, ...other];
    } else {
      const result: Position_I[] = [];
      const other: Position_I[] = [];
      item.forEach((i) => {
        if (i.onClick === 2) {
          result.push(i as Position_I);
        } else {
          other.push(i as Position_I);
        }
      });
      return [...result, ...other];
    }
  }

  private static centrate(
    index: number,
    noMove: Position_I[] | Skills_I[],
    move: Position_I[] | Skills_I[]
  ) {
    const diffIndex = this.getDifference(noMove, move);
    const centerIndex = this.getCenterIndex(move);

    const shift = this.getShift(index, centerIndex, diffIndex);
    this.shiftArr(move, shift);
  }
  private static getShift(
    index: number,
    centerIndex: number,
    diffIndex: number
  ): number {
    let result = index * diffIndex - centerIndex;

    if (result > 0) {
      const val = result.toString().split(".");
      let val_1: number = 0;
      try {
        val_1 = parseInt(val[1][0]);
      } catch {}

      if (val_1 >= 8) {
        result = Math.ceil(result) + 1;
      } else {
        result = Math.ceil(result);
      }
    }
    return Math.ceil(result);
  }
  private static getCenterIndex(move: Position_I[] | Skills_I[]) {
    let result: number = 0;
    move.forEach((i) => {
      if (i.onClick !== null) {
        result += 1;
      }
    });
    return Math.round(result / 2);
  }
  private static getDifference(
    noMove: Position_I[] | Skills_I[],
    move: Position_I[] | Skills_I[]
  ) {
    const lengthNoMove = noMove.length;
    const lengthMove = move.length;
    return Math.round((lengthMove / lengthNoMove) * 1000) / 1000;
  }
  private static shiftArr(arr: Position_I[] | Skills_I[], shift: number) {
    if (shift > 0) {
      for (let i = 0; i < shift; i++) {
        const a = arr.pop();
        if (a) {
          //@ts-ignore
          arr.unshift(a);
        }
      }
    } else if (shift < 0) {
      for (let i = 0; i > shift; i--) {
        const a = arr.shift();
        // console.log(a)
        if (1) {
          //@ts-ignore
          arr.push(a);
        } else {
          // console.log("!!!!!!!!!!")
        }
      }
    }
  }
}