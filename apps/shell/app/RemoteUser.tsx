'use client';

import React, { lazy, Suspense } from 'react';
import { mf } from '../lib/federation';

const RemoteUsers = lazy(() =>
  mf.loadRemote('users_mfe/Users').then((module) => ({
    default: module.default,
  })),
);

export default function RemoteUsersContainer() {
  return (
    <Suspense fallback={<p>Loading Users MFE...</p>}>
      <RemoteUsers />
    </Suspense>
  );
}
