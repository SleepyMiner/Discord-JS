const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pings the user."),
  async execute(interaction) {
    await interaction.reply(
      `This command was run by "${interaction.user.username}".`
    );
  },
};
