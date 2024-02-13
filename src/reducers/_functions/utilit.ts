import { Skills_I, Position_I, EntryDate_I } from "#reducers/_types/interfaces";
import { Skills_E, Position_E } from "#reducers/_types/enums";
import { v4 } from "uuid";


export class ConstantUtil {
  public static getSkills(arr: EntryDate_I[]): Skills_I[] {
    const result: Skills_I[] = [];
    const allSkills: Set<Skills_E> = new Set();

    arr.forEach((i) => {
      i.mainSkills.forEach((el) => allSkills.add(el));
      i.otherSkills.forEach((el) => allSkills.add(el));
    });

    allSkills.forEach((i: Skills_E) => {
      const mainPositionsSet: Set<Position_E> = new Set();
      const otherPositionsSet: Set<Position_E> = new Set();

      arr.forEach((el) => {
        if (el.mainSkills.includes(i)) {
          mainPositionsSet.add(el.name);
        }
        if (el.otherSkills.includes(i)) {
          otherPositionsSet.add(el.name);
        }
      });

      const name = i;
      const mainPositions = [...mainPositionsSet];
      const otherPositions = [...otherPositionsSet];

      result.push({
        name,
        mainPositions,
        otherPositions,
        onClick: null,
        id: v4(),
      });
    });

    return result;
  }
  public static getEmployee(arr: EntryDate_I[]): Position_I[] {
    const result: Position_I[] = []
    arr.forEach(i => {
      result.push({
        ...i,
        onClick: null,
        id: v4(),
      });
    })
    return result
  }
}
