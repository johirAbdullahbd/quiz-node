const performanceMeasures = [
  {
    question: "What is the purpose of code minification in JavaScript?",
    options: [
      "To obfuscate the code and make it unreadable",
      "To reduce the size of the code by removing unnecessary characters",
      "To add comments for better readability",
      "To improve the execution speed of the code",
    ],
    correctAnswer: "To reduce the size of the code by removing unnecessary characters",
  },
  {
    question: "What is a common technique to improve the loading performance of web pages?",
    options: [
      "Increasing the number of external dependencies",
      "Using synchronous loading for scripts",
      "Minimizing the number of HTTP requests",
      "Including large images directly in the HTML",
    ],
    correctAnswer: "Minimizing the number of HTTP requests",
  },
  {
    question: "How does lazy loading contribute to performance optimization in JavaScript?",
    options: [
      "By loading all resources at once",
      "By delaying the loading of non-essential resources until they are needed",
      "By loading resources in the background without user interaction",
      "By avoiding the use of external libraries",
    ],
    correctAnswer: "By delaying the loading of non-essential resources until they are needed",
  },
  {
    question: "What is the purpose of using a Content Delivery Network (CDN) for static assets?",
    options: [
      "To increase the server load",
      "To distribute static assets across multiple servers worldwide",
      "To compress static assets",
      "To block access to static assets",
    ],
    correctAnswer: "To distribute static assets across multiple servers worldwide",
  },
  {
    question: "How does asynchronous loading of scripts affect page performance?",
    options: [
      "It slows down the page loading",
      "It speeds up the page loading by allowing multiple scripts to load simultaneously",
      "It prevents scripts from loading",
      "It makes scripts execute in a specific order",
    ],
    correctAnswer: "It speeds up the page loading by allowing multiple scripts to load simultaneously",
  },
  {
    question: "What is the purpose of using the 'defer' attribute in the 'script' tag?",
    options: [
      "To block script execution",
      "To indicate that the script should be executed asynchronously",
      "To delay script execution until the HTML parsing is complete",
      "To load external scripts synchronously",
    ],
    correctAnswer: "To delay script execution until the HTML parsing is complete",
  },
  {
    question: "How can you optimize the rendering performance of a web page?",
    options: [
      "By using a large number of unnecessary HTML tags",
      "By minimizing the use of CSS",
      "By optimizing the order and placement of scripts and stylesheets",
      "By avoiding the use of images",
    ],
    correctAnswer: "By optimizing the order and placement of scripts and stylesheets",
  },
  {
    question: "What is the purpose of the 'localStorage' API in performance optimization?",
    options: [
      "To store large amounts of data on the server",
      "To store data that persists across browser sessions",
      "To compress images",
      "To store temporary variables in memory",
    ],
    correctAnswer: "To store data that persists across browser sessions",
  },
  {
    question: "How can you reduce the time it takes for a webpage to become interactive?",
    options: [
      "By increasing the number of external dependencies",
      "By loading all scripts synchronously",
      "By minimizing the use of client-side scripting",
      "By optimizing the critical rendering path",
    ],
    correctAnswer: "By optimizing the critical rendering path",
  },
  {
    question: "What is the purpose of using a service worker in performance optimization?",
    options: [
      "To create a new web page",
      "To block unwanted requests",
      "To improve the execution speed of client-side scripts",
      "To enable offline functionality and caching",
    ],
    correctAnswer: "To enable offline functionality and caching",
  },
  {
    question: "What is the impact of using too many third-party scripts on page performance?",
    options: [
      "It has no impact on performance",
      "It improves performance by utilizing external resources",
      "It can slow down page loading and execution",
      "It only affects the server-side performance",
    ],
    correctAnswer: "It can slow down page loading and execution",
  },
  {
    question: "How can you optimize the performance of images on a webpage?",
    options: [
      "By using high-resolution images for better quality",
      "By compressing images and using appropriate formats",
      "By not using images at all",
      "By using images directly in the HTML without external files",
    ],
    correctAnswer: "By compressing images and using appropriate formats",
  },
  {
    question: "What is the purpose of the rel='noopener' attribute in anchor ('a') tags for external links?",
    options: [
      "To open the link in a new window",
      "To indicate that the link should be opened asynchronously",
      "To prevent the opened page from having access to the window.opener property",
      "To allow the opened page to access the window.opener property",
    ],
    correctAnswer: "To prevent the opened page from having access to the window.opener property",
  },
  {
    question: "How does code splitting contribute to performance optimization in JavaScript?",
    options: [
      "By increasing the overall code size",
      "By combining all code into a single file",
      "By breaking the code into smaller, manageable chunks and loading them on demand",
      "By preventing the use of external libraries",
    ],
    correctAnswer: "By breaking the code into smaller, manageable chunks and loading them on demand",
  },
  {
    question: "What is the purpose of the 'defer' attribute in the 'script' tag?",
    options: [
      "To block script execution",
      "To indicate that the script should be executed asynchronously",
      "To delay script execution until the HTML parsing is complete",
      "To load external scripts synchronously",
    ],
    correctAnswer: "To delay script execution until the HTML parsing is complete",
  },
  {
    question: "What is the purpose of the rel='preload' attribute in link ('link') tags?",
    options: [
      "To apply a preloader to the webpage",
      "To preload external stylesheets",
      "To indicate that the link should be loaded immediately",
      "To indicate that the link should be preloaded for future use",
    ],
    correctAnswer: "To indicate that the link should be preloaded for future use",
  },
  {
    question: "How can you reduce the number of reflows in the rendering process?",
    options: [
      "By using synchronous loading for scripts",
      "By optimizing the order and placement of scripts and stylesheets",
      "By minimizing the use of CSS animations",
      "By avoiding the use of client-side scripting",
    ],
    correctAnswer: "By minimizing the use of CSS animations",
  },
  {
    question: "What is the purpose of the 'Intersection Observer' API in performance optimization?",
    options: [
      "To observe changes in the DOM hierarchy",
      "To monitor network requests",
      "To observe changes in the intersection of elements with the viewport",
      "To measure script execution time",
    ],
    correctAnswer: "To observe changes in the intersection of elements with the viewport",
  },
  {
    question: "How can using a CDN (Content Delivery Network) contribute to performance optimization?",
    options: [
      "By increasing the server load",
      "By slowing down the delivery of static assets",
      "By distributing static assets across multiple servers worldwide",
      "By blocking access to static assets",
    ],
    correctAnswer: "By distributing static assets across multiple servers worldwide",
  },
];
module.exports = performanceMeasures;
