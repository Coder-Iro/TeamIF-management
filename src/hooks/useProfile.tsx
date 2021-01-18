import React, { createContext, useContext, useEffect, useState } from 'react';
import Api from '../api';
import { ProfileType } from '../types/Payload';

const context = createContext<ProfileType | undefined>(undefined);

export const ProfileProvider: React.FC = ({ children }) => {
  const [profile, setProfile] = useState<ProfileType | undefined>(undefined);

  useEffect(() => {
    Api.get('/member/').then((res) => {
      if (res.data) setProfile(res.data);
    });
  }, []);

  return <context.Provider value={profile}>{children}</context.Provider>;
};

export const useProfile = () => useContext(context);
