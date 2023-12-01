type Props = {
  /** Allowed colors to choose from */
  variant?: 'green' | 'yellow' | 'red',
  width?: number,
  small?: boolean
}

const Lights = ({ variant = 'green', width = 20, small = true }: Props) => {
  return (
    <div style={{
      fontSize: small ? 16 : 24,
      padding: 20,
      backgroundColor: variant,
      borderRadius: '50%',
      width: width,
      height: 20
    }}>Hey</div>
  )
}

export default Lights