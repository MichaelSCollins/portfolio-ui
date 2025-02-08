import mongoose, { Schema, Document } from "mongoose";
export interface IMessage {

    email: string;
    name: string;
    content: string;
    timeSent: Date;
}
export interface IMessageDoc extends IMessage, Document {
}

const MessageSchema = new Schema<IMessageDoc>({
    email: { type: String, required: true },
    name: { type: String, required: true },
    content: { type: String, required: true },
    timeSent: { type: Date, default: Date.now() },
});

export default mongoose.models.Message || mongoose.model<IMessageDoc>("Message", MessageSchema);
