'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';

export function SignInForm() {
  const [email, setEmail] = useState('owner@example.com');
  const [password, setPassword] = useState('password123');

  return (
    <form
      className="space-y-4 rounded-xl bg-white p-6 shadow"
      onSubmit={async (e) => {
        e.preventDefault();
        await signIn('credentials', { email, password, callbackUrl: '/dashboard' });
      }}
    >
      <input className="w-full rounded border p-2" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="w-full rounded border p-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="w-full rounded bg-primary p-2 text-white" type="submit">Sign in</button>
    </form>
  );
}
