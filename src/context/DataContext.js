import { useState, createContext, useEffect } from 'react'
import axios from 'axios'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [data, setData] = useState([])
        
    //get data from json api
    const getData = async () => {
        await axios.get('/data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )

            .then(function (response) {
                return response.data;
            })

            .then(function (myJson) {
                setData(myJson)
            });

    }

    const getOne = (id) => {    
      return data.find(target => target.id === parseInt(id, 10))
    }

    const isReady = () => {
        return data.length > 0
    }

    

    useEffect(() => {
        getData()        
    }, []) 
   

    return (
        <DataContext.Provider value={{data, getOne, isReady}}>
            {props.children}
        </DataContext.Provider>
    )
}