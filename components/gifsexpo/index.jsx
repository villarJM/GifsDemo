import { useEffect, useState } from "react"

const GifsExpo = ({ categories }) => {
  const [gifsList, setGifsList] = useState([])


  useEffect(
    () => {
      const getGifsList = async () => {
        const gifs = await Promise.all(categories.map(async (category) => {
          const query = encodeURIComponent(category)
          const apikey = "bJmQ2AF7zss7ks0Je8Y3ZUhZ0Q4udGWk"
          const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${query}&limit=10`)
          const gifsList = await response.json()
          return gifsList
        }))
        let urlList = []
        console.log(gifs);
        gifs.forEach(gif => {
          const data = gif.data.map((item) => {
            return item.images.fixed_height.url.split('?')[0]
          })
          urlList = [...urlList, ...data]
        })
        setGifsList([...urlList])
      }
      getGifsList()
    }
    , [categories]
  )


  return (
    <>
      <div>
      {
        gifsList.map( (url) => (
          
          <img key={url} src={url}/>
        ))
      }
      </div>
    </>

  )
}

export default GifsExpo