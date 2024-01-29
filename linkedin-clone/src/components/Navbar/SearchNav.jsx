import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { IoSearch } from "react-icons/io5";
import Logo from '../../assets/logo.png';
import { Typeahead } from 'react-bootstrap-typeahead';
import { fetchJobSearch } from '../../redux/slice/JobSearchSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs } from '../../redux/slice/JobsSlice'

export default function SearchNav() {
  const [query, setQuery] = useState('');
  const jobsResponse = useSelector(state => state.jobSearch.jobSearch)
  console.log(jobsResponse);
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    // Aggiorna la query quando l'utente seleziona un'opzione
    if (e.key === 'Enter') {
      setQuery(e.target.value);
      dispatch(fetchJobSearch(query))
    }
  }

  useEffect(() => {
    dispatch(fetchJobSearch(query))
  }, [dispatch])

  return (
    <div className='d-flex justify-content-between align-items-center my-0 py-0'>
      <img src={Logo} alt="logo" className='me-2' style={{ width: '2rem' }} />
      <div
        className='d-flex justify-content-between align-items-center rounded-1'
        style={{ background: '#EDF3F8', border: 'none', }}>
        <IoSearch className='navbarIcon ms-3' />
        <Form.Group className='d-flex' >
          {jobsResponse &&
            <Typeahead
              id="basic-typeahead-single"
              onKeyDown={handleSearch}
              onSubmit={handleSearch}
              placeholder="Cerca un lavoro..."
              options={jobsResponse.map((job) => job.title)}
            />}
          <button type="submit" onClick={handleSearch} className='btn btn-primary'>Cerca</button>
        </Form.Group>
      </div>
    </div>
  )
}