import React, { type ReactNode } from 'react';
import { TRPCReactProvider } from '@/trpc/react';

interface Props {
  children: ReactNode;
}

const Provider = ({ children }: Props) => {
  return <TRPCReactProvider>{children}</TRPCReactProvider>;
};

export default Provider;
