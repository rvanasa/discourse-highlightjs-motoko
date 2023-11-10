import { apiInitializer } from "discourse/lib/api";
import glimmerJs from "../../lib/glimmer-js";
import { glimmer } from "../../vendor/highlightjs-glimmer";

export default apiInitializer("0.8", (api) => {
  api.registerHighlightJSLanguage("glimmer", glimmer);
  api.registerHighlightJSLanguage("gjs", glimmerJs);
});
