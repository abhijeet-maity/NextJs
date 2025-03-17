import { Card } from '@/components/Card';
import React from 'react';
import Link from 'next/link';

const Notifications = () => {
  return (
    <Card>
        <div>Default Notifications</div>
        <div>
            <Link href="/complex-dashboard/archived">Archived</Link>
        </div>
    </Card>
  )
}

export default Notifications;