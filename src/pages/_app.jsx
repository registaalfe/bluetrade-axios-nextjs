import "@/styles/globals.css";
import Dashboard from "@/pages/Dashboard";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen min-w-dvh grid grid-cols-[auto_1fr] max-md:grid-cols-1">
      <Dashboard />
      <Component {...pageProps} />
    </div>
  )// Render the current page with its props
}
