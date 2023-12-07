import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home.jsx";
import Starred from "./pages/Starred.jsx";
import Movies from "./pages/Movies.jsx";
import NoMatch from "./pages/NoMatch.jsx";
import MainLayout from "./componenets/MainLayout.jsx";
import { GlobalTheme } from "./theme.jsx";
// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/starred" element={<Starred />} />
            </Route>
            <Route path={`/movie/:imdbID`} element={<Movies />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;
