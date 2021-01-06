const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");

const data = new Map();

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  }};


const log = message => {
  console.log(`Done!`);
};



client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam,  hoş geldin ');
  }
});

client.on('message', msg => {
  if (msg.content === 'f!avatar') {
    msg.channel.send({embed: {
      color: 0x0,
      
      image: {
        url: msg.author.displayAvatarURL()
    }}});
  };
  
});

client.on('message', msg => {
  if (msg.content === 'f!woman') {
    if (msg.channel.nsfw === true) {
    msg.reply(
        " <a:sallakafa:764860932773249034> You got **1** coin! <a:sallakafa:764860932773249034> \n <a:sallakafa:764860932773249034> 1 Paracık kazandın! <a:sallakafa:764860932773249034> "
      )
      .then(message => {
        var espriler = [
  "https://cdn.discordapp.com/attachments/690183533217710090/795330512347987978/Millie_Lerue.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/795330379963695104/Millie_Lerue_11.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/793910699070849094/Millie-Godzilla.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/787357378567864340/IMG_lk0cll.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/787357378076737556/ezgif-7-82581f7761fa.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/782944575274483803/2.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/782944567104110642/12.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/782944536099553280/9.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/782944518247809044/3.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/782378502954680330/c93a1e8138ecdbf3be0b870c287143a5.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/782378442720804895/Girl_34.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/782378379068178462/women_gif_435.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/782378327334977557/woman_32.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/782378270469521468/image1-1.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/782378268435283998/Girl_28.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/782378259643105280/women_gif_119.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/782378185836331028/image0-4-1.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/782378153699049512/women_gif_123.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/782378139224637450/image5.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/782378133663383552/Girl_31.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/782378092559728640/Girl_51.gif",
  "https://cdn.discordapp.com/attachments/690183533217710090/782378049135706112/Girl_42.gif"

        ];
        var espri = espriler[Math.floor(Math.random() * espriler.length)];
        if (msg.channel.nsfw === true) {
          message.channel.send({embed: {
          color: 0xD97634,
          image:  {
            url: `${espri}`

            }}});
      }});
  }}});



client.on('message', msg => {
  if (msg.content === 'f!man') {
    if (msg.channel.nsfw === true) {
    msg.reply(
        " <a:sallakafa:764860932773249034> You got **1** coin! <a:sallakafa:764860932773249034> \n <a:sallakafa:764860932773249034> 1 Paracık kazandın! <a:sallakafa:764860932773249034> "
      )
      .then(message => {
        var espriler = [
"https://cdn.discordapp.com/attachments/690183474954371080/787331936787628052/Lerue-Lucifer-3.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/771119520634241084/image0_4.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/771118911873089556/a_f28d6291ff684e84a099554b0784c62a.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/770586436252205106/995fc86b347391b87f9d4178bf4001f8.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/749229108466155590/Lerue-Helman-5.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/749229018158596156/Lerue-Helman-6.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/749228996247683202/Lerue-Herman-5.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/749228675622502410/Lerue-Helman-3.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/749228454775357480/Lerue-Fjor.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/749228219059929098/Lerue-_Helman_muah.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/749228082073960468/Lerue-Herman-5.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/749227647858638898/Lerue-Herman-2.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/748161097478963290/GIF-200826_145412-min.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/748160947922927746/GIF-200826_150337.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/748160878586626118/GIF-200826_150903.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/748160677012832347/GIF-200826_151357-min.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/748160428785270804/GIF-200826_151738-min.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/748160224195510302/GIF-200826_151622-min.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/748160059330265098/GIF-200826_153413-min.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/743597851304656896/Lerue-The_rain_11.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/742841889530708057/GIF-200321_225043-min.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/742841888268091463/GIF-200322_233004-min.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/742838227416776714/GIF-200401_233717-min.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/739863089574576209/Lerue-Helman-5.gif"
  
        ];
        var espri = espriler[Math.floor(Math.random() * espriler.length)];
        if (msg.channel.nsfw === true) {
          message.channel.send({embed: {
          color: 0xD97634,
          image:  {
            url: `${espri}`

            }}});
      }});
  }}});

  client.on('message', msg => {
    if (msg.content === 'f!couple') {

      msg.reply(
          " <a:sallakafa:764860932773249034> You got **1** coin! <a:sallakafa:764860932773249034> \n <a:sallakafa:764860932773249034> 1 Paracık kazandın! <a:sallakafa:764860932773249034> "
        )
        .then(message => {
          var espriler = [
"https://cdn.discordapp.com/attachments/690184279476535384/740589540997070858/IMG_0eyw.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/742836761381699604/GIF-200402_130805-min.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/742836762405109833/GIF-200329_110402-min.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/743597747059556383/Lerue-The_rain_-muq.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/760042123620777984/beatrice.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/782168959847366656/4o1hmj.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/782169040713809940/4o1h7w.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/795606728070266890/Lerue-Couple-5.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/719479369394815056/96689700-678866346283097-1641596.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/717058376928067654/20200601_195250.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/719409656816205924/IMG_85jx3z.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/717056007469269102/20200601_194255.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/717056244833189979/20200601_193155.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/717056245508472852/20200601_192059.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/714415167978340372/CraweL18.gif"
    
          ];
          var espri = espriler[Math.floor(Math.random() * espriler.length)];

            message.channel.send({embed: {
            color: 0xD97634,
            image:  {
              url: `${espri}`

              }}});
        });
    }});

    client.on('message', msg => {
      if (msg.content === 'f!anime') {
  
        msg.reply(
            " <a:sallakafa:764860932773249034> You got **1** coin! <a:sallakafa:764860932773249034> \n <a:sallakafa:764860932773249034> 1 Paracık kazandın! <a:sallakafa:764860932773249034> "
          )
          .then(message => {
            var espriler = [
"https://cdn.discordapp.com/attachments/690184545949319251/756187521599275088/14015.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187197732028507/125913.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187160612306994/207987.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187152685203466/125997.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187146934812773/189402.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187139900702862/189426.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187124071661668/189619.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187119168258239/189714.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187097530105937/189660.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187072317882488/189598.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187048666464437/189720.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187012985389157/126350.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187006278566038/13963.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756186999576330280/188577.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756186939975008386/189635.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756186928323493968/188667.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756186903036035102/126461.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756186880944504872/189694.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756186878469996704/15638.gif"
      
            ];
            var espri = espriler[Math.floor(Math.random() * espriler.length)];
  
              message.channel.send({embed: {
              color: 0xD97634,
              image:  {
                url: `${espri}`
  
                }}});
          });
      }});


    client.on('message', msg => {
      if (msg.content === 'f!random') {
        if (msg.channel.nsfw === true) {
        msg.reply(
            " <a:sallakafa:764860932773249034> You got **1** coin! <a:sallakafa:764860932773249034> \n <a:sallakafa:764860932773249034> 1 Paracık kazandın! <a:sallakafa:764860932773249034> "
          )
          .then(message => {
            var espriler = [
              "https://cdn.discordapp.com/avatars/405368926097244160/a_c1ac66448e5aae4322502d73a2f0bf37.gif",
              "https://cdn.discordapp.com/avatars/440504722189713408/a_30fd7a176d92e3fc40892d2b162abc0f.gif",
      "https://cdn.discordapp.com/avatars/779053845694513183/a_30c53227847efed7bb1958e39c89f762.gif",
      "https://cdn.discordapp.com/avatars/776674981014798387/a_098aa0ac9a994464c32bf0c806595e89.gif",
      "https://cdn.discordapp.com/avatars/668895425318879233/a_dfa5041ca08736fad38d1bf23e5e43ef.gif",
      "https://cdn.discordapp.com/avatars/600755499922751590/a_a00b92763d378509eb28c561c5a08176.gif",
      "https://cdn.discordapp.com/avatars/710912635612299367/a_53a6e8baedb9030f216dd59a1aa3df39.gif",
      "https://cdn.discordapp.com/avatars/705390367956140131/a_01b1b833953fd888b0d952652929690a.gif",
      "https://cdn.discordapp.com/avatars/754299168758956113/a_4acbb50f672355fd581f1999ec104461.gif",
      "https://cdn.discordapp.com/avatars/704015935681462282/a_ddca5bcae21f1c88244f71e59ee1abbf.gif",
      "https://cdn.discordapp.com/attachments/690183474954371080/787331936787628052/Lerue-Lucifer-3.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/771119520634241084/image0_4.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/771118911873089556/a_f28d6291ff684e84a099554b0784c62a.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/770586436252205106/995fc86b347391b87f9d4178bf4001f8.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/749229108466155590/Lerue-Helman-5.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/749229018158596156/Lerue-Helman-6.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/749228996247683202/Lerue-Herman-5.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/749228675622502410/Lerue-Helman-3.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/749228454775357480/Lerue-Fjor.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/749228219059929098/Lerue-_Helman_muah.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/749228082073960468/Lerue-Herman-5.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/749227647858638898/Lerue-Herman-2.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/748161097478963290/GIF-200826_145412-min.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/748160947922927746/GIF-200826_150337.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/748160878586626118/GIF-200826_150903.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/748160677012832347/GIF-200826_151357-min.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/748160428785270804/GIF-200826_151738-min.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/748160224195510302/GIF-200826_151622-min.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/740589540997070858/IMG_0eyw.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/742836761381699604/GIF-200402_130805-min.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/742836762405109833/GIF-200329_110402-min.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/743597747059556383/Lerue-The_rain_-muq.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/760042123620777984/beatrice.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/782168959847366656/4o1hmj.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/795330512347987978/Millie_Lerue.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/795330379963695104/Millie_Lerue_11.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/793910699070849094/Millie-Godzilla.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/787357378567864340/IMG_lk0cll.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/787357378076737556/ezgif-7-82581f7761fa.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/782944575274483803/2.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/782944567104110642/12.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/782944536099553280/9.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/782944518247809044/3.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/782378502954680330/c93a1e8138ecdbf3be0b870c287143a5.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/782378442720804895/Girl_34.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/782378379068178462/women_gif_435.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/782378327334977557/woman_32.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/782378270469521468/image1-1.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/782378268435283998/Girl_28.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/782378259643105280/women_gif_119.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/782378185836331028/image0-4-1.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/782378153699049512/women_gif_123.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/782378139224637450/image5.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/782378133663383552/Girl_31.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/782378092559728640/Girl_51.gif",
"https://cdn.discordapp.com/attachments/690183533217710090/782378049135706112/Girl_42.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/782169040713809940/4o1h7w.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/795606728070266890/Lerue-Couple-5.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/719479369394815056/96689700-678866346283097-1641596.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/717058376928067654/20200601_195250.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/719409656816205924/IMG_85jx3z.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/717056007469269102/20200601_194255.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/717056244833189979/20200601_193155.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/717056245508472852/20200601_192059.gif",
"https://cdn.discordapp.com/attachments/690184279476535384/714415167978340372/CraweL18.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/748160059330265098/GIF-200826_153413-min.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/743597851304656896/Lerue-The_rain_11.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/742841889530708057/GIF-200321_225043-min.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/742841888268091463/GIF-200322_233004-min.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/742838227416776714/GIF-200401_233717-min.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187521599275088/14015.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187197732028507/125913.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187160612306994/207987.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187152685203466/125997.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187146934812773/189402.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187139900702862/189426.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187124071661668/189619.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187119168258239/189714.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187097530105937/189660.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187072317882488/189598.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187048666464437/189720.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187012985389157/126350.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756187006278566038/13963.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756186999576330280/188577.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756186939975008386/189635.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756186928323493968/188667.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756186903036035102/126461.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756186880944504872/189694.gif",
"https://cdn.discordapp.com/attachments/690184545949319251/756186878469996704/15638.gif",
"https://cdn.discordapp.com/attachments/690183474954371080/739863089574576209/Lerue-Helman-5.gif",
      "https://cdn.discordapp.com/avatars/741431002601357320/a_80ca0f8f4dcc55e0d4dcc70930b0cca4.gif",
      "https://cdn.discordapp.com/avatars/741595242058219581/a_6e6efa4498236658cd564fa31454019a.gif",
      
              "https://cdn.discordapp.com/avatars/632539951539421205/a_510553a601478cc6c6efc754fbe34591.gif",
      "https://cdn.discordapp.com/avatars/793759426330230794/a_2b02c8026d4a2bff0b8cd0fcc47b0f61.gif",
      "https://cdn.discordapp.com/avatars/752977563038777345/a_f324671a6bfd284171bf5ed0b84ed71d.gif",
      "https://cdn.discordapp.com/avatars/718779087300329482/a_c68d894c472abef6a5df6919d2e4feeb.gif",
      "https://cdn.discordapp.com/avatars/714202315879612416/a_9b266a972e5b283fcd3b4d95589b9896.gif",
      "https://cdn.discordapp.com/avatars/718456853297758249/a_efc9aea2927f785e905438feb841e23c.gif",
      "https://cdn.discordapp.com/avatars/724665869019381955/a_a73228312918a735648af5998f81773e.gif",
      "https://cdn.discordapp.com/avatars/723112883281723483/a_7f74a56ababf00f0124066f1775d47f8.gif",
      "https://cdn.discordapp.com/avatars/792020323864281148/a_9144d61c76758488ce673892a01499da.gif",
      "https://cdn.discordapp.com/avatars/763288284582641685/a_691212d494e928726f6c66a7e6cf9572.gif",
      "https://cdn.discordapp.com/avatars/723112883281723483/a_bbcaa0be0844be244a02c86ea589d489.gif",
      "https://cdn.discordapp.com/avatars/789997969318346772/a_5bb9cdf3bb5621cd4ac50863c44ccf78.gif",
      "https://cdn.discordapp.com/avatars/779426422623174666/a_f1ca8f52a5783cc25d017fc4e4ccc9ee.gif",
      "https://cdn.discordapp.com/avatars/717028554680041482/a_31d38340c6959419b030fdf80aa30955.gif",
      "https://cdn.discordapp.com/avatars/764843808126009354/a_54881927d66be31ffb431bf7da6c7693.gif",
      "https://cdn.discordapp.com/avatars/783992056174346250/a_352c8a7060f163fabc9f2d9946f6fcb5.gif",
      "https://cdn.discordapp.com/avatars/711852838027788339/a_2ce75798845e074ef76dbee2aa4a2d69.gif",
      "https://cdn.discordapp.com/avatars/649677712046424067/a_030f79565d1c5cad5ddd28d86cac84f0.gif",
      "https://cdn.discordapp.com/avatars/765663099419754497/a_969faee9a3b114987703d8838d232101.gif",
      "https://cdn.discordapp.com/avatars/770923392357629953/a_59f1293617f95c458499603a10f028f0.gif",
      "https://cdn.discordapp.com/avatars/692302215251230801/a_48eca62ea29a3b3b6bf333952e08309f.gif",
      "https://cdn.discordapp.com/avatars/787246349485473803/a_592b77b7493d4fefcf9c3947d391ebf0.gif",
      "https://cdn.discordapp.com/avatars/760476007836286977/a_bb8bf440f3ae7455d7cd063ff5393ce2.gif",
      "https://cdn.discordapp.com/avatars/699260735192039448/a_48cd21c430af1ffb7e5dfbd06ce101cb.gif",
      "https://cdn.discordapp.com/avatars/772810972305686609/a_67a376b7cf5f08335efc2d80f44ab5fa.gif",
      "https://cdn.discordapp.com/avatars/556486159094513677/a_a1a0f2f9221d3f4a1d0e4f21cc5104a1.gif",
      "https://cdn.discordapp.com/avatars/539475266456518668/a_92c32d260b653d630e96d535ddb60da5.gif",
      "https://cdn.discordapp.com/avatars/763036219793080362/a_4b5d73c486ce0b3165ab4c7a029ac016.gif",
      "https://cdn.discordapp.com/avatars/771031459824926772/a_17ac1ba97eb85662f66c3f7a24b833dd.gif",
      "https://cdn.discordapp.com/avatars/702995793656676473/a_340fb9160358add66b4549441b1f9f93.gif",
      "https://cdn.discordapp.com/avatars/673083486026072094/a_5f5c0f80de56070deedb5d8e1b995a3d.gif",
      "https://cdn.discordapp.com/avatars/554011849553870849/a_d9002d73a4ecc0999b68c37ee7cc5a57.gif",
      "https://cdn.discordapp.com/avatars/593490123094622210/a_c579bc31601c7ac50a53b71c7888d65e.gif",
      "https://cdn.discordapp.com/avatars/769648316626894889/a_476537898e797d68d2fbce75c28c7f2b.gif",
      "https://cdn.discordapp.com/avatars/769527752977022976/a_c7e56f61483aca61b31765e54f9af795.gif",
      "https://cdn.discordapp.com/avatars/773937985787658240/a_7b3465efcc621c383add15ae4f32ff5f.gif",
      "https://cdn.discordapp.com/avatars/757836843789189121/a_bb4555efe1f5516ae26d83f016ea6884.gif",
      "https://cdn.discordapp.com/avatars/774588221307879434/a_343b54fb02224d67f1467314c49f29a2.gif",
      "https://cdn.discordapp.com/avatars/744235707782004888/a_b389741e85c7147ef78baa14bdba37eb.gif",
      "https://cdn.discordapp.com/avatars/634834628812734467/a_c23b143579155fbb64844ef5c7685cc3.gif",
      "https://cdn.discordapp.com/avatars/632657019123400714/a_0649cb13e0ee5deeff8d3bf496f8c844.gif",
      "https://cdn.discordapp.com/avatars/762965854630576138/a_1438fd3d9dc925ae8b3c08d30fe01f87.gif",
      "https://cdn.discordapp.com/avatars/389689442874556427/a_9d7fdf894337f8d0dc7f057333dd8bdb.gif",
      "https://cdn.discordapp.com/avatars/695216595353731186/a_9a76275efe4d3b2571f84247b8a55424.gif",
      "https://cdn.discordapp.com/avatars/497570232781635585/a_de1da1170d9fc39074c241b6174dba63.gif",
      "https://cdn.discordapp.com/avatars/330332220063481867/a_722ced448ddfb2bb1e63e58dd2180448.gif",
      "https://cdn.discordapp.com/avatars/751046833320624140/a_725d7140f3225365a341222c8d2afa15.gif",
      "https://cdn.discordapp.com/avatars/773588963901702184/a_ed987d9e68d4c6db326bf36c091396b8.gif",
      "https://cdn.discordapp.com/avatars/719843032475762759/a_2745b70b13b6e1f9f2dd3f97f56f5272.gif",
      "https://cdn.discordapp.com/avatars/607690382612103186/a_153ad05a99a9b968a2edb7f00eb5172e.gif",
      "https://cdn.discordapp.com/avatars/492952652460720129/a_b8a9bb27e54294d8103c66ef53c57e8a.gif",
      "https://cdn.discordapp.com/avatars/729462968969855050/a_1d8145935ae5c5f8705a9e29d9237a62.gif",
      "https://cdn.discordapp.com/avatars/613210298538524683/a_76bb90e8b40050efcd55958990b9a2ee.gif",
      "https://cdn.discordapp.com/avatars/791390065220648970/a_b43139fed1b48c06519340d82a6d90a2.gif",
      "https://cdn.discordapp.com/avatars/610459198693834772/a_fbb48b3246529935f2c5108cba7545d9.gif",
      "https://cdn.discordapp.com/avatars/526054654409179187/a_1ff6b7d32798adb47295db7a2fc8b1ca.gif",
      "https://cdn.discordapp.com/avatars/745648378737852437/a_91f230357e18a66be8f27b1d9df73905.gif",
      "https://cdn.discordapp.com/avatars/762252173043564574/a_068f7d145918c3e96ab148afbd3f555e.gif",
      "https://cdn.discordapp.com/avatars/491352501430517761/a_1c61963c6c4b0726baaa2a06398276be.gif",
      "https://cdn.discordapp.com/avatars/765615062022881320/a_5a0561e6204ff758374343b9210ae01c.gif",
      "https://cdn.discordapp.com/avatars/687971918015496240/a_6225471c58a6ad5627c5c45d1cd095fe.gif",
      "https://cdn.discordapp.com/avatars/650892006499024912/a_5b726329bc45c6a6bfcb3ba75b3da284.gif",
      "https://cdn.discordapp.com/avatars/429910022563168268/a_380514d9796db34e90b008718464478e.gif",
      "https://cdn.discordapp.com/avatars/586159618527461376/a_50eaa6233319fa66dd7f8726ed3b328e.gif"
      
            ];
            var espri = espriler[Math.floor(Math.random() * espriler.length)];
            if (msg.channel.nsfw === true) {
              message.channel.send({embed: {
              color: 0xD97634,
              image:  {
                url: `${espri}`

                }}});
          }});
      }}});

      client.on ('message', msg => {
        if (msg.content === 'f!random') {
          if(msg.channel.nsfw === false) {
          msg.reply("This a not NSFW channel!")
        }}});

        client.on ('message', msg => {
          if (msg.content === 'f!woman') {
            if(msg.channel.nsfw === false) {
            msg.reply("This a not NSFW channel!")
          }}});

          client.on ('message', msg => {
            if (msg.content === 'f!man') {
              if(msg.channel.nsfw === false) {
              msg.reply("This a not NSFW channel!")
            }}});

client.on ('message', msg => {
  if (msg.content === 'f!builder') {
    msg.reply({embed: {
      color: 0xD97634,
      author: {
        name: "ByBabus#7778",
        icon_url: "https://i.hizliresim.com/YcW5eJ.png"
      },
              }});
}});

client.on ('message', msg => {
  if (msg.content === 'f!davet') {
    msg.reply({embed: {
      color: 0xD97634,
      title: "Davet Linki",
      url: "https://sites.google.com/view/fasteamdc/bot",
      description: "",
      },
              });
}});









client.on ('message', msg => {
  if (msg.content === 'f!yapımcım') {
    msg.reply({embed: {
      color: 0xD97634,
      author: {
        name: "ByBabus#7778",
        icon_url: "https://i.hizliresim.com/YcW5eJ.png"
      },
              }});
}});


client.on ('message', msg => {
  if (msg.content === 'f!sunucu') {
    msg.reply({embed: {
      color: 0xD97634,
      title: "FastTeam original discord sunucusu",
      url: "https://discord.gg/AY8JweJjTh",
      description: "Tıkla",
      },
              });
}});

client.on ('message', msg => {
  if (msg.content === 'f!sürüm') {
    msg.reply(
      "Güncel Sürüm..."
      )
      .then(message => {
        var espriler = [
          "0.3.0"
        ];
        var espri = espriler[Math.floor(Math.random() * espriler.length)];
        message.edit(`${espri}`);
              });
}});


client.on ('message', msg => {
  if (msg.content === 'f!yardım') {
    msg.reply({embed: {
      color: 0xD97634,
      author: {
        name: "FastBot",
        icon_url: "https://i.hizliresim.com/TTGktf.jpg"
      },
    "thumbnail": {
   "url": "https://i.hizliresim.com/TTGktf.jpg"
},
      title: "FastBot v0.3.0",
      url: "https://www.google.com/url?q=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D777491135852707840%26permissions%3D8%26redirect_uri%3Dhttps%253A%252F%252Fdiscord.gg%252FbHCFw7v5Bd%26scope%3Dbot&sa=D&sntz=1&usg=AFQjCNGK55JN-Kw5H6_ro9t2O2bO4oh6Bg",
      description: "FastGif Komutları",
      fields: [
  {
          name: "Ana komutlar",
  inline: true,
          value: "**f!gifs - Gif komutlarını gösterir**\n**f!sürüm - Mevcut sürümü gösterir**\n**f!yapımcım - Yapımcı**\n**f!davet - Botun davet linkini gönderir**\n**f!site - FastTeam Web sitesine gönderir**\n**f!sunucu - Fast Team original discord sunucusu**\n**f!istatistik - bot istatistiği**\n"
        },
        {
          name: "Mevcut sürüm:",
          value: "v0.3.0"
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: "https://i.hizliresim.com/TTGktf.jpg",
        text: "FastBot 2021 0.3.0"
      }
    }
  });  
  }});

  client.on ('message', msg => {
    if (msg.content === 'f!help') {
      msg.reply({embed: {
        color: 0xD97634,
        author: {
          name: "FastBot",
          icon_url: "https://i.hizliresim.com/TTGktf.jpg"
        },
      "thumbnail": {
     "url": "https://i.hizliresim.com/TTGktf.jpg"
  },
        title: "FastBot v0.3.0",
        url: "https://www.google.com/url?q=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D777491135852707840%26permissions%3D8%26redirect_uri%3Dhttps%253A%252F%252Fdiscord.gg%252FbHCFw7v5Bd%26scope%3Dbot&sa=D&sntz=1&usg=AFQjCNGK55JN-Kw5H6_ro9t2O2bO4oh6Bg",
        description: "FastBot commands",
        fields: [
    {
            name: "Main commands",
    inline: true,
            value: "**f!gifs - Look at gif commands**\n**f!version - shows current version**\n**f!builder - shows the builder of the bot**\n**f!invite - invite link of the bot**\n**f!sites - Shows the Fast Team site**\n**f!server - Fast Team original discord server**\n**f!statistics - bot development**\n"
          },
          {
            name: "Current Version",
            value: "v0.3.0"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: "https://i.hizliresim.com/TTGktf.jpg",
          text: "FastBot 2021 0.3.0"
        }
      }
    });  

}});

client.on ('message', msg => {
  if (msg.content === 'f!invite') {
    msg.reply({embed: {
      color: 0xD97634,
      title: "Invitation Link",
      url: "https://www.google.com/url?q=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D777491135852707840%26permissions%3D8%26redirect_uri%3Dhttps%253A%252F%252Fdiscord.gg%252FbHCFw7v5Bd%26scope%3Dbot&sa=D&sntz=1&usg=AFQjCNGK55JN-Kw5H6_ro9t2O2bO4oh6Bg",
      description: "click",
      },
              });
}});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'f!language') {
    msg.reply('Language support for British: f!help\nTürkler için olar dil desteği : f!yardım ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'f!ping') {
    msg.reply(`${client.ws.ping} ms`);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'f!server') {
    msg.reply({embed: {
      color: 0xD97634,
      title: "FastTeam original discord server",
      url: "https://discord.gg/AY8JweJjTh",
      description: "Click",
  }});
}});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'f!site') {
    msg.reply({embed: {
      color: 0xD97634,
      title: "Fast Team Web sitesi",
      url: "https://sites.google.com/view/fasteamdc",
      description: "",
  }});
}});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'f!web') {
    msg.reply({embed: {
      color: 0xD97634,
      title: "Fast Team Web sitesi",
      url: "https://sites.google.com/view/fasteamdc",
      description: "",
  }});
}});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'f!sites') {
    msg.reply({embed: {
      color: 0xD97634,
      title: "Fast Team Website",
      url: "https://sites.google.com/view/fasteamdc",
      description: "",
  }});
}});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'f!statistics') {
    msg.reply(
"Bot development: \n https://discord.gg/EKcmQKPmJ4 "
    );
}});

client.on ('message', msg => {
  if (msg.content === 'f!version') {
    msg.reply(
      "Current version..."
      )
      .then(message => {
        var espriler = [
          "0.3.0"
        ];
        var espri = espriler[Math.floor(Math.random() * espriler.length)];
        message.edit(`${espri}`);
              });
}});

client.on ('message', msg => {
  if (msg.content === 'f!gifs') {
    msg.reply(
      "Gif commands:"
      )
      .then(message => {
        var espriler = [
          "**f!random - Random gifs (NSFW)**\n**f!couple - couple gifs**\n**f!woman - woman gifs (NSFW)**\n**f!man - Man gifs (NSFW)**\n**f!anime - anime gifs**"
        ];
        var espri = espriler[Math.floor(Math.random() * espriler.length)];
        message.channel.send(`${espri}`);
              });
}});


client.on("ready", async () => (
client.user.setActivity(`f!language ${client.guilds.cache.size} Server :=)`, { type: "LISTENING"})));

client.login("Nzc3NDkxMTM1ODUyNzA3ODQw.X7ENCw.DXwAaLUC1zVBWkM5lnqPDogokkU");

