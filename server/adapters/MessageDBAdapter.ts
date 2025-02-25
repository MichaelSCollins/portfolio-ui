/* eslint-disable @typescript-eslint/no-explicit-any */
import Message from '@/server/models/message'
// import MessageFilter from "../filter/MessageFilter";
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
        if (!MessageDBAdapter.instance)
        {
            MessageDBAdapter.instance = new MessageDBAdapter()
        }
        return await MessageDBAdapter.instance
            .setBody(body)
            .toMongoDB()
    }
    static async fromMongoDB(
        filter: any) {
        if (!this.instance)
        {
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
        try
        {
            MongoConnection.connect();
            const { id, subject, email } = this.filter
            // const messageFilter = MessageFilter.build({
            //     email
            // })
            if (!!id)
                messageDoc = await Message.findById(id)
            if (!!email || !!subject)
                messageDoc = await Message.find().where(
                    { email }
                )
        } catch (e: any)
        {
            this.onError(e)
        }
        return messageDoc
    }
    toMongoDB = async () => {
        try
        {
            MongoConnection.connect();
            const savedDoc = await this
                .validate()
                .save()
            MongoConnection.end();
            return savedDoc
        } catch (e: any)
        {
            this.onError(e)
        }
    }
    validate = () => {
        const validationMsg = "Failed validation: ";
        if (!this.body)
        {
            console.error(validationMsg + "no body defined...")
            this.valid = false;
            return this;
        }

        const { email, subject, content } = this.body as any
        if (!email || !subject || !content)
        {
            console.error(validationMsg + "invalid body defined...")
            this.valid = false;
            return this;
        }

        this.validatedBody = {
            email, subject, content,
            name: 'name',
            timeSent: new Date()
        }
        this.valid = true
        return this
    }
    save = async () => {
        if (!this.valid)
        {
            console.error("Invalid Request Body.")
            MongoConnection.end();
            return;
        }
        console.log("Mongo: Creating Document")
        const newMessage = new Message(this.validatedBody);
        console.log("Mongo: Saving Document")
        try
        {
            this.document = await newMessage.save();
        } catch (e: any)
        {
            console.error(e.message)
        }
        console.log("Mongo: Done", this.document)
        console.log("Mongo: Ending Connection")
        MongoConnection.end();
        return this.document
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