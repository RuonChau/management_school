'use client';
import { useRouter } from 'next/navigation'
import { useEffect } from "react";
import AdminPage from "./(dashboard)/admin/page";
import DashboardLayout from './(dashboard)/layout';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    // Always do navigations after the first render
    router.push('/admin')
  }, [])

  
  return (
    <DashboardLayout>
      <AdminPage/>
    </DashboardLayout>
  );
}
