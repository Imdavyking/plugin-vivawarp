import {
  elizaLogger,
  Action,
  HandlerCallback,
  IAgentRuntime,
  Memory,
  State,
} from "@elizaos/core";

import { getWarpStakeGuildExamples } from "../examples";
import { createWarpService } from "../services";

export const getWarpStakeGuildAction: Action = {
  name: "GET_WARP_STAKE_GUILD",
  description: "Get warp stake guild",
  similes: [
    "stake guild using warps",
    "let me fetch the warp for you",
    "stake guild on multiverx with warps",
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
      const response = await warpService.stakeGuild();
      elizaLogger.info("Warp stake guild token response", response);
      if (callback) {
        callback({
          text: `Warp stake guild response: ${response.message}`,
        });
        return true;
      }
    } catch (error) {
      elizaLogger.error("Error while fetching warp stake guild", error);
      callback({
        text: `Error while fetching warp stake guild: ${error.message}`,
        content: { error: error.message },
      });
      return false;
    }
  },
  examples: getWarpStakeGuildExamples,
} as Action;
