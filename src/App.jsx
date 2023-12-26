import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import ProductDetail from './components/ProductDetail/ProductDetail';
// React -> COMPONENT TREE *** App.js -> navbar.js, footer.js -> ...
// Javascript Xml
// JSX => Javascript + HTML => isim karışıklığı
function App() {
	// değiştiğinde UI'i da update edecek değişken
	//useState => react fonksiyon (react hooks)
	//useEffect (fonksiyon, [dep_list])
	// const [getter, setter] = useState(initial)
	// her sayfa açılışı useEffect'i etkiler
	// dep listdeki değişkenlerden herhangi biri değiştiğinde tetiklenir.
	// useState
	// useEffect
	// Inputtan değer okumak
	// Listeyi jsx'de iterate etmek
	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Homepage />}>  </Route>
					<Route path='/about' element={<About />}>  </Route>
					<Route exact path="/product-detail" element={<ProductDetail />} />
					<Route path='*' element={<p>Not Found</p>}>  </Route>
				</Routes>
			</BrowserRouter >
		</>
	);
}
// export const variable = 1;
// export const variable2 = 2;
// const variable3 = 3;
export default App;