"use client";

import AdminSideMenu from "@/app/components/admin/AdminSideMenu";

export default function Layout({ children }) {
  return (
    <main className="flex ">
      <AdminSideMenu/> 
      {children}
    </main>
  );
}
