import { Routes, Route } from 'react-router-dom'
import {Header} from './Header'
import {BookList} from './BookList'
import {BookDetail} from './BookDetail'
import {FC} from "react";


export const App: FC = () => (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<BookList />} />
      <Route path='/:id' element={<BookDetail />} />
    </Routes>
  </>
)



