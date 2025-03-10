import {
  elizaLogger,
  Action,
  HandlerCallback,
  IAgentRuntime,
  Memory,
  State,
} from "@elizaos/core";

import { getWarpFreezeTokenExamples } from "../examples";
import { createWarpService } from "../services";

export const getWarpFreezeTokenAction: Action = {
  name: "GET_WARP_FREEZE_TOKEN",
  description: "Get warp freeze token",
  similes: [
    "freeze token using warps",
    "let me fetch the warp for you",
    "freeze token on multiverx with warps",
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
      elizaLogger.info("Warp freeze token response", response);
      if (callback) {
        callback({
          text: `Warp freeze token response: ${response.message}`,
        });
        return true;
      }
    } catch (error) {
      elizaLogger.error("Error while fetching warp freeze token", error);
      callback({
        text: `Error while fetching warp freeze token: ${error.message}`,
        content: { error: error.message },
      });
      return false;
    }
  },
  examples: getWarpFreezeTokenExamples,
} as Action;
