import Dashboard from "@/pages/Dashboard";
import { Provider } from "@/components/ui/provider"

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Dashboard />
      <Component {...pageProps} />
    </Provider>
  )// Render the current page with its props
}
