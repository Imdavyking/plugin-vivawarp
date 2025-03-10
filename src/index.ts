import { Plugin } from "@elizaos/core";
import { getWarpCreateTokenAction } from "./actions/getWarpCreateTokenAction";
import { getWarpFreezeTokenAction } from "./actions/getWarpFreezeTokenAction";
import { getWarpStakeGuildAction } from "./actions/getWarpStakeGuildAction";
import { getWarpUnFreezeTokenAction } from "./actions/getWarpUnFreezeTokenAction";

export const VivawarpPlugin: Plugin = {
  name: "Vivawarp",
  description: "VivaWarp plugin for ElizaOS",
  actions: [
    getWarpCreateTokenAction,
    getWarpFreezeTokenAction,
    getWarpStakeGuildAction,
    getWarpUnFreezeTokenAction,
  ],
  evaluators: [],
  providers: [],
};

export default VivawarpPlugin;
