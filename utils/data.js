// Should I create a separate variable to store an object of reactions???? inside of nest within the thoughts?

const userData = [
  {
    userName: "Chris",
    email: "Chris@gmail.com",
  },
  {
    userName: "John",
    email: "John@gmail.com",
  },
  {
    userName: "Sam",
    email: "Sam@gmail.com",
  },
  {
    userName: "Julian",
    email: "Julian@gmail.com",
  },
  {
    userName: "Sarah",
    email: "Sarah@gmail.com",
  },
];

const thoughtData = [
  {
    thoughtText: "Just a random thought about nothing.",
    //creator of thought
    userName: "Chris",
    reactions: [
      {
        reactionBody: "Wow that was very insightful information about nothing.",
        userName: "john",
      },
    ],
  },
  {
    thoughtText: "Wow just another random thought about nothing.",
    //creator of thought
    userName: "John",
    reactions: [
      {
        reactionBody: "Wow that was very insightful information about nothing.",
        userName: "Chris",
      },
    ],
  },
  {
    thoughtText: "Would you look at that, just another random thought about nothing.",
    //creator of thought
    userName: "Sam",
    reactions: [
      {
        reactionBody: "That is a very interesting view you have on nothing",
        userName: "Julian",
      },
    ],
  },
  {
    thoughtText: "Wow!!!!! Look at that, just another random thought about nothing.",
    //creator of thought
    userName: "Julian",
    reactions: [
      {
        reactionBody: "I can defiantly agree with you thought about nothing.",
        userName: "Sam",
      },
    ],
  },
  {
    thoughtText: "I've got nothing more to say about nothing",
    //creator of thought
    userName: "Julian",
    reactions: [
      {
        reactionBody: "Yeah me either, nothing is just nothing.",
        userName: "John",
      },
      {
        reactionBody: "Yep I'm all out of nothing",
        userName: "Sam",
      },
      {
        reactionBody: "Finally someone says it, theres nothing more to say about nothing.",
        userName: "Julian",
      },
      {
        reactionBody: "I might have one more thing to say about nothing....... nothing :D",
        userName: "Chris",
      },
    ],
  },
];

module.exports = { userData, thoughtData };
