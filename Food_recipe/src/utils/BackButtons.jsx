import {useNavigate} from "react-router-dom"


export default function BackButtons() {
    const navigate = useNavigate()

  return (
    <div>
       <button
        className="text-blue-400 font-bold py-2 px-4  "
        onClick={() => navigate(-1)}
      >
        &larr; Back
      </button>
    </div>
  )
}
