import { IUser, IUserFilters } from '../models/user.model';

export default class UserController {
    public static async create(body: IUser) {
        // Validate body
        // Insert record into database
        // Return the inserted record

        body; // Just to avoid TS error in the example

        return;
    }

    public static async get(query?: IUserFilters) {
        // Find records in the database by the query
        // Return records

        query; // Just to avoid TS error in the example

        return;
    }

    public static async getById(id: string) {
        // Find record in the database by the id
        // Return record

        id; // Just to avoid TS error in the example

        return;
    }

    public static async update(id: string, body: IUser) {
        // Validate id and body
        // Find and update record in the database
        // Return the updated record

        id; body; // Just to avoid TS error in the example

        return;
    }

    public static async delete(id: string) {
        // Find and delete record in the database

        id; // Just to avoid TS error in the example
    }
}