import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import Card from './components/Cards'
import {getFastMovies, getToNextPage} from './axios/axios'
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import Modal from './components/Modal'
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";


const App = () => {
	const [movies, setMovies] = useState([]);
	const [fastMovies, setFastMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [showModal, setShowModal] = useState(false)
	const [pageValue, setPageValue] = useState("")
	const [filters, setFilters] = useState({
		title: "fast",
		page: 1
	})

	const getFastMv = async () => {
		try{
			const response = await getFastMovies(filters.title, filters.page)
			// console.log('res',response)
			return setFastMovies(response.data.data.Search)
		}catch(error){
			console.log(error.message)
		}
	};
	const showNextPage = async () => {
		try {
		  const nextPage = filters.page + 1;
		  setFilters({ ...filters, page: nextPage });
		} catch (error) {
		  console.log(error);
		}
	  };
	  const showPreviousPage = async () => {
		try {
			if(filters.page === 1 ){
				return null
			}
		  const nextPage = filters.page - 1;
		  setFilters({ ...filters, page: nextPage });
		} catch (error) {
		  console.log(error);
		}
	  };
	const modalShow = async(e)=>{
		try{
			console.log('click me bro')
			setShowModal(false)
		}catch(error){
			console.log(error)
		}
	  }
	useEffect(() => {
		getFastMv();
	}, [filters]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	return (
		<div>
			<div>
				<MovieListHeading heading='JMovies' />
			</div>
			<div className='flex gap-[0] p-[2%] h-[100%]'>
				<div className='w-[95%]'>
			<div className='flex-wrap flex gap-4 h-[100%]'>
				{fastMovies.map((movie, index)=>(
					<div className='mb-[15px]' key={index}>
					<Card
						id={movie.imdbID}
						image={movie.Poster}
						onClick ={()=> setShowModal(true)} 
						/>
						<div className='flex justify-between'>
						<MdFavoriteBorder className='text-[#858585]' />
						<p className='text-[#858585]'>{movie.Type}</p>
						<p className='text-[#858585]'>{movie.Year}</p>
						</div>
						</div>
					 ))}
			</div>


					<div className='flex justify-around mb-[20px]'>
					 <button className='text-[#F9C209] flex gap-1' onClick={showPreviousPage}><GrCaretPrevious className='mt-[5%]' />PREVIOUS</button>
					 <button className='text-[#F9C209] flex gap-1' onClick={showNextPage}>NEXT<GrCaretNext className='mt-[8%]' /></button>
				</div>
			</div>
			<div className='w-1 bg-[#F9C209] mr-[3%]'></div>
			<div className='flex flex-col items-center w-[20%]'>
				<p className='mb-[5%] text-[#858585] font-Inter'><strong>FAVOURITES</strong></p>
				<div>go</div>
			</div>
			</div>

			{showModal && (
        <Modal onClose={modalShow}>
          <p className="font-Inter text-center">
          <span className="text-red-500">Your Account has been blocked, Please <a className="text-red-500" href="mailto:admin@example.com?subject=Blocked&body=Please%20Contact%20Admin">Click Here To Contact Admin</a></span>
              </p>
        </Modal>
      )}
		</div>
	);
};

export default App;
