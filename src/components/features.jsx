export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Features</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className='col-12'>
                <div className="row d-flex  align-items-center">
                  <div className={`col-6 ${i % 2 == 1 ? "order-2" : "order-1"}`}>
                    <img src={d.img} alt={d.title} />
                  </div>
                  <div className={`col-6 ${i % 2 == 1 ? "order-1" : "order-2"}`}>
                    <h2>{d.title}</h2>
                    <ul className="list-unstyled mt-3 mb-4">
                      {d.options.map((c, b) => {
                        return (
                          <li className="text-left mb-4">{b + 1}: {c}</li>
                        )
                      })}

                    </ul>
                  </div>
                </div>

              </div>
            ))
            : 'Loading...'}
        </div>
      </div>
    </div >
  )
}
