import React from 'react';
import { Outlet } from 'react-router';
import Header from './components/ui/Header';

export default function Layout({ user, setUser }) {
  return (
    <div>
      <div>
        <div>
          <Header user={user} setUser={setUser} />
        </div>
      </div>
      <div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
