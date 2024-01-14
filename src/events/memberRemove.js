const { Events } = require("discord.js");

module.exports = {
  name: Events.GuildMemberRemove,
  execute(client) {
    client.on("guildMemberRemove", (member) => {
      console.log(
        `New User "${member.user.username}" has left "${member.guild.name}"`
      );
      member.guild.channels.cache
        .find((c) => c.name === "good_bye")
        .send(`"${member.user.username}" has left this server`);
    });
  },
};
