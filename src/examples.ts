import { ActionExample } from "@elizaos/core";

export const getWarpCreateTokenExamples: ActionExample[][] = [
  [
    {
      user: "{{user}}",
      content: {
        text: "create token using warps",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "let me fetch the warp for you",
        action: "GET_WARP_CREATE_TOKEN",
      },
    },
  ],
  [
    {
      user: "{{user}}",
      content: {
        text: "create token using multiversx",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "let me fetch the warp for you",
        action: "GET_WARP_CREATE_TOKEN",
      },
    },
  ],
];

export const getWarpFreezeTokenExamples: ActionExample[][] = [
  [
    {
      user: "{{user}}",
      content: {
        text: "freeze token using warps",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "let me fetch the warp for you",
        action: "GET_WARP_FREEZE_TOKEN",
      },
    },
  ],
];

export const getWarpStakeGuildExamples: ActionExample[][] = [
  [
    {
      user: "{{user}}",
      content: {
        text: "stake guild using warps",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "let me fetch the warp for you",
        action: "GET_WARP_STAKE_GUILD",
      },
    },
  ],
];

export const getWarpUnFreezeTokenExamples: ActionExample[][] = [
  [
    {
      user: "{{user}}",
      content: {
        text: "unfreeze token using warps",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "let me fetch the warp for you",
        action: "GET_WARP_UNFREEZE_TOKEN",
      },
    },
  ],
];
