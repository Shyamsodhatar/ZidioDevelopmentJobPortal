

const Button = ({onClickHandLer,vaLue,titLe}) => {
  return (
    <button onClick={onClickHandLer} value={vaLue} className={'px-4 py-1 border text-base hover:bg-blue hover:text-white'}>
      {titLe}
    </button>
  )
}

export default Button;