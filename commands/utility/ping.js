/* eslint @typescript-eslint/no-var-requires: "off" */

const { SlashCommandBuilder } = require('discord.js');

const wait = require('node:timers/promises').setTimeout;

module.exports = {
    category: 'utility',
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        // triggers the <application> is thinking... message, and allow a 15 minutes timeframe to complete a response
        await interaction.deferReply({ ephemeral: true });
        await wait(4_000);

        // message with ephermal: true can only be seen by the command executor
        // await interaction.reply({ content: 'Secret Pong!', ephemeral: true });

        await wait(2_000);
        await interaction.editReply('Pong!');

        // recording the message?
        const message = await interaction.fetchReply();
        console.log(message);

        // additional follow-up messages
        await interaction.followUp('Pong again!');
        await interaction.deleteReply();

        await interaction.followUp({ content: 'Pong again! again!', ephemeral: true });
    },
};