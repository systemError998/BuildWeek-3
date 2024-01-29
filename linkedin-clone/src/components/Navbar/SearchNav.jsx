import React from 'react';
import { Form } from 'react-bootstrap';
import { IoSearch } from "react-icons/io5";
import Logo from '../../assets/logo.png';
import { Typeahead } from 'react-bootstrap-typeahead';
import { useState } from 'react';
import axios from 'axios';

export default function SearchNav() {
  const [query, setQuery] = useState('');
  const [ jobs , setJobs ] = useState([])
  console.log(jobs);

  const handleSearch = (e) => {
    // Aggiorna la query quando l'utente seleziona un'opzione
      //e.preventDefault()
      if(e.key === 'Enter') {
      setQuery(e.target.value);
      axios.get(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`)
      .then((res) => {
        console.log(res.data.data);
        setJobs(res.data.data)
      })
      .catch((err) => {
        console.log(err);});
      console.log(jobs);
      }}

  return (
    <div className='d-flex justify-content-between align-items-center my-0 py-0'>
      <img src={Logo} alt="logo" className='me-2' style={{width: '2rem'}}/>
      <div
        className='d-flex justify-content-between align-items-center rounded-1'
        style={{background: '#EDF3F8', border: 'none',}}>
        <IoSearch className='navbarIcon ms-3' />
        <Form.Group className='d-flex' >
          <Typeahead
            id="basic-typeahead-single"
            onKeyDown={handleSearch}
            onSubmit={handleSearch}
            placeholder="Cerca un lavoro..."
            options={jobs.map((job) => job.title) }
          />
          <button type="submit" onClick={handleSearch} className='btn btn-primary'>Cerca</button>
        </Form.Group>
      </div>
    </div>
  )
}
{/* <div>
  {option.name}
  <div>
    <small>Capital: {option.capital}</small>
  </div>
</div>
 */}