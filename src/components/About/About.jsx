'use client'

import { useState, useEffect } from 'react'

export default function About() {
    const [name, setName] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/todos')
                const data = await res.json()
                console.log('data', data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [])

    return <div>About Page</div>
}
