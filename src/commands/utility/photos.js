const { SlashCommandBuilder } = require("discord.js");
const {
  accessKey,
} = require("/Users/Swayam Gupta/Documents/VS Code/GitHub Repos/Discord JS/config.json");
async function getQuotes(search) {
  let photos = await fetch(
    `https://api.unsplash.com/photos/random/?query=${search}`,
    {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    }
  );

  let data = await photos.json();

  return data["urls"]["regular"];
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("photo")
    .setDescription("Gives photo of what you want.")
    .addStringOption((option) =>
      option
        .setName("search")
        .setDescription("What you want the photo of?")
        .setRequired(true)
    ),
  async execute(interaction) {
    const search = interaction.options.getString("search") ?? "Dogs";
    getQuotes(search).then((data) => interaction.reply(data));
  },
};
