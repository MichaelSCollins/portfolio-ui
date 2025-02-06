import mongoose, { Schema, Document } from "mongoose";

export interface IMessage extends Document {
    email: string;
    name: string;
    content: string;
    timeSent: Date;
}

const MessageSchema = new Schema<IMessage>({
    email: { type: String, required: true },
    name: { type: String, required: true },
    content: { type: String, required: true },
    timeSent: { type: Date, default: Date.now() },
});

export default mongoose.models.Message || mongoose.model<IMessage>("Message", MessageSchema);
