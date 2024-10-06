/* eslint @typescript-eslint/no-var-requires: "off" */

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Replies with your input!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')
                .setRequired(true)),
    async execute(interaction) {
        const input = interaction.options.getString('input');
        await interaction.reply(input);
    },
};

/*
        option.setName('input')
            .setDescription('The input to echo back')
            // temp
            .setRequired(true)
            .addChoices(
                { name: 'Funny', value: 'gif_funny' },
                { name: 'Meme', value: 'gif_meme' },
                { name: 'Movie', value: 'gif_movie' },
            ))
    .addChannelOption(option =>
        option.setName('channel')
            .setDescription('The channel to echo into'))
    .addBooleanOption(option =>
        option.setName('ephemeral')
            .setDescription('Whether or not the echo should be ephemeral'));
*/
