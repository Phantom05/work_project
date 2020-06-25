async function main() {
  const { data } = await axios.get(api.coffeeData);
  console.log(data.list, "d");
}
main();
