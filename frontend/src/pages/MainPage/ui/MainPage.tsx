import { useEffect } from 'react'
import axios from 'axios'

const MainPage = () => {
  useEffect(() => {
    axios.get('/api/v1/channels')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  return <div>MainPage</div>
}

export default MainPage
