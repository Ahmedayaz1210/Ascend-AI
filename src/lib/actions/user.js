import exp from "constants";
import User from "../model/user.model";
import {connect} from "../mongodb/mongoose";
import { EmailAddress } from "@clerk/nextjs/server";
import { use } from "react";

export const createOrUpdateUser = async (
    id,
    image_url,
    email_addresses,
    username
) => {
    try {
        await connect();
        const user = await User.findOneAndUpdate(
            {clerkId: id},
            {
                $set:{
                    avatar: image_url,
                    email: email_addresses[0].email_address,
                    username: username
                }
            },
            {
                upsert: true,
                new: true
            }
        );
        return user;

    } catch (error) {
        console.error('Error creating or updating user: ', error);
    }
};

export const deleteUser = async (id) => {
    try {
        await connect();
        await User.findOneAndDelete({clerkId: id});
    }
    catch (error) {
        console.error('Error deleting user: ', error);
    }
}