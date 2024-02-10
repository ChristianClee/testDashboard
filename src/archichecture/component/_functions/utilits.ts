import { Coordinate_I } from "#archichecture/component/_types/types";


export class ComponentUtil {
  static insertIn(
    index: number,
    arr: any[]
  ): () => Coordinate_I {
    return () => {
        const count = arr.length;
        const angle = ((Math.PI * 2) / count) * index;
        const x = Math.round((50 + 50 * Math.cos(angle))*10) / 10;
        const y = Math.round((50 + 50 * Math.sin(angle)) * 10) / 10;

        return { x: `${x}%`, y: `${y}%` };
    };
  }
}