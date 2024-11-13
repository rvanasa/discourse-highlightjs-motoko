import { apiInitializer } from "discourse/lib/api";
import candid from "../../vendor/highlightjs-motoko/candid";
import motoko from "../../vendor/highlightjs-motoko/motoko";

export default apiInitializer("0.8", (api) => {
  api.registerHighlightJSLanguage("motoko", motoko);
  api.registerHighlightJSLanguage("candid", candid);
});
