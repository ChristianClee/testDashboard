export class UiUtil {
  static getStyle(
    style: { [key:string]: string },
    styleMode: true | undefined 
  ) {
    let outActive: string = "";
    let outPassive: string = "";
    let innActive: string = "";
    let innPassive: string = "";



    switch (styleMode) {
      case true:
        outPassive = style.outer;
        outActive = [style.outer, style.outActive].join(" ");
        
        innPassive = style.inner;
        innActive = [style.inner, style.inneActive].join(" ");
        break;
      default:
        outPassive = style.outerDef;
        outActive = [style.outerDef, style.outActiveDef].join(" ");

        innPassive = style.innerDef;
        innActive = [style.innerDef, style.inneActiveDef].join(" ");
    }
    return { outPassive, outActive, innPassive, innActive };
  }
}