import React, { type PropsWithChildren } from 'react';
import { createContext } from 'react'

const userDetails: { name: string, age: number, change?: ({ name: string, age: number }) => void } = {
    name: "Daniel Emmanuel",
    age: 103,

}

export const UserContext = createContext<typeof userDetails>(userDetails);

const UserDetailsProvider = ({ children }: PropsWithChildren) => {
    const [details, setDetails] = React.useState(userDetails);
    const change = ({ name, age }: { name: string, age: number }) => {
        setDetails({
            name,
            age,
        })
    }

    return (
        <UserContext.Provider value={{ name: details.name, age: details.age, change }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserDetailsProvider;