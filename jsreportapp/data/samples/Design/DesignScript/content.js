// Use the "beforeRender" or "afterRender" hook
// to manipulate and control the report generation

const axios = require('axios');
async function beforeRender (req, res) {
    const response = await axios.get('http://localhost:8000/api/designJson');
    req.data.designs = response.data.design
    console.log(req.data.designs)
    console.log(response.data.design)
    // return {
    //     designs: req.data.designs
    // }
}