import { Skills_E, Position_E } from "#reducers/_types/enums";
import { ConstantUtil } from "#reducers/_functions/utilit";
import { Skills_I, Position_I, EntryDate_I } from "#reducers/_types/interfaces";



const entryDate: EntryDate_I[] = [
  {
    name: Position_E.FinancialAnalyst,
    mainSkills: [Skills_E.Excel, Skills_E.SQL, Skills_E.VBA, Skills_E.C1],
    otherSkills: [Skills_E.PowerBI, Skills_E.Python],
  },
  {
    name: Position_E.Businessman,
    mainSkills: [Skills_E.C1, Skills_E.Excel, Skills_E.PowerBI],
    otherSkills: [
      Skills_E.GoogleAnalytics,
      Skills_E.YandexMetrics,
      Skills_E.Python,
      Skills_E.SQL,
      Skills_E.Tilda,
    ],
  },
  {
    name: Position_E.ProductDesigner,
    mainSkills: [
      Skills_E.Figma,
      Skills_E.Sketch,
      Skills_E.Illustrator,
      Skills_E.Photoshop,
      Skills_E.Principle,
      Skills_E.Tilda,
    ],
    otherSkills: [Skills_E.Shopify, Skills_E.Protopie, Skills_E.Cinema4D],
  },
  {
    name: Position_E.ProjectManager,
    mainSkills: [
      Skills_E.Visio,
      Skills_E.C1,
      Skills_E.GoogleAnalytics,
      Skills_E.YandexMetrics,
      Skills_E.Python,
      Skills_E.SQL,
      Skills_E.Tilda,
    ],
    otherSkills: [Skills_E.Figma, Skills_E.Sketch, Skills_E.Shopify],
  },
  {
    name: Position_E.FinancialManager,
    mainSkills: [Skills_E.C1, Skills_E.Excel, Skills_E.PowerBI],
    otherSkills: [Skills_E.BPMN],
  },
  {
    name: Position_E.BossFinanceDepartment,
    mainSkills: [Skills_E.Sketch, Skills_E.Figma],
    otherSkills: [Skills_E.Shopify, Skills_E.HQL],
  },

  {
    name: Position_E.ProductAnalyst,
    mainSkills: [
      Skills_E.GoogleAnalytics,
      Skills_E.YandexMetrics,
      Skills_E.SQL,
      Skills_E.PowerBI,
      Skills_E.Python,
      Skills_E.Excel,
    ],
    otherSkills: [
      Skills_E.HQL,
      Skills_E.Tableau,
      Skills_E.R,
      Skills_E.MachineLearning,
    ],
  },

  {
    name: Position_E.BossFinancialProduct,
    mainSkills: [Skills_E.Visio],
    otherSkills: [Skills_E.Python],
  },
  {
    name: Position_E.MarketingManager,
    mainSkills: [
      Skills_E.GoogleAnalytics,
      Skills_E.YandexMetrics,
      Skills_E.GoogleAds,
      Skills_E.Ahrefs,
      Skills_E.Pest,
      Skills_E.MyTarget,
    ],
    otherSkills: [
      Skills_E.Tilda,
      Skills_E.Photoshop,
      Skills_E.Xenu,
      Skills_E.Python,
    ],
  },

  {
    name: Position_E.DigitalTransformationManager,
    mainSkills: [
      Skills_E.Visio,
      Skills_E.GoogleAnalytics,
      Skills_E.YandexMetrics,
      Skills_E.Python,
      Skills_E.SQL,
      Skills_E.Tilda,
    ],
    otherSkills: [Skills_E.Figma, Skills_E.Sketch, Skills_E.Shopify],
  },
];


export const employees: Position_I[] = ConstantUtil.getEmployee(entryDate);
export const skills: Skills_I[] = ConstantUtil.getSkills(entryDate);
