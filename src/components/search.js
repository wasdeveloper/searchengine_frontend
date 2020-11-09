/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import logo from '../images/logo.png'
import axios from 'axios'
const Search = () => {
  const [val, setval] = useState('')
  const [type, settype] = useState('')
  const [err, seterr] = useState('')
  const [types, settypes] = useState([])
  const [data, setdata] = useState([])

  const go = e => {
    e.preventDefault()
    if (val.length === 0) {
      seterr("Field Can't be empty")
      //http://34.93.65.160/
    } else {
      //

      seterr('Loading...... Wait')
      console.log(type + ' ' + val)
      axios
        .get('http://localhost:3000/search/' + val)
        .then(res => {
          seterr('Data Loaded.')
          setdata(res.data)
          console.log(res.data)
        })
        .catch(err => console.log(err))
    }
  }
  useEffect(() => {
    axios
      .get('http://localhost:3000/type')
      .then(res => {
        settypes(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='container-fluid' style={{ marginTop: '30px' }}>
      <div className='conatiner mx-auto text-center'>
        <img src={logo} alt=' Image' className='img-fluid' />
      </div>
      <div className='container' style={{ marginTop: '70px' }}>
        <form className='form-group row'>
          <div className='col-md-8 col-xs-8 col-8'>
            <input
              type='text'
              className='form-control search-input'
              placeholder='Search Any File Here'
              value={val}
              onChange={e => {
                setval(e.target.value)
                seterr(' ')
              }}
            />
          </div>
          <div className='col-md-2'>
            <select
              className='form-control '
              value={type}
              onChange={e => {
                settype(e.target.value)
              }}
            >
              <option selected>Type</option>
              {types.map((name, key) => (
                <option>{name}</option>
              ))}
            </select>
          </div>
          <div className='col-md-2 col-xs-2 col-2'>
            <button
              onClick={e => {
                go(e)
              }}
              className='btn btn-search'
              type='submit'
            >
              Search
            </button>
          </div>
        </form>
        <p className='text-danger'>{err}</p>
      </div>
      <br />
      {data.length !== 0 ? (
        <div className='container-fluid d-flex flex-wrap flex-row'>
          {data.map((index, key) => (
            <div className='card' style={{ width: '18rem', margin: '15px' }}>
              <img
                src={index.img}
                className='card-img-top'
                alt='image'
                style={{ height: '300px' }}
              />
              <div className='card-body'>
                <h5 className='card-title text-center'>{index.name}</h5>
                <center>
                  <a
                    target='_blank'
                    href={index.link}
                    className='btn btn-primary text-center mx-auto'
                  >
                    Click To Watch
                  </a>
                </center>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
export default Search
