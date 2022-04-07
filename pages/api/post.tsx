// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const body = req.body;
  const nom=body.name;
  let resp;
  try {
    fetch("http://localhost:5000/api/items", {
      method: "POST",
      body:  JSON.stringify(body),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }).then((response) => res.status(200).send({ response })
    );
   
  } catch (err) {
    res.status(500).send({ error: 'failed to post data' })
  }

}
