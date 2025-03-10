import {
  elizaLogger,
  Action,
  HandlerCallback,
  IAgentRuntime,
  Memory,
  State,
} from "@elizaos/core";

import { getWarpUnFreezeTokenExamples } from "../examples";
import { createWarpService } from "../services";

export const getWarpUnFreezeTokenAction: Action = {
  name: "GET_WARP_UNFREEZE_TOKEN",
  description: "Get warp unfreeze token",
  similes: [
    "unfreeze token using warps",
    "let me fetch the warp for you",
    "unfreeze token on multiverx with warps",
  ],
  validate: async (runtime) => {
    return true;
  },
  handler: async (
    runtime: IAgentRuntime,
    memory: Memory,
    state: State,
    _options: { [key: string]: any },
    callback: HandlerCallback
  ) => {
    const warpService = createWarpService();
    try {
      const response = await warpService.freezeToken();
      elizaLogger.info("Warp unfreeze token response", response);
      if (callback) {
        callback({
          text: `Warp unfreeze token response: ${response.message}`,
        });
        return true;
      }
    } catch (error) {
      elizaLogger.error("Error while fetching warp unfreeze token", error);
      callback({
        text: `Error while fetching warp unfreeze token: ${error.message}`,
        content: { error: error.message },
      });
      return false;
    }
  },
  examples: getWarpUnFreezeTokenExamples,
} as Action;
