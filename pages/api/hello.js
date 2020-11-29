export default (req, res) => {
    res.status(200).json({ text: 'Hello' })
}

// Try accessing it at http://localhost:3000/api/hello. You should see {"text":"Hello"}. Note that:
// req is an instance of http.IncomingMessage, plus some pre-built middlewares
// res is an instance of http.ServerResponse, plus some helper functions


// A good use case for API Routes is handling form input. For example, you can create a form on your page and have it send a POST request to your API Route. You can then write code to directly save it to your database. The API Route code will not be part of your client bundle, so you can safely write server-side code:
export default (req, res) => {
    const email = req.body.email
    // Then save email to your database, etc...
}

