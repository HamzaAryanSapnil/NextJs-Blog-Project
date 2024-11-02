"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "../utils";

export const createPitch = async (state, form, pitch) => {
    const session = await auth();
    if(!session) return parseServerActionResponse({
        error: "Not Signed In",
        status: "ERROR"
    })
}