const quizQuestions = require("../quiz/questions/javascript");

const augmentationOfClasses = require("../quiz/programing/javascript/main/augmentationOfClasses");
const arrayRelatedMethod = require("../quiz/programing/javascript/main/arrayRelatedMethods");
const closures = require("../quiz/programing/javascript/main/clousers");
const exprssionsOperators = require("../quiz/programing/javascript/main/expressionsOperators");
const functionalPrograming = require("../quiz/programing/javascript/main/functionalProgramming");
const invokingFunctions = require("../quiz/programing/javascript/main/invokingFunctions");
const classes = require("../quiz/programing/javascript/main/javascriptClasses");
const modules = require("../quiz/programing/javascript/main/javascriptModules");
const subsets = require("../quiz/programing/javascript/main/javascriptSubsets");
const extensions = require("../quiz/programing/javascript/main/javscriptextentions");
const loops = require("../quiz/programing/javascript/main/loops");
const objectAttributes = require("../quiz/programing/javascript/main/objectAttributes");
const patternMatchingRegularExpressions = require("../quiz/programing/javascript/main/patternMatching");
const shortHand = require("../quiz/programing/javascript/main/shortHandFunctions");
const statements = require("../quiz/programing/javascript/main/statements");
const asynchronousRhino = require("../quiz/programing/javascript/serverSide/asynchronousRhino");
const cachingDebuggingAnimation = require("../quiz/programing/javascript/serverSide/cachingDebuggingAnimation");
const clientSideFrameworks = require("../quiz/programing/javascript/serverSide/clientSideFrameworks");
const clientSideStorage = require("../quiz/programing/javascript/serverSide/clientSideStorage");
const cookies = require("../quiz/programing/javascript/serverSide/cookies");
const documentObjecModel = require("../quiz/programing/javascript/serverSide/documentObjectModel");
const errorHandling = require("../quiz/programing/javascript/serverSide/errorHandling");
const eventsHandling = require("../quiz/programing/javascript/serverSide/eventsHandling");
const historyManagement = require("../quiz/programing/javascript/serverSide/historyManagement");
const inHtml = require("../quiz/programing/javascript/serverSide/inHtml");
const invocationPerformanceNavigation = require("../quiz/programing/javascript/serverSide/invocationPerformanceNavigation");
const operations = require("../quiz/programing/javascript/serverSide/operations");
const parsing = require("../quiz/programing/javascript/serverSide/parsing");
const performanceMeasures = require("../quiz/programing/javascript/serverSide/performanceMeasures");
const scriptedHTTP = require("../quiz/programing/javascript/serverSide/scriptesHTTP");
const scriptingCss = require("../quiz/programing/javascript/serverSide/scriptingCss");
const scriptingDocuments = require("../quiz/programing/javascript/serverSide/scriptingDocuments");
const scriptJavaRhino = require("../quiz/programing/javascript/serverSide/scriptJavaRhino");
const serverSide = require("../quiz/programing/javascript/serverSide/serverSide");
const webBrowsers1 = require("../quiz/programing/javascript/serverSide/webBrowsers1");
const webSockets = require("../quiz/programing/javascript/serverSide/webSockets");
const windowsObject = require("../quiz/programing/javascript/serverSide/windwosObject");
const arraySnippet = require("../quiz/programing/javascript/snippet/array");
const classesSnippet = require("../quiz/programing/javascript/snippet/classes");
const clientServerSideScriptingSnipeet = require("../quiz/programing/javascript/snippet/clientServerSideScripting");
const closuresSnipeet = require("../quiz/programing/javascript/snippet/closurse");
const definingInvokingFunctions = require("../quiz/programing/javascript/snippet/definingInvokingFuncions");
const lexicalStructureSnippet = require("../quiz/programing/javascript/snippet/lexicalStucture");
const objectSnippet = require("../quiz/programing/javascript/snippet/objec");
const operatorSnippet = require("../quiz/programing/javascript/snippet/operator");
const regexSnipeet = require("../quiz/programing/javascript/snippet/regex");
const statementSnipeet = require("../quiz/programing/javascript/snippet/statementsSnipeet");
const lexicalStructure = require("../quiz/programing/javascript/main/lexicalStructure");
const webBrowsers2 = require("../quiz/programing/javascript/serverSide/webBrowsers2");
const typeValuesVariablesSnipeet = require("../quiz/programing/javascript/snippet/typesValuesVariable");
const typeValuesVariables = require("../quiz/programing/javascript/main/typesValuesVariables");

const getQuestions = (step) => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const step1 = [arrayRelatedMethod, augmentationOfClasses, closures, exprssionsOperators, functionalPrograming, invokingFunctions, classes, modules];
  const step2 = [
    subsets,
    extensions,
    lexicalStructure,
    loops,
    objectAttributes,
    patternMatchingRegularExpressions,
    shortHand,
    statements,
    typeValuesVariables,
  ];
  const step3 = [
    asynchronousRhino,
    cachingDebuggingAnimation,
    clientSideFrameworks,
    clientSideStorage,
    cookies,
    documentObjecModel,
    errorHandling,
    eventsHandling,
    historyManagement,
    inHtml,
    invocationPerformanceNavigation,
    operations,
    parsing,
  ];
  const step4 = [
    performanceMeasures,
    scriptedHTTP,
    scriptingCss,
    scriptingDocuments,
    scriptJavaRhino,
    serverSide,
    webBrowsers1,
    webBrowsers2,
    webSockets,
    windowsObject,
    arraySnippet,
    classesSnippet,
  ];
  const step5 = [
    clientServerSideScriptingSnipeet,
    closuresSnipeet,
    definingInvokingFunctions,
    lexicalStructureSnippet,
    objectSnippet,
    operatorSnippet,
    regexSnipeet,
    statementSnipeet,
    typeValuesVariablesSnipeet,
  ];
  const stepNumber5 = [2, 2, 2, 2, 4, 2, 2, 2, 2];
  const stepNumber4 = [2, 1, 1, 2, 1, 2, 1, 2, 1, 1, 5, 1];
  const stepNumber3 = [1, 3, 1, 2, 1, 2, 1, 3, 1, 1, 2, 1, 1];
  const stepNumber2 = [1, 1, 4, 3, 3, 1, 1, 2, 4];
  const stepNumber1 = [4, 2, 1, 2, 4, 2, 4, 1];
  const newArr = [];

  // Loop through the shuffled arrays
  if (step == "step1") {
    for (let i = 0; i < step1.length; i++) {
      const array = shuffleArray(step1[i]);
      const slicingArray = array.slice(0, stepNumber1[i]);
      newArr.push(...slicingArray);
    }
  } else if (step == "step2") {
    for (let i = 0; i < step2.length; i++) {
      const array = shuffleArray(step2[i]);
      const slicingArray = array.slice(0, stepNumber2[i]);
      newArr.push(...slicingArray);
    }
  } else if (step == "step3") {
    for (let i = 0; i < step3.length; i++) {
      const array = shuffleArray(step3[i]);
      const slicingArray = array.slice(0, stepNumber3[i]);
      newArr.push(...slicingArray);
    }
  } else if (step == "step4") {
    for (let i = 0; i < step4.length; i++) {
      const array = shuffleArray(step4[i]);
      const slicingArray = array.slice(0, stepNumber4[i]);
      newArr.push(...slicingArray);
    }
  } else if (step == "step5") {
    for (let i = 0; i < step5.length; i++) {
      const array = shuffleArray(step5[i]);
      const slicingArray = array.slice(0, stepNumber5[i]);
      newArr.push(...slicingArray);
    }
  }

  const finallArr = shuffleArray(newArr);
  return finallArr;
};
module.exports = { getQuestions };
