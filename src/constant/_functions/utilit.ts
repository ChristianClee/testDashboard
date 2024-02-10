import { Skills_I, Position_I } from '#types/interfaces'
import { Skills_E, Position_E } from '#types/enums'

export class ConstantUtil {
  public static getSkills(arr: Position_I[]): Skills_I[] {
    const result: Skills_I[] = [];
    const allSkills: Set<Skills_E> = new Set();

    arr.forEach(i => {
      i.mainSkills.forEach(el => allSkills.add(el))
      i.otherSkills.forEach(el => allSkills.add(el))
    })

    allSkills.forEach((i: Skills_E) => {

      const mainPositionsSet: Set<Position_E> = new Set();
      const otherPositionsSet: Set<Position_E> = new Set();

      arr.forEach((el) => {
        if (el.mainSkills.includes(i)) {
          mainPositionsSet.add(el.name);
        }
        if (el.otherSkills.includes(i)) {
          otherPositionsSet.add(el.name)
        }
      });

      const name = i;
      const mainPositions = [...mainPositionsSet];
      const otherPositions = [...otherPositionsSet];

      result.push({
        name,
        mainPositions,
        otherPositions,
      });
    });

    return result
  }
}