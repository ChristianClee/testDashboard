import { Coordinate_I } from "#archichecture/component/_types/types";
import { Skills_E, Position_E } from "#reducers/_types/enums";
import { Position_I, Skills_I } from "#reducers/_types/interfaces";
import { kMaxLength } from "buffer";



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

export class Canvas {
  constructor() {}

  public drowLinesEmploe(element: Position_I, sckils: Skills_I[]) {
    const svg = this.getCanvas();
    const start = document.getElementById(element.id);

    if (!(start && svg)) return;
    this.cleanCanvas(svg);

    const sckilsAll = Elements.getCollor(element.mainSkills, sckils);

    this.distributor(start, svg, sckilsAll);
  }

  public drowLinesSckils(element: Skills_I, employees: Position_I[]) {
    const svg = this.getCanvas();
    const start = document.getElementById(element.id);
    if (!(start && svg)) return;
    this.cleanCanvas(svg);

    const employAll = Elements.getCollor(element.mainPositions, employees);

    this.distributorSkills(start, svg, employAll);
  }

  private distributor(
    start: HTMLElement,
    svg: SVGSVGElement,
    finishes: {
      htmlElement: HTMLElement;
      color: string;
    }[]
  ) {

    const length = finishes.length;
    if (length === 1) {
      this.drowLineOne(start, finishes[0].htmlElement, svg, finishes[0].color);
      return;
    }

    for (let i = 0; i < length; i++) {
      const finish = finishes[i].htmlElement;
      const color = finishes[i].color;
      if (i < length / 2) {
        this.drowLine(start, finish, svg, color, -1, numb(i, length));
      } else {
        console.log("sd");
        this.drowLine(start, finish, svg, color, 1, numb(i, length));
      }
    }

    function numb(i: number, length: number) {
      const coef = Math.abs(i - Math.round(length / 2));
      return 10 * coef
    }

  }

  private distributorSkills(
    start: HTMLElement,
    svg: SVGSVGElement,
    finishes: {
      htmlElement: HTMLElement;
      color: string;
    }[]
  ) {
    const length = finishes.length;
    if (length === 1) {
      this.drowLineOne(start, finishes[0].htmlElement, svg, finishes[0].color,);
      return
    }

    for (let i = 0; i < length; i++) {
      const finish = finishes[i].htmlElement;
      const color = finishes[i].color;
      if (i < length / 2) {
        this.drowLine(start, finish, svg, color, -1, numb(i, length));
      } else {
        console.log("sd");
        this.drowLine(start, finish, svg, color, 1, numb(i, length));
      }
    }

    function numb(i: number, length: number) {
      const coef = Math.abs(i - Math.round(length / 2));
      if (length > 5) {
        return 2 * coef * (length ** 2 / 1.3);
      } else {
        return 2 * coef * (length ** 2 / 1);
      }
      
    }
  }
  private getCanvas(): SVGSVGElement | null {
    return document.getElementById("canvas") as SVGSVGElement | null;
  }
  private drowLine(
    startElement: HTMLElement,
    finishElement: HTMLElement,
    svg: SVGSVGElement,
    color: string,
    direction: 1 | -1,
    curve: number = 0.2
  ) {
    const startCoord = this.get_X_Y_OnCanvas(svg, startElement);
    const finishCoord = this.get_X_Y_OnCanvas(svg, finishElement);
    const curveCoord = this.calcCerl(startCoord, finishCoord, direction, curve);

    this.createPath(startCoord, finishCoord, curveCoord, color, svg);
  }
  // private calcCerlOne(
  //   start: { x: number; y: number },
  //   finish: { x: number; y: number },
  //   direction: 1 | -1,
  //   curve: number
  // ) {
  //   // Находим середину линии
  //   var xm = (start.x + finish.x) / 2;
  //   var ym = (start.y + finish.y) / 2;

  //   // Находим вектор направления линии
  //   var dx = finish.x - start.x;
  //   var dy = finish.y - start.y;

  //   // Поворачиваем вектор направления на 90 градусов по часовой стрелке
  //   var bx = dy;
  //   var by = dx * direction;

  //   // Нормализуем вектор бокового смещения
  //   var length = Math.sqrt(bx * bx + by * by);
  //   bx /= length;
  //   by /= length;

  //   // Вычисляем координаты точки изгиба с учетом бокового смещения
  //   var bendFactor = curve; // Небольшое боковое смещение (например, 10% от длины линии)
  //   var bendX = xm + bx * bendFactor * length;
  //   var bendY = ym + by * bendFactor * length;

  //   return { x: bendX, y: bendY };
  // }

  private drowLineOne(
    startElement: HTMLElement,
    finishElement: HTMLElement,
    svg: SVGSVGElement,
    color: string,
  ) {
    const startCoord = this.get_X_Y_OnCanvas(svg, startElement);
    const finishCoord = this.get_X_Y_OnCanvas(svg, finishElement);
    const curveCoord = this.calcCerlOne(
      startCoord,
      finishCoord,
    );

    this.createPathOne(startCoord, finishCoord, curveCoord, color, svg);
  }

  private calcCerl(
    start: { x: number; y: number },
    end: { x: number; y: number },
    direction: 1 | -1,
    curve: number
  ) {
    const midPoint = {
      x: (start.x + end.x) / 2,
      y: (start.y + end.y) / 2,
    };

    const deltaX: number = end.x - start.x;
    const deltaY: number = end.y - start.y;
    const distance: number = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    const normalX: number = deltaX / distance;
    const normalY: number = deltaY / distance;

    const controlPoint = {
      x: midPoint.x + curve * normalY * direction,
      y: midPoint.y - curve * normalX * direction, // Изменяем знак для вертикального смещения
    };

    return controlPoint;
  }

  private calcCerlOne(
    start: { x: number; y: number },
    end: { x: number; y: number }
  ): { x: number; y: number }[] {
    // Находим середину линии
    const midPoint = {
      x: (start.x + end.x) / 2,
      y: (start.y + end.y) / 2,
    };

    // Находим вектор направления прямой между начальной и конечной точками
    const directionVector = {
      x: end.x - start.x,
      y: end.y - start.y,
    };

    // Нормализуем вектор направления
    const normalizedDirectionVector = {
      x:
        directionVector.x /
        Math.sqrt(directionVector.x ** 2 + directionVector.y ** 2),
      y:
        directionVector.y /
        Math.sqrt(directionVector.x ** 2 + directionVector.y ** 2),
    };

    // Перпендикулярный вектор
    const perpendicularVector = {
      x: normalizedDirectionVector.y, // Меняем местами x и y и инвертируем одну из них
      y: -normalizedDirectionVector.x,
    };

    // Умножаем перпендикулярный вектор на фиксированное значение для получения точек управления
    const controlPointDistance = 30; // Примерное расстояние от середины линии до точек управления
    const controlPoint1 = {
      x: midPoint.x + perpendicularVector.x * controlPointDistance,
      y: midPoint.y + perpendicularVector.y * controlPointDistance,
    };

    const controlPoint2 = {
      x: midPoint.x - perpendicularVector.x * controlPointDistance,
      y: midPoint.y - perpendicularVector.y * controlPointDistance,
    };

    return [controlPoint1, controlPoint2];
  }

  private createPath(
    startCoord: { x: number; y: number },
    finishCoord: { x: number; y: number },
    curve: { x: number; y: number },
    color: string,
    svg: SVGSVGElement
  ) {
    const path: SVGPathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );

    path.setAttribute(
      "d",
      // `M ${startCoord.x} ${startCoord.y} C ${poin[0].x} ${poin[0].y}, ${poin[1].x} ${poin[1].y}, ${finishCoord.x} ${finishCoord.y}`
      `M ${startCoord.x} ${startCoord.y} Q ${curve.x} ${curve.y}, ${finishCoord.x} ${finishCoord.y}`
    );
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", color);
    path.setAttribute("stroke-width", "1.5");
    svg.append(path);
    var length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    path.animate([{ strokeDashoffset: length }, { strokeDashoffset: 0 }], {
      duration: 2000, // Длительность анимации в миллисекундах
      easing: "ease-in-out", // Функция времени анимации
      fill: "forwards", // Завершить анимацию с последним кадром
    });
  }
  private createPathOne(
    startCoord: { x: number; y: number },
    finishCoord: { x: number; y: number },
    curve: { x: number; y: number }[],
    color: string,
    svg: SVGSVGElement
  ) {
    const path: SVGPathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );

    path.setAttribute(
      "d",
      `M ${startCoord.x} ${startCoord.y} C ${curve[0].x} ${curve[0].y}, ${curve[1].x} ${curve[1].y}, ${finishCoord.x} ${finishCoord.y}`
      // `M ${startCoord.x} ${startCoord.y} Q ${curve.x} ${curve.y}, ${finishCoord.x} ${finishCoord.y}`
    );
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", color);
    path.setAttribute("stroke-width", "1.5");
    svg.append(path);
    var length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    path.animate([{ strokeDashoffset: length }, { strokeDashoffset: 0 }], {
      duration: 2000, // Длительность анимации в миллисекундах
      easing: "ease-in-out", // Функция времени анимации
      fill: "forwards", // Завершить анимацию с последним кадром
    });
  }

  private get_X_Y_OnDisplay(
    htmlElem: HTMLElement,
    widthLine?: number
  ): { x: number; y: number } {
    const elemRect = htmlElem.getBoundingClientRect();
    const left = elemRect.left;
    const top = elemRect.top;
    const width = elemRect.width;
    const height = elemRect.height;

    let x = width / 2 + left;
    let y = height / 2 + top;

    if (widthLine) {
      x = -(widthLine / 2);
      y = -(widthLine / 2);
    }

    x = Math.round(x);
    y = Math.round(y);
    return { x, y };
  }
  private get_X_Y_OnCanvas(
    svg: SVGSVGElement,
    htmlElem: HTMLElement
  ): { x: number; y: number } {
    const svgRect = svg.getBoundingClientRect();
    const svgX = svgRect.left;
    const svgY = svgRect.top;

    const { x: xScrin, y: yScrin } = this.get_X_Y_OnDisplay(htmlElem);

    const svgWidth = svg.clientWidth;
    const svgHeight = svg.clientHeight;

    let svgClickX = (xScrin - svgX) * (svgWidth / svgRect.width);
    let svgClickY = (yScrin - svgY) * (svgHeight / svgRect.height);

    svgClickX = Math.round(svgClickX);
    svgClickY = Math.round(svgClickY);

    // console.log(svgClickX);

    return { x: svgClickX, y: svgClickY };
  }
  private cleanCanvas(svg: SVGSVGElement) {
    const paths = svg.querySelectorAll("path");
    paths.forEach((i) => i.remove());
  }
}

class Elements {
  public static getElements(
    list: Skills_E[] | Position_E[],
    arr: Skills_I[] | Position_I[],
    color: string
  ): { htmlElement: HTMLElement; color: string }[] {
    let result: { htmlElement: HTMLElement; color: string }[] = [];

    list.forEach((i) => {
      arr.forEach((el) => {
        if (el.name === i) {
          const htmlElement = document.getElementById(el.id);
          if (htmlElement) {
            result.push({ htmlElement, color });
          }
        }
      });
    });
    return result;
  }

  public static getCollor(
    list: Skills_E[] | Position_E[],
    arr: Skills_I[] | Position_I[]
  ): { htmlElement: HTMLElement; color: string }[] {
    let result: { htmlElement: HTMLElement; color: string }[] = [];

    arr.forEach((el) => {
      if (el.onClick != null) {
        const htmlElement = document.getElementById(el.id);
        if (htmlElement) {
          //@ts-ignore
          if (list.includes(el.name)) {
            console.log();
            result.push({ htmlElement, color: "purple" });
          } else {
            result.push({ htmlElement, color: "green" });
          }
        }
      }
    });

    return result;
  }
}





export const myCanvas = new Canvas();