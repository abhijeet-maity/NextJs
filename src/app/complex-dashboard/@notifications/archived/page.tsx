import { Card } from '@/components/Card';
import React from 'react';
import Link from 'next/link';

const ArchivedNotifications = () => {
  return (
    <Card>
        <div>Archived Notifications</div>
        <div>
            <Link href="/complex-dashboard">Default</Link>
        </div>
    </Card>
  )
}

export default ArchivedNotifications;