import { createContext, useEffect, useState } from "react";

export interface User {
    name: string;
    age: number;
    isMarried: boolean;
}

interface UserContextType {
    users: User[] | null;
    addUser: (user: User) => void;
    updateUser: (id: string) => void;
    deleteUser: (id: string) => void;
}

// Default values
const contextInitialValues: UserContextType = {
    users: null,
    addUser: () => null,
    updateUser: () => null,
    deleteUser: () => null,
};

// Create Context
export const UserContext = createContext<UserContextType>(contextInitialValues);

interface Props {
    children: React.ReactNode;
}

export const UserProvider = ({ children }: Props) => {
    const [users, setUsers] = useState<User[] | null>(null);

    // Initialize fake data
    useEffect(() => {
        setUsers([{ name: "PALDO", age: 26, isMarried: false }]);
    }, []);

    const addUser = (user: User) => {
        if (users) setUsers([...users, user]);
    };

    const updateUser = (id: string) => null;

    const deleteUser = (id: string) => null;

    return (
        <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
            {children}
        </UserContext.Provider>
    );
};
