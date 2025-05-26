import "@/styles/globals.css";
import Dashboard from "@/pages/Dashboard";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Dashboard />
      <Component {...pageProps} />
    </>
  )// Render the current page with its props
}
