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

const getQuestions = () => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const data = [
    arrayRelatedMethod,
    augmentationOfClasses,
    closures,
    exprssionsOperators,
    functionalPrograming,
    invokingFunctions,
    classes,
    modules,
    subsets,
    extensions,
    lexicalStructure,
    loops,
    objectAttributes,
    patternMatchingRegularExpressions,
    shortHand,
    statements,
    typeValuesVariables,
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

  const numberSliceDataArray = [
    4, 2, 1, 2, 4, 2, 4, 1, 1, 1, 4, 3, 3, 1, 1, 2, 4, 1, 2, 1, 2, 1, 2, 1, 3, 1, 1, 2, 1, 1, 3, 1, 1, 2, 1, 2, 1, 2, 1, 1, 5, 1, 2, 2, 2, 2, 4, 2, 2,
    2, 2,
  ];
  const newArr = [];

  // Loop through the shuffled arrays
  for (let i = 0; i < data.length; i++) {
    const array = shuffleArray(data[i]);
    const slicingArray = array.slice(0, numberSliceDataArray[i]);
    newArr.push(...slicingArray);
  }
  const finallArr = shuffleArray(newArr);
  return finallArr;
};
module.exports = { getQuestions };
