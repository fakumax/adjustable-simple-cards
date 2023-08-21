const App = (): JSX.Element => {
  // Estilos del componente Container

  const containerStyle = {
    border: '1px solid black',
    padding: '20px'
  }

  const exampleHeightStyle = {
    height: '100vh'
  }

  const exampleMinHeightStyle = {
    minHeight: '100vh'
  }

  return (
    <>
      <div>
        <div style={containerStyle}>
          <div style={exampleHeightStyle}>This is an example with 100vh height.</div>
          <div style={exampleMinHeightStyle}>This is an example with min-height of 100vh.</div>
        </div>
      </div>
    </>
  )
}

export default App
