import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./component/Home.page";

const queryCLient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryCLient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
