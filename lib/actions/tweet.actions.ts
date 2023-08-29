"use server";

import { revalidatePath } from "next/cache";
import Tweet from "../models/tweet.model";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";

interface Params {
  text: string;
  author: string;
  communityId: string | null;
  path: string;
}

export async function createTweet({ text, author, communityId, path }: Params) {
  try {
    connectToDB();

    const createdTweet = await Tweet.create({ text, author, community: null });

    // Update User model
    await User.findByIdAndUpdate(author, {
      $push: { tweets: createdTweet._id },
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Error creating tweet: ${error.message}`);
  }
}
