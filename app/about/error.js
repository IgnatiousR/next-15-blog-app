'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
import {useRouter} from 'next/navigation'
import { startTransition } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  const router = useRouter()
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button className='border cursor-pointer p-2'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => {
            startTransition(()=>{
              router.refresh()
              reset()
            })
          }
        }
      >
        Try again
      </button>
    </div>
  )
}