"use server";

import { auth } from "@/auth";

export const createPitch = async (state, form, pitch) => {
    const session = await auth();
    
}