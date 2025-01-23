
import { Plugin } from "@elizaos/core";
import { ruleCheck } from "./actions/check.ts";

export const rednotePlugin: Plugin = {
  name: "rednote-rule-check",
  description: "Rednote Plugin for Eliza",
  actions: [
    ruleCheck
  ],
  evaluators: [],
  providers: [],
};

export default rednotePlugin;
