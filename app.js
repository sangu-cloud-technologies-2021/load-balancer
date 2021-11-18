const app = require('express')();
const axios = require('axios')

app.get('/', async (req, res) => {

    const headers = {
        'Metadata-Flavor': 'Google'
    }

    const result = await Promise.all([
        axios.get('http://metadata/computeMetadata/v1/instance/id', { headers }),
        axios.get('http://metadata/computeMetadata/v1/instance/name', { headers }),
    ])
    const [instanceId, instanceMame] = result.map(({ data }) => data)
    res.json({ instanceId, instanceMame})
})

app.listen(8080, async () => {
    console.log(`Listening on port 8080`);
})
