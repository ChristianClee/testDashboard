export class UiUtil {
  static getStyle(
    style: { [key:string]: string },
    styleMode: true | undefined 
  ) {
    let styleOutPassive: string = "";
    let styleOutActive: string = "";
    let styleInnPassive: string = "";
    let styleInnActive: string = "";

    switch (styleMode) {
      case true:
        styleOutPassive = style.outer;
        styleOutActive = [style.outer, style.outActive].join(" ");
        styleInnPassive = style.inner;
        styleInnActive = [style.inner, style.inneActive].join(" ");
        break;
      default:
        styleOutPassive = style.outerDef;
        styleOutActive = [style.outerDef, style.outActiveDef].join(" ");
        styleInnPassive = style.innerDef;
        styleInnActive = [style.innerDef, style.inneActiveDef].join(" ");
    }
    return { styleOutPassive, styleOutActive, styleInnPassive, styleInnActive };
  }
}