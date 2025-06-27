import "./globals.css";
import DashboardTopNav from "@/components/navbar";
import DashboardSideBar from "@/components/sidebar";

export default function RootLayout({ children }) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <body className="antialiased">
                    <div className="flex h-screen overflow-hidden w-full">
                        <DashboardSideBar />
                        <main className="flex-1 overflow-y-auto">
                            <DashboardTopNav>{children}</DashboardTopNav>
                        </main>
                    </div>
                </body>
            </html>
        </>
    );
}
