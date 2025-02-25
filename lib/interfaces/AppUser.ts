import { UUID } from "crypto";

interface AppUser {
    id: UUID;
    username: string;
    personalInfo: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    }
    profileImage: {
        serverUrl: string;
    };
    role: string;
}

export default AppUser;