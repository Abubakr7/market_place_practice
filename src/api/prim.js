function mass(a) {
  let b = a.map((el) => {
    return el
  });
  let c=b.map((el)=>{
    return el.media.map((el)=>{
        return el.src
    })
  })
  return c;
}
console.log(
  mass([{
    name: "Poco F4 8/256GB Night Black",
    categoryId: 1,
    subCategoryId: 1,
    brandId: 1,
    proc: [
      {
        key: "Процессор",
        value: "Qualcomm Snapdragon 870",
      },
      {
        key: "Количество ядер процессора",
        value: "8",
      },
    ],
    description: "<p>Hello</p>",
    media: [
      {
        type: "image/jpeg",
        src: "uploads\\1688645121025.jpg",
      },
    ],
    id: 6,
  }])
);
