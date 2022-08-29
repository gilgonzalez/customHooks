import React, { useEffect, useState } from 'react'

export const useFetch = (url:string) => {

    const [state, setState] = useState({
        data: {quote:'',
                author:''},
        isLoading: true,
        hasError: null
    })

    const getFetch = async () => {

        setState({
            ...state, 
            isLoading:true
        })
        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data : {quote:data[0].quote,
                    author:data[0].author},
            isLoading:false,
            hasError: null
        })  
    }

    useEffect(() => {
        getFetch();

    }, [url])

    return {
        data: state.data,
        isLoading : state.isLoading,
        hasError : state.hasError
    };
    
}

