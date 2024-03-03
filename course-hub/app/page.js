'use client'
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function HomePage() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });
  }, []);

  return (
    <div>
      {session ? (
        <>
          <h1>Welcome, {session.user.email}</h1>
        </>
      ) : (
        <>
          <h1>Course Selling Platform</h1>
          <Auth supabaseClient={supabase} /> 
        </>
      )}
    </div>
  );
}
