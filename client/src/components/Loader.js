import React , {useState} from 'react'
import Hashloader from 'react-spinners/HashLoader';

function Loader() {
    let [loading, setLoading] = useState(true);

  return (

    <div style={{marginTop:'150px'}} >
        <div className="sweet-loading text-center">
      <Hashloader color='#000' loading={loading} css='' size={80} />
    </div>
    </div>
  )
}

export default Loader