const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div>
                <img src="../images/Cursed_Cat.jpg" alt="Cat" width="500" height="600"/>
                
              </div>
              
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }

module.exports = error404