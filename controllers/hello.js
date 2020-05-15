exports.hello = (req, res) => {
  const string = req.params.string;
  res.status(200).send(`Hey there ${string}!`);
}