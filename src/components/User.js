
const User = ({name, image}) => {

  return (
    <div class=" user-box d-flex flex-column">
      <img src={image} class="img-size" />
      <p class="text-wrap names">{name}</p>
    </div>
  )
}

export default User