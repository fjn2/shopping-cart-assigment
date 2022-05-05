const ProductImage = ({ name }) => {
  return (
    <div style={{ aspectRatio: '1' }}>
      <img variant="top" src={`https://avatars.dicebear.com/api/jdenticon/${name}.svg`} />
    </div>
  )
}

export default ProductImage