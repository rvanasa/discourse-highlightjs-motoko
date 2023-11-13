import { apiInitializer } from "discourse/lib/api";
import { glimmer, glimmerJavascript } from "../../vendor/highlightjs-glimmer";

export default apiInitializer("0.8", (api) => {
  api.registerHighlightJSLanguage("glimmer", glimmer);
  api.registerHighlightJSLanguage("glimmer-javascript", glimmerJavascript);
});
