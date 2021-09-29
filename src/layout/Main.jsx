import React from "react"
import { Movies} from '../components/Movies'
import {Search} from '../components/Search'
import { Preloader} from '../components/Preloader'
import {Start} from '../components/Start'
const API_KEY = process.env.REACT_APP_API_KEY;
class Main extends React.Component  {
    state ={
        moviesList:[],
        loading: true,
        start: true,
    }
    ChangeMovies=(str,type='all')=>{
        this.setState({loading:true, start: false})
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` :``}`)
            .then(resp=> resp.json())
            .then(data => this.setState({moviesList:data.Search || [], loading:false}))
    }
    render(){
        const {moviesList, loading,start} = this.state;
        return <main className='container content'>
                <Search change={this.ChangeMovies} />
                 {
                   loading ?(
                   start ?
                    (<Start />):
                    (<Preloader  />) 
                    ):
                <Movies movies={moviesList} />        
                }              
            </main> 
    }
}
export {Main}