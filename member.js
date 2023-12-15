function skillsMember() {
  var skills = ["HTML", "CSS", "JS", "React", "Node"];
  var member = {
    name: "John Doe",
    age: 34,
    skills: skills,
    greet: function () {
      console.log("Hello, I'm " + this.name);
    },
  };

  console.log(member.skills[2]);
  member.greet();
}