import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from "react-router-dom";
import { router } from './lib/routes';

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
