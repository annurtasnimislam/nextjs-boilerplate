export default function Contact() {
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

    return <div>Contact</div>
}
