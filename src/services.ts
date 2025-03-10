import { VivaWarpResponse } from "./types";

const BASE_URL = "https://usewarp.to";

export const createWarpService = () => {
  const createToken = async (): Promise<VivaWarpResponse> => {
    return {
      success: true,
      message: `${BASE_URL}/create-token`,
    };
  };
  const freezeToken = async (): Promise<VivaWarpResponse> => {
    return {
      success: true,
      message: `${BASE_URL}/freeze-token`,
    };
  };
  const unfreezeToken = async (): Promise<VivaWarpResponse> => {
    return {
      success: true,
      message: `${BASE_URL}/unfreeze-token`,
    };
  };
  const stakeGuild = async (): Promise<VivaWarpResponse> => {
    return {
      success: true,
      message: `${BASE_URL}/stake-guild`,
    };
  };
  return { createToken, freezeToken, stakeGuild, unfreezeToken };
};
