export const Pricing = (props) => {
  return (
    <div id='pricing' className='text-center'>
      <div className="container">
        <div className='section-title'>
          <h2>Pricing</h2>
        </div>
        <div className="card-deck mb-3 text-center">
          {props.data
            ? props.data.map((d, i) => (
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">{d?.title}</h4>
                </div>
                <div className="card-body">
                  <h2 className="card-title pricing-card-title">${d.price}</h2>
                  <ul className="list-unstyled mt-3 mb-4">
                    {d.options.map((c) => {
                      return (
                        <li>{c}</li>
                      )
                    })}

                  </ul>
                </div>
              </div>
            ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
