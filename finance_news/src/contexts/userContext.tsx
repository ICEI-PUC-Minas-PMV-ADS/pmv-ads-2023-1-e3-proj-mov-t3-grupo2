import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  ReactNode,
} from 'react';

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextType {
  signed: boolean;
  setSigned?: Dispatch<React.SetStateAction<boolean>>;
  userId: number;
  setUserId?: Dispatch<React.SetStateAction<number>>;
}

export const UserContext = createContext<UserContextType>({
  signed: false,
  userId: 0,
});

export default function UserProvider({ children }: UserProviderProps) {
  const [signed, setSigned] = useState(false);
  const [userId, setUserId] = useState(0);

  const value: UserContextType = {
    signed,
    setSigned,
    userId,
    setUserId,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);

  const { signed, setSigned, userId, setUserId } = context;

  return { signed, setSigned, userId, setUserId };
}
