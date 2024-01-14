const { SlashCommandBuilder } = require("discord.js");

async function getJokes() {
  const jokeURL = "https://v2.jokeapi.dev/joke/Any?type=single";

  let joke = await fetch(jokeURL);
  let data = await joke.json();
  return data["joke"];
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("joke")
    .setDescription("Makes random jokes."),
  async execute(interaction) {
    getJokes().then((data) => interaction.reply(data));
  },
};
