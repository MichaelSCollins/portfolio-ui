/* eslint-disable @typescript-eslint/no-explicit-any */
import Message from '@/../server/models/message'
import MessageFilter from "../filter/MessageFilter";
import { Document } from "mongoose";
import MongoConnection from "../_db/mongo-connection";

class MessageDBAdapter {
    static instance: MessageDBAdapter;
    body?: any;
    filter?: any;
    validatedBody: any;
    document?: Document;
    valid?: boolean;
    static async toMongoDB(
        body: any) {
        if (!MessageDBAdapter.instance) {
            MessageDBAdapter.instance = new MessageDBAdapter()
        }
        return await MessageDBAdapter.instance
            .setBody(body)
            .toMongoDB()
    }
    static async fromMongoDB(
        filter: any) {
        if (this.instance) {
            MessageDBAdapter.instance = new MessageDBAdapter()
        }
        return await MessageDBAdapter.instance
            .setFilter(filter)
            .fromMongoDB()
    }

    constructor() {
    }
    setFilter(filter: any) {
        this.filter = filter
        return this
    }
    setBody(body: any) {
        this.body = body
        return this
    }
    async fromMongoDB() {
        let messageDoc;
        try {
            MongoConnection.connect();
            const { id, name, email } = this.filter
            const messageFilter = MessageFilter.build({
                name, email
            })
            if (!!id)
                messageDoc = await Message.findById(id)
            if (!!email || !!name)
                messageDoc = await Message.find(messageFilter)

            MongoConnection.end();
        } catch (e: any) {
            this.onError(e)
        }
        return messageDoc
    }
    toMongoDB = async () => {
        try {
            MongoConnection.connect();
            console.log("Mongo: Performing Save Chain")
            const savedDoc = await this
                .validate()
                .save()
            MongoConnection.end();
            return savedDoc
        } catch (e: any) {
            this.onError(e)
        }
    }
    validate = () => {
        console.log("Mongo: Performing Validation")
        const validationMsg = "Failed validation: ";
        if (!this.body) {
            console.error(validationMsg + "no body defined...")
            MongoConnection.end();
            this.valid = false;
            return this;
        }

        const { email, name, content } = this.body as any
        if (!email || !name || !content) {
            console.error(validationMsg + "invalid body defined...")
            MongoConnection.end();
            this.valid = false;
            return this;
        }

        this.validatedBody = {
            email, name, content,
            timeSent: new Date()
        }
        this.valid = true
        console.log("Mongo: Valid")
        return this
    }
    save = async () => {
        if (!this.valid) {
            console.error("Invalid Request Body.")
            MongoConnection.end();
            return;
        }
        console.log("Mongo: Saving")
        const newMessage = new Message(this.validatedBody);
        await newMessage.save();
        console.log("Mongo: Finishing")
        this.document = newMessage
        MongoConnection.end();
        console.log("Mongo: Returning")
        return newMessage
    }
    onError(callback: (e: any) => void) {
        this.onErrorCallback = callback
    }
    onErrorCallback: (e: any) => void = (e: any) => {
        MongoConnection.end();
        console.error(e)
        throw e;
    }
}

export default MessageDBAdapter