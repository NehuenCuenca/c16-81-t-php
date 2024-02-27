import { useEffect, useState } from "react"
import TournamentsList from "../../../components/Dashboard/TournamentsList"
import Pagination from "../../../components/Dashboard/Pagination"

// Para controlar el paginado https://v5.reactrouter.com/web/example/query-parameters

const MyTournaments = () => {
  const [tournaments, setTournaments ] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const paginatedBy = 8

  useEffect(() => {
    const getTournaments = async() => { 
      const token = localStorage.getItem(import.meta.env.VITE_USER_TOKEN_NAME)

      try {
        const resp = await fetch(`http://127.0.0.1:8000/api/tournaments?page=${currentPage}&paginatedBy=${paginatedBy}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Accept: "application/json",
            withCredentials: "true",
          }, 
        })

        const data = await resp.json()
        if(!resp.ok){
          throw new Error(`Ocurrio un error mientras se cargaban 'mis torneos': ${data.message}`)
        }

        setTotalPages(data.tournaments.last_page)

        return data.tournaments.data
      } catch (error) {
        console.error(error)
        alert(error)
        return []
      }
    }

    getTournaments()
        .then(setTournaments)
        .catch(setTournaments)
  }, [currentPage, totalPages])

  return (
    <div className={`min-h-[58vh] w-full flex flex-col justify-between gap-y-30 p-6 border-2 border-black rounded-lg`}>
      { 
        tournaments.length > 0 && 
        <>
          <TournamentsList tournaments={tournaments} className="w-full flex flex-wrap gap-y-6 gap-x-12"/>
          <Pagination className={"flex gap-x-2 mt-10"} currentPage={currentPage} setPage={setCurrentPage} totalPages={totalPages} />
        </>
      }
    </div>
  )
}

export default MyTournaments