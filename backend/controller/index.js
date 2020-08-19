let express = require('express')
let page = express.Router()


// INDEX Route
page.get('/', (req, res) => {
    Page.find({}, (err, foundPage) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(foundPage)
    })
  })

// POST Route
page.post('/', async (req, res) => {
    Page.create(req.body, (error, createdPage) => {
      if (error) {
        res.status(400).json({ error: error.message })
      }
      res.status(200).send(createdPage) 
    })
  })
  
// UPDATE Route
page.put('/:id', (req, res) => {
    Page.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPage) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(updatedPage)
    })
  })

  // DELETE Route
  page.delete('/:id', (req, res) => {
    Page.findByIdAndRemove(req.params.id, (err, deletedPage) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(deletedPage)
    })
  })

  //Find user route 
  page.post('/username' , (re,res)=>{
    Page.findById(req.params.username, (err, foundPage) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(foundPage)
    })
  })



// SEED ROUTE for DB //




module.exports = page