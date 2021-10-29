import React, {useEffect, useState} from 'react'

import './kanyeQoute.styles.scss'


export default function KanyeQoute() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [qoute, setItems] = useState({});

  const comments = Math.floor(Math.random() * 10) + 1;
  const retweets = Math.floor(Math.random() * 30) + 25;
  const likes = Math.floor(Math.random() * 75) + 50;

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.kanye.rest/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(qoute)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
        )
      }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='container kanye-block'>
        <div className="row flex-column">
          <div className="col-2 profile-picture">
            <div className='ye-image'>  
              <img src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v.jpg" className='ye-pic' alt='kanye-pic' />
            </div>
        </div>
        <div className="col-10 d-flex flex-row">
          <div><p><b>ye</b></p></div>
          <div><i class="fas fa-certificate"></i></div>
          <div><p>@kanyewest</p></div>
        </div>
        <div className="col-10 qoute">
          <h3>{qoute.quote}.</h3>
        </div>
        <div className="icons col-10 d-flex flex-row justify-content-between">
          <div><i className="far fa-comment">{comments}k</i></div>
          <div> 
          <i className="fas fa-retweet">{retweets}k</i>
          </div>
          <div>
          <i className="far fa-heart">{likes}k</i>
          </div>
        </div>
      </div>
    </div>
     
    );
  }
}