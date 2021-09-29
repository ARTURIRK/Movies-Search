function Radio(props){
    return (
        <div className="radio-box">
          <p>
            <label>
              <input
                className="with-gap"
                name="group1"
                type="radio"
                data-type="all"
                onChange={props.filter}
                checked={props.checking('all')}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="group1"
                type="radio"
                data-type="movie"
                onChange={props.filter}
                checked={props.checking('movie')}
              />
              <span>Movies</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="group1"
                type="radio"
                data-type="series"
                onChange={props.filter}
                checked={props.checking('series')}
              />
              <span>Series</span>
            </label>
          </p>
        </div>
    )
}
export {Radio}