'use client';

import clientDB from '@/lib/instantClient';

export default function ActiveCounter() {
  const room = clientDB.room('pages', 'all');
  const { peers } = room.usePresence();
  const numActive = Object.values(peers).length + 1;
  return (
    <div>Active readers: {numActive} </div>
  )
}
