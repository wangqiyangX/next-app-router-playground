import { Boundary } from '#/ui/boundary';
import { Mdx } from '#/ui/codehike';
import { CounterProvider } from 'app/context/counter-context';
import React from 'react';
import ContextClickCounter from './context-click-counter';
import Readme from './readme.mdx';
const title = 'Client Context';

export const metadata = {
  title,
  openGraph: { title, images: [`/api/og?title=${title}`] },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Boundary label="演示" kind="solid" animateRerendering={false}>
        <Mdx source={Readme} collapsed={true} />
      </Boundary>

      <Boundary
        label="layout.tsx (服务器环境)"
        kind="solid"
        animateRerendering={false}
      >
        <Boundary
          label="Context Provider (客户端环境)"
          color="blue"
          animateRerendering={false}
        >
          <CounterProvider>
            <div className="flex flex-col gap-9">
              <ContextClickCounter />
              {children}
            </div>
          </CounterProvider>
        </Boundary>
      </Boundary>
    </>
  );
}
