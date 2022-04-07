export default function handler(req, res) {
  const { pid } = req.query;
  console.log(pid)
  try {
  fetch("http://localhost:5000/api/items/"+pid, {
    method: "DELETE",
  }).then((response) => res.status(200).send({ response })
  );
 
} catch (err) {
  res.status(500).send({ error: 'failed to delete data' })
};

}
