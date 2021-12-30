import profile from '../assets/btc.jpg'
import User from './User'

const CenterContent = () => {

  let users = [
    {
      image: require('../assets/btc.jpg'),
      name: 'Faizan'
    },
    {
      image: profile,
      name: 'Moneeb'
    },
    {
      image: profile,
      name: 'Jayd'
    },
    {
      image: profile,
      name: 'Abrar'
    },
    {
      image: profile,
      name: 'Ansar'
    },
  ]

  return(
    <>
      <h1 class='usersName pb-3'>Who's Watching?</h1>
      <div class="horizontal-size d-flex flex-row justify-content-center ">
        {users.map((user) => {
          return (
            <>
            <User name = {user.name} image={user.image} />
            </>
          )
        })}
      </div>
      <div class="btn-section">
        <button type="button" class="btn btn-design px-5 py-2 mt-4">Manage Profiles</button>
      </div>
    </>
  )
}

export default CenterContent