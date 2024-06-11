import { CreateEventDto } from './dtos/CreateEvent.dot';
import { Event } from './types/response';
import EventModel, { IEvent } from './models/event'; // Mongoose Event model

// No changes needed here if the EventService class doesn't need any constructor parameters.
class EventService {
    async getEventById(id: string): Promise<Event | IEvent | null> {
        return EventModel.findById(id).exec();
    }

    async getEvents(): Promise<(Event | IEvent)[]> {
        return EventModel.find().exec();
    }

    async createEvent(userDto: CreateEventDto): Promise<Event | IEvent> {
        const newEvent = new EventModel({
            name: userDto.name,
            description: userDto.description,
            date: new Date(userDto.date),
            location: userDto.location,
            duration: userDto.duration,
        });

        await newEvent.save();
        return newEvent;
    }
}

export default EventService;
