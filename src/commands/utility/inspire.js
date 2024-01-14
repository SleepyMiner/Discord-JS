const { SlashCommandBuilder } = require("discord.js");

async function getQuotes() {
  const inspireURL = "https://zenquotes.io/api/random";

  let quote = await fetch(inspireURL);
  let data = await quote.json();
  data = `${data[0]["q"]} - ${data[0]["a"]} `;

  return data;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("inspire")
    .setDescription("Gives inspirational quotes."),
  async execute(interaction) {
    getQuotes().then((data) => interaction.reply(data));
  },
};
