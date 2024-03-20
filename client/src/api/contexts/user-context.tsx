import { ReactNode, createContext, useEffect, useState } from "react";
import { User, authSubscribe } from "@junobuild/core";

export const AuthContext = createContext({});

export const Auth = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>();

    useEffect(() => {
        const unsubscribe = authSubscribe((user) => setUser(user));

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {user !== undefined || user !== null ? (
                <div>{children}</div>
            ) : (
                <p>Not signed in.</p>
            )}
        </AuthContext.Provider>
    );
};