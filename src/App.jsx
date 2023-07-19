import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import HomePage from './layouts/HomePage/HomePage';
import MainComp from './components/MainComp/MainComp';
import QuizPage from './layouts/QuizPage/QuizPage';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "/",
          element: <MainComp />,
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
        },
        {
          path: "/:id",
          element: <QuizPage />,
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
          },
        }
      ]
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
