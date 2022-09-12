<interface  ButtonProps {
  title: string;
}
function Button(props: ButtonProps) {
  return(
    <button>
      Send
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="Send 1"/>
      <Button />
/>
    </div>
  )
}

export default App
