function Input(props){
    return (
        <div className="input-field d-flex inline">
          <input
            type="search"
            placeholder="search"
            value={props.search}
            onChange={props.change}
            onKeyPress={props.keyHandler}
            className="validate"
          />
          <button
            className="waves-effect waves-light btn"
            onClick={props.click}
          >FIND
          </button>
        </div>
    )   
}
export {Input}