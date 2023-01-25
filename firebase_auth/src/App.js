import
{RouterProvider,
Route,
createBrowserRouter,
createRoutesFromElements,
} from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Navbar from './Layouts/RootLayout';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar/>}>
      <Route index element={<Home />}  />
      <Route path="/Signup" element={<Signup />}  />
      <Route path="/Signin" element={<Signin />}  />
    </Route>
  )
)

function App() {
  return (
    <>
    <RouterProvider router={router} />
    
    </>
  );
}

export default App;
