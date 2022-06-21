
import query from './query.js';
import ACCESS from './settings.js'

const fetchOptions = {
    spaceID: ACCESS.SPACE_ID,
    accessToken: ACCESS.ACCESS_TOKEN,
    endpoint: "https://graphql.contentful.com/content/v1/spaces/" + ACCESS.SPACE_ID,
    method: "POST",
    headers: {
        Authorization: "Bearer " + ACCESS.ACCESS_TOKEN + " ",
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ query })
}


fetch(fetchOptions.endpoint, fetchOptions)
    .then(response => response.json())
    .then(data => console.log(data));