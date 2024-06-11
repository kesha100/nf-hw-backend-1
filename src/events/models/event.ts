// src/models/event.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IEvent extends Document {
    name: string;
    description: string;
    date: Date;
    location: string;
    duration: string;
}

const EventSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    duration: { type: String, required: true },
});

const EventModel = mongoose.model<IEvent>('Event', EventSchema);

export default EventModel;
export { IEvent };
