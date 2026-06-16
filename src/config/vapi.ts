import { VapiClient } from "@vapi-ai/server-sdk";
import dotenv from "dotenv";

dotenv.config();

const token = (process.env.VAPI_TOKEN || "").trim();

if (!token) {
  throw new Error("VAPI_TOKEN is missing");
}

export const vapiClient = new VapiClient({
  token
});

export const config = {
  port: Number(process.env.PORT || 3000),
  vapiPhoneNumberId: (process.env.VAPI_PHONE_NUMBER_ID || "").trim()
};