const ProductImage = ({ name, available }) => {
  return (
    <div style={{ aspectRatio: '1', filter: `grayscale(${available ? 0 : 1})` }}>
      <img variant="top" src={`https://avatars.dicebear.com/api/jdenticon/${name}.svg`} />
    </div>
  )
}

export default ProductImage