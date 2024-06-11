import { CreateEventDto } from './dtos/CreateEvent.dot';
import { Event } from './types/response';
import EventModel, { IEvent } from './models/event'; // Mongoose Event model

class EventService {
    async getEventById(id: number): Promise<Event | IEvent | null> {
        // Check the database for the event by ID
        return EventModel.findById(id).exec();
    }

    async getEvents(): Promise<(Event | IEvent)[]> {
        // Fetch all events from the database
        return EventModel.find().exec();
    }

    async createEvent(userDto: CreateEventDto): Promise<Event | IEvent> {
        // Create a new event instance
        const newEvent = new EventModel({
            name: userDto.name,
            description: userDto.description,
            date: new Date(userDto.date),
            location: userDto.location,
            duration: userDto.duration,
        });

        // Save the new event to the database
        await newEvent.save();

        // Return the saved event
        return newEvent;
    }
}

export default EventService;
