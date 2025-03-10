import {
  elizaLogger,
  Action,
  HandlerCallback,
  IAgentRuntime,
  Memory,
  State,
} from "@elizaos/core";

import { getWarpCreateTokenExamples } from "../examples";
import { createWarpService } from "../services";

export const getWarpCreateTokenAction: Action = {
  name: "GET_WARP_CREATE_TOKEN",
  description: "Get warp create token",
  similes: [
    "create token using warps",
    "let me fetch the warp for you",
    "create token on multiverx with warps",
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
      const response = await warpService.createToken();
      elizaLogger.info("Warp create token response", response);
      if (callback) {
        callback({
          text: `Warp create token response: ${response.message}`,
        });
        return true;
      }
    } catch (error) {
      elizaLogger.error("Error while fetching warp create token", error);
      callback({
        text: `Error while fetching warp create token: ${error.message}`,
        content: { error: error.message },
      });
      return false;
    }
  },
  examples: getWarpCreateTokenExamples,
} as Action;
