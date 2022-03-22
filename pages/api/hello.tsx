// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const body = req.body;
  const nom=body.name;
  console.log(nom)
  
    fetch("http://localhost:4000/api/items", {
      method: "POST",
      body:  JSON.stringify({name: nom}),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }).then((response) => response.json());
 
  res.status(200).json({ name: "John Doe" });
}
