const { Events } = require("discord.js");

module.exports = {
  name: Events.GuildMemberAdd,
  execute(client) {
    client.on("guildMemberAdd", (member) => {
      console.log(
        `New User "${member.user.username}" has joined "${member.guild.name}"`
      );
      member.guild.channels.cache
        .find((c) => c.name === "welcome")
        .send(`"${member.user.username}" has joined this server`);
    });
  },
};
