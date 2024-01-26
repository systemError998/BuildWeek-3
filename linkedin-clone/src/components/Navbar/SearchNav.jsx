import React from 'react';
import { Form } from 'react-bootstrap';
import { IoSearch } from "react-icons/io5";
import Logo from '../../assets/logo.png';
import { Typeahead } from 'react-bootstrap-typeahead'
import { useState } from 'react';
import axios from 'axios';

export default function SearchNav() {
  const [query, setQuery] = useState('');
  const options = [];

  const handleSearch = (selected) => {
    // Aggiorna la query quando l'utente seleziona un'opzione
    if (selected.length > 0) {
      setQuery(selected[0]);
    }
  }

  const fetchJobs = () => {
    axios
      .get(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className='d-flex justify-content-between align-items-center my-0 py-0'>
      <img src={Logo} alt="logo" className='me-2' style={{width: '2rem'}}/>
      <div
        className='d-flex justify-content-between align-items-center rounded-1'
        style={{background: '#EDF3F8', border: 'none',}}>
        <IoSearch className='navbarIcon ms-3' />
        <Form.Group className='d-flex' onSubmit={fetchJobs}>
          <Typeahead
            id="basic-typeahead-single"
            labelKey="name"
            onChange={handleSearch}
            options={options}
            placeholder="Cerca"
          />
          <button type="submit" onClick={fetchJobs} className='btn btn-primary'>Cerca</button>
        </Form.Group>
      </div>
    </div>
  )
}

