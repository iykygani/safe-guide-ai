import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Breadcrumb } from "./Breadcrumb";
import { PanicButton } from "@/components/shared/PanicButton";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex w-full">
      <Sidebar />
      
      <div className="flex-1 flex flex-col lg:ml-0">
        <Header />
        
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb />
            {children}
          </div>
        </main>
      </div>
      
      <PanicButton />
    </div>
  );
}