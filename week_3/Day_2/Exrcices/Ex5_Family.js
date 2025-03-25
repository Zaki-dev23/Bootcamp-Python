//🌟 Exercise 5 : Family

//1
const family = {
    father: "John",
    mother: "Emily",
    son: "Michael",
    daughter: "Sarah",
  };
  //2
  console.log("Family Members:");
  for (const member in family) {
    console.log(member);
  }
  //3
  console.log("Family Member Names:");
  for (const member in family) {
    console.log(family[member]);
  }