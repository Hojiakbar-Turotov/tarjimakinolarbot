import TelegramBot from "node-telegram-bot-api";

const TOKEN = `5395766609:AAFdadhaZjsjzQmJG0uZ2TLdF5tr9uyjIPU`;
const bot = new TelegramBot(TOKEN, { polling: true })
const baza = `baza_sinov`

const keys = {
    MARVEL_MOVIE: `MARVEL KINOLARI`,
    BIRINCHI_QASORKOR: `BIRINCHI QASORKOR`,
    AGENT_KARTER: `AGENT KARTER`,
    KAPITAN_MARVEL: `KAPITAN MARVEL`,
    TEMIR_ODAM: `TEMIR ODAM`,
    TEMIR_ODAM_2: `TEMIR ODAM 2`,
    HALK: `HALK`,
    TOR: `TOR`,
    QASOSKORLAR: `QASOSKORLAR`,
    TOR_2: `TOR 2`,
    TEMIR_ODAM_3: `TEMIR ODAM 3`,
    BIRINCHI_QASORKOR_2: `BIRINCHI QASORKOR 2`,
    GALLAKTIKA_QURIQCHILARI: `GALLAKTIKA QO'RIQCHILARI`,
    MEN_GRUTMAN: `MEN GRUTMAN`,
    GALLAKTIKA_QURIQCHILARI_2: `GALLAKTIKA QO'RIQCHILARI 2`,
    QASOSKORLAR_2: `QASOSKORLAR 2`,
    CHUMOLI_ODAM: `CHUMOLI ODAM`,
    BIRINCHI_QASORKOR_3: `BIRINCHI QASORKOR 3`,
    QORA_BEVA: `QORA BEVA`,
    QORA_PANTERA: `QORA PANTERA`,
    URGIMCHAK_ODAM: `O'RGIMCHAK ODAM`,
    DOCTOR_STRENG: `DOCTOR STRENG`,
    TOR_3: `TOR 3`,
    CHUMOLI_ODAM_2: `CHUMOLI ODAM 2`,
    QASOSKORLAR_3: `QASOSKORLAR 3`,
    QASOSKORLAR_4: `QASOSKORLAR 4`,
    LOKI: `LOKI`,
    AGARDA: `AGARDA`,
    VANDA_VIJN: `VANDA VIJN`,
    LOCHIN_VA_QISHKI_ASKAR: `LOCHIN VA QISHKI ASKAR`,
    URGIMCHAK_ODAM_2: `O'RGIMCHAK ODAM 2`,
    SHANG_CHI: `SHANG-CHI`,
    ABADIYLAR: `ABADIYLAR`,
    DOCTOR_STRENG_2: `DOCTOR STRENG 2`,
    LOCHIN_KUZ: `LOCHIN KO'Z`,
    OY_RITSIRI: `OY RITSIRI`,
    MS_MARVEL: `MS MARVEL`,
    DS_MOVIE: `DS KINOLARI`,
    NETFLIX_MOVIE: `NETFLIX KINOLARI`,
    FLESH_2014: [
        `FLESH`,
        `FLESH 1 FASL`,
        `FLESH 2 FASL`,
        `FLESH 3 FASL`,
        `FLESH 4 FASL`,
        `FLESH 5 FASL`,
        `FLESH 6 FASL`,
        `FLESH 7 FASL`,
        `FLESH 8 FASL`,
        `FLESH 9 FASL`,
    ],
    BACK: [
        `BOSH MENYUGA QAYTISH`,
        `MARVEL KINOLARIGA QAYTISH`,
        `DC KINOLARIGA QAYTISH`,
        `NETFLIX FILMLARIGA QAYTISH`,
    ]
}

const KEYBOARD = {
    START: [
        [keys.MARVEL_MOVIE],
        // [keys.DS_MOVIE],
        [keys.NETFLIX_MOVIE]
    ],
    MARVEL_MOVIE: [
        [keys.BIRINCHI_QASORKOR, keys.AGENT_KARTER],
        // [keys.KAPITAN_MARVEL, keys.TEMIR_ODAM],
        // [keys.TEMIR_ODAM_2, keys.HALK],
        // [keys.TOR, keys.QASOSKORLAR],
        // [keys.TOR_2, keys.TEMIR_ODAM_3],
        // [keys.BIRINCHI_QASORKOR_2, keys.GALLAKTIKA_QURIQCHILARI],
        [keys.MEN_GRUTMAN/*, keys.GALLAKTIKA_QURIQCHILARI_2*/],
        // [keys.QASOSKORLAR_2, keys.CHUMOLI_ODAM],
        // [keys.BIRINCHI_QASORKOR_3, keys.QORA_BEVA],
        // [keys.QORA_PANTERA, keys.URGIMCHAK_ODAM],
        // [keys.DOCTOR_STRENG, keys.TOR_3],
        // [keys.CHUMOLI_ODAM_2, keys.QASOSKORLAR_3],
        [/*keys.QASOSKORLAR_4,*/ keys.LOKI],
        [/*keys.AGARDA,*/ keys.VANDA_VIJN],
        // [keys.LOCHIN_VA_QISHKI_ASKAR, keys.URGIMCHAK_ODAM_2],
        // [keys.SHANG_CHI, keys.ABADIYLAR],
        // [keys.DOCTOR_STRENG_2, keys.LOCHIN_KUZ],
        [/*keys.OY_RITSIRI,*/ keys.MS_MARVEL],
        [keys.BACK[0]]
    ],
    NETFLIX_MOVIE: [
        [keys.FLESH_2014[0]],
        [keys.BACK[0]]
    ],
    FLESH_2014: [
        [keys.FLESH_2014[1], keys.FLESH_2014[2], keys.FLESH_2014[3]],
        [keys.FLESH_2014[4]/*, keys.FLESH_2014[5], keys.FLESH_2014[6]],
    [keys.FLESH_2014[7], keys.FLESH_2014[8], keys.FLESH_2014[9]*/],
        [keys.BACK[3]]
    ]
}

const MOVIE = {
    BIRINCHI_QASORKOR: `https://t.me/${baza}/94`,
    AGENT_KARTER: [
        `https://t.me/${baza}/95`,
        `https://t.me/${baza}/96`
    ],
    KAPITAN_MARVEL: ``,
    TEMIR_ODAM: ``,
    TEMIR_ODAM_2: ``,
    HALK: ``,
    TOR: ``,
    QASOSKORLAR: ``,
    TOR_2: ``,
    TEMIR_ODAM_3: ``,
    BIRINCHI_QASORKOR_2: ``,
    GALLAKTIKA_QURIQCHILARI: ``,
    MEN_GRUTMAN: [
        `https://t.me/${baza}/111`,
        `https://t.me/${baza}/112`,
        `https://t.me/${baza}/113`,
        `https://t.me/${baza}/114`,
        `https://t.me/${baza}/115`,
    ],
    GALLAKTIKA_QURIQCHILARI_2: ``,
    QASOSKORLAR_2: ``,
    CHUMOLI_ODAM: ``,
    BIRINCHI_QASORKOR_3: ``,
    QORA_BEVA: ``,
    QORA_PANTERA: ``,
    URGIMCHAK_ODAM: ``,
    DOCTOR_STRENG: ``,
    TOR_3: ``,
    CHUMOLI_ODAM_2: ``,
    QASOSKORLAR_3: ``,
    QASOSKORLAR_4: ``,
    LOKI: [
        `https://t.me/${baza}/99`,
        `https://t.me/${baza}/100`,
        `https://t.me/${baza}/101`,
        `https://t.me/${baza}/102`,
        `https://t.me/${baza}/103`,
        `https://t.me/${baza}/104`,
    ],
    AGARDA: ``,
    VANDA_VIJN: [
        `https://t.me/${baza}/115`,
        `https://t.me/${baza}/116`,
        `https://t.me/${baza}/117`,
        `https://t.me/${baza}/118`,
        `https://t.me/${baza}/119`,
        `https://t.me/${baza}/120`,
        `https://t.me/${baza}/121`,
        `https://t.me/${baza}/122`,
        `https://t.me/${baza}/123`,
    ],
    LOCHIN_VA_QISHKI_ASKAR: ``,
    URGIMCHAK_ODAM_2: ``,
    SHANG_CHI: ``,
    ABADIYLAR: ``,
    DOCTOR_STRENG_2: ``,
    LOCHIN_KUZ: ``,
    OY_RITSIRI: ``,
    MS_MARVEL: [
        `https://t.me/${baza}/105`,
        `https://t.me/${baza}/106`,
        `https://t.me/${baza}/107`,
        `https://t.me/${baza}/108`,
        `https://t.me/${baza}/109`,
        `https://t.me/${baza}/110`,
    ],
    FLESH_2014: [
        [
            `https://t.me/${baza}/2`,
            `https://t.me/${baza}/3`,
            `https://t.me/${baza}/4`,
            `https://t.me/${baza}/5`,
            `https://t.me/${baza}/6`,
            `https://t.me/${baza}/7`,
            `https://t.me/${baza}/8`,
            `https://t.me/${baza}/9`,
            `https://t.me/${baza}/10`,
            `https://t.me/${baza}/11`,
            `https://t.me/${baza}/12`,
            `https://t.me/${baza}/13`,
            `https://t.me/${baza}/14`,
            `https://t.me/${baza}/15`,
            `https://t.me/${baza}/16`,
            `https://t.me/${baza}/17`,
            `https://t.me/${baza}/18`,
            `https://t.me/${baza}/19`,
            `https://t.me/${baza}/20`,
            `https://t.me/${baza}/21`,
            `https://t.me/${baza}/22`,
            `https://t.me/${baza}/23`,
            `https://t.me/${baza}/24`,
        ],
        [
            `https://t.me/${baza}/25`,
            `https://t.me/${baza}/26`,
            `https://t.me/${baza}/27`,
            `https://t.me/${baza}/28`,
            `https://t.me/${baza}/29`,
            `https://t.me/${baza}/30`,
            `https://t.me/${baza}/31`,
            `https://t.me/${baza}/32`,
            `https://t.me/${baza}/33`,
            `https://t.me/${baza}/34`,
            `https://t.me/${baza}/35`,
            `https://t.me/${baza}/36`,
            `https://t.me/${baza}/37`,
            `https://t.me/${baza}/38`,
            `https://t.me/${baza}/39`,
            `https://t.me/${baza}/40`,
            `https://t.me/${baza}/41`,
            `https://t.me/${baza}/42`,
            `https://t.me/${baza}/43`,
            `https://t.me/${baza}/44`,
            `https://t.me/${baza}/45`,
            `https://t.me/${baza}/46`,
            `https://t.me/${baza}/47`,
        ],
        [
            `https://t.me/${baza}/48`,
            `https://t.me/${baza}/49`,
            `https://t.me/${baza}/50`,
            `https://t.me/${baza}/51`,
            `https://t.me/${baza}/52`,
            `https://t.me/${baza}/53`,
            `https://t.me/${baza}/54`,
            `https://t.me/${baza}/55`,
            `https://t.me/${baza}/56`,
            `https://t.me/${baza}/57`,
            `https://t.me/${baza}/58`,
            `https://t.me/${baza}/59`,
            `https://t.me/${baza}/60`,
            `https://t.me/${baza}/61`,
            `https://t.me/${baza}/62`,
            `https://t.me/${baza}/63`,
            `https://t.me/${baza}/64`,
            `https://t.me/${baza}/65`,
            `https://t.me/${baza}/66`,
            `https://t.me/${baza}/67`,
            `https://t.me/${baza}/68`,
            `https://t.me/${baza}/69`,
            `https://t.me/${baza}/70`,
        ],
        [
            `https://t.me/${baza}/71`,
            `https://t.me/${baza}/72`,
            `https://t.me/${baza}/73`,
            `https://t.me/${baza}/74`,
            `https://t.me/${baza}/75`,
            `https://t.me/${baza}/76`,
            `https://t.me/${baza}/77`,
            `https://t.me/${baza}/78`,
            `https://t.me/${baza}/79`,
            `https://t.me/${baza}/80`,
            `https://t.me/${baza}/81`,
            `https://t.me/${baza}/82`,
            `https://t.me/${baza}/83`,
            `https://t.me/${baza}/84`,
            `https://t.me/${baza}/85`,
            `https://t.me/${baza}/86`,
            `https://t.me/${baza}/87`,
            `https://t.me/${baza}/88`,
            `https://t.me/${baza}/89`,
            `https://t.me/${baza}/90`,
            `https://t.me/${baza}/91`,
            `https://t.me/${baza}/92`,
            `https://t.me/${baza}/93`,
        ],
        [
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
        ],
        [
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
        ],
        [
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
        ],
        [
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
        ],
        [
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
        ],
    ]
}


bot.on(`message`, async msg => {
    const { chat: { id, username, first_name }, text, message_id } = msg

    send_msg(1880623250, `
        @${username} -> ${first_name}
        ${message_id}
        ${text}
    `)


    switch (text) {
        case `/start`:
            send_msg(id, `O'zingizga kerakli bo'limni tanlang.`, KEYBOARD.START)
            break;
        case `/stat`:
            console.log(id)
            break
        case keys.MARVEL_MOVIE:
            send_msg(id, `O'zingizga kerakli filmni tanlang.`, KEYBOARD.MARVEL_MOVIE)
            break;
        case keys.BIRINCHI_QASORKOR:
            send_video(id, MOVIE.BIRINCHI_QASORKOR, keys.BIRINCHI_QASORKOR)
            break;
        case keys.AGENT_KARTER:
            await send_video(id, MOVIE.AGENT_KARTER[0], `${keys.AGENT_KARTER} 1-fasl 1-qism`)
            send_video(id, MOVIE.AGENT_KARTER[1], `${keys.AGENT_KARTER} 1-fasl 2-qism`)
            break;
        case keys.KAPITAN_MARVEL:
            send_video(id, MOVIE.KAPITAN_MARVEL, keys.KAPITAN_MARVEL)
            break;
        case keys.TEMIR_ODAM:
            send_video(id, MOVIE.TEMIR_ODAM, keys.TEMIR_ODAM)
            break;
        case keys.TEMIR_ODAM_2:
            send_video(id, MOVIE.TEMIR_ODAM_2, keys.TEMIR_ODAM_2)
            break;
        case keys.HALK:
            send_video(id, MOVIE.HALK, keys.HALK)
            break;
        case keys.TOR:
            send_video(id, MOVIE.TOR, keys.TOR)
            break;
        case keys.QASOSKORLAR:
            send_video(id, MOVIE.QASOSKORLAR, keys.QASOSKORLAR)
            break;
        case keys.TOR_2:
            send_video(id, MOVIE.TOR_2, keys.TOR_2)
            break;
        case keys.TEMIR_ODAM_3:
            send_video(id, MOVIE.TEMIR_ODAM_3, keys.TEMIR_ODAM_3)
            break;
        case keys.BIRINCHI_QASORKOR_2:
            send_video(id, MOVIE.BIRINCHI_QASORKOR_2, keys.BIRINCHI_QASORKOR_2)
            break;
        case keys.GALLAKTIKA_QURIQCHILARI:
            send_video(id, MOVIE.GALLAKTIKA_QURIQCHILARI, keys.GALLAKTIKA_QURIQCHILARI)
            break;
        case keys.MEN_GRUTMAN:
            await send_video(id, MOVIE.MEN_GRUTMAN[0], `${keys.MEN_GRUTMAN} 1-fasl 1-qism`)
            await send_video(id, MOVIE.MEN_GRUTMAN[1], `${keys.MEN_GRUTMAN} 1-fasl 2-qism`)
            await send_video(id, MOVIE.MEN_GRUTMAN[2], `${keys.MEN_GRUTMAN} 1-fasl 3-qism`)
            await send_video(id, MOVIE.MEN_GRUTMAN[3], `${keys.MEN_GRUTMAN} 1-fasl 4-qism`)
            send_video(id, MOVIE.MEN_GRUTMAN[4], `${keys.MEN_GRUTMAN} 1-fasl 5-qism`)
            break;
        case keys.GALLAKTIKA_QURIQCHILARI_2:
            send_video(id, MOVIE.GALLAKTIKA_QURIQCHILARI_2, keys.GALLAKTIKA_QURIQCHILARI_2)
            break;
        case keys.QASOSKORLAR_2:
            send_video(id, MOVIE.QASOSKORLAR_2, keys.QASOSKORLAR_2)
            break;
        case keys.CHUMOLI_ODAM:
            send_video(id, MOVIE.CHUMOLI_ODAM, keys.CHUMOLI_ODAM)
            break;
        case keys.BIRINCHI_QASORKOR_3:
            send_video(id, MOVIE.BIRINCHI_QASORKOR_3, keys.BIRINCHI_QASORKOR_3)
            break;
        case keys.QORA_BEVA:
            send_video(id, MOVIE.QORA_BEVA, keys.QORA_BEVA)
            break;
        case keys.QORA_PANTERA:
            send_video(id, MOVIE.QORA_PANTERA, keys.QORA_PANTERA)
            break;
        case keys.URGIMCHAK_ODAM:
            send_video(id, MOVIE.URGIMCHAK_ODAM, keys.URGIMCHAK_ODAM)
            break;
        case keys.DOCTOR_STRENG:
            send_video(id, MOVIE.DOCTOR_STRENG, keys.DOCTOR_STRENG)
            break;
        case keys.TOR_3:
            send_video(id, MOVIE.TOR_3, keys.TOR_3)
            break;
        case keys.CHUMOLI_ODAM_2:
            send_video(id, MOVIE.CHUMOLI_ODAM_2, keys.CHUMOLI_ODAM_2)
            break;
        case keys.QASOSKORLAR_3:
            send_video(id, MOVIE.QASOSKORLAR_3, keys.QASOSKORLAR_3)
            break;
        case keys.QASOSKORLAR_4:
            send_video(id, MOVIE.QASOSKORLAR_4, keys.QASOSKORLAR_4)
            break;
        case keys.LOKI:
            await send_video(id, MOVIE.LOKI[0], `${keys.LOKI} 1-fasl 1-qism`)
            await send_video(id, MOVIE.LOKI[1], `${keys.LOKI} 1-fasl 2-qism`)
            await send_video(id, MOVIE.LOKI[2], `${keys.LOKI} 1-fasl 3-qism`)
            await send_video(id, MOVIE.LOKI[3], `${keys.LOKI} 1-fasl 4-qism`)
            await send_video(id, MOVIE.LOKI[4], `${keys.LOKI} 1-fasl 5-qism`)
            send_video(id, MOVIE.LOKI[5], `${keys.LOKI} 1-fasl 6-qism`)
            break;
        case keys.AGARDA:
            send_video(id, MOVIE.AGARDA, keys.AGARDA)
            break;
        case keys.VANDA_VIJN:
            await send_video(id, MOVIE.VANDA_VIJN[0], `${keys.VANDA_VIJN} 1-fasl 1-qism`)
            await send_video(id, MOVIE.VANDA_VIJN[1], `${keys.VANDA_VIJN} 1-fasl 2-qism`)
            await send_video(id, MOVIE.VANDA_VIJN[2], `${keys.VANDA_VIJN} 1-fasl 3-qism`)
            await send_video(id, MOVIE.VANDA_VIJN[3], `${keys.VANDA_VIJN} 1-fasl 4-qism`)
            await send_video(id, MOVIE.VANDA_VIJN[4], `${keys.VANDA_VIJN} 1-fasl 5-qism`)
            await send_video(id, MOVIE.VANDA_VIJN[5], `${keys.VANDA_VIJN} 1-fasl 6-qism`)
            await send_video(id, MOVIE.VANDA_VIJN[6], `${keys.VANDA_VIJN} 1-fasl 7-qism`)
            await send_video(id, MOVIE.VANDA_VIJN[7], `${keys.VANDA_VIJN} 1-fasl 8-qism`)
            send_video(id, MOVIE.VANDA_VIJN[8], `${keys.VANDA_VIJN} 1-fasl 9-qism`)
            break;
        case keys.LOCHIN_VA_QISHKI_ASKAR:
            send_video(id, MOVIE.LOCHIN_VA_QISHKI_ASKAR, keys.LOCHIN_VA_QISHKI_ASKAR)
            break;
        case keys.URGIMCHAK_ODAM_2:
            send_video(id, MOVIE.URGIMCHAK_ODAM_2, keys.URGIMCHAK_ODAM_2)
            break;
        case keys.SHANG_CHI:
            send_video(id, MOVIE.SHANG_CHI, keys.SHANG_CHI)
            break;
        case keys.ABADIYLAR:
            send_video(id, MOVIE.ABADIYLAR, keys.ABADIYLAR)
            break;
        case keys.DOCTOR_STRENG_2:
            send_video(id, MOVIE.DOCTOR_STRENG_2, keys.DOCTOR_STRENG_2)
            break;
        case keys.LOCHIN_KUZ:
            send_video(id, MOVIE.LOCHIN_KUZ, keys.LOCHIN_KUZ)
            break;
        case keys.OY_RITSIRI:
            send_video(id, MOVIE.OY_RITSIRI, keys.OY_RITSIRI)
            break;
        case keys.MS_MARVEL:
            await send_video(id, MOVIE.MS_MARVEL[0], `${keys.MS_MARVEL} 1-fasl 1-qism`)
            await send_video(id, MOVIE.MS_MARVEL[1], `${keys.MS_MARVEL} 1-fasl 2-qism`)
            await send_video(id, MOVIE.MS_MARVEL[2], `${keys.MS_MARVEL} 1-fasl 3-qism`)
            await send_video(id, MOVIE.MS_MARVEL[3], `${keys.MS_MARVEL} 1-fasl 4-qism`)
            await send_video(id, MOVIE.MS_MARVEL[4], `${keys.MS_MARVEL} 1-fasl 5-qism`)
            send_video(id, MOVIE.MS_MARVEL[5], `${keys.MS_MARVEL} 1-fasl 6-qism`)
            break;
        case keys.NETFLIX_MOVIE:
            send_msg(id, `O'zingizga kerakli filmni tanlang.`, KEYBOARD.NETFLIX_MOVIE)
            break;
        case keys.FLESH_2014[0]:
            send_msg(id, `Kerakli faslni tanglang.`, KEYBOARD.FLESH_2014)
            break;
        case keys.FLESH_2014[1]:
            await send_video(id, MOVIE.FLESH_2014[0][0], `${keys.FLESH_2014[1]} 1-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][1], `${keys.FLESH_2014[1]} 2-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][2], `${keys.FLESH_2014[1]} 3-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][3], `${keys.FLESH_2014[1]} 4-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][4], `${keys.FLESH_2014[1]} 5-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][5], `${keys.FLESH_2014[1]} 6-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][6], `${keys.FLESH_2014[1]} 7-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][7], `${keys.FLESH_2014[1]} 8-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][8], `${keys.FLESH_2014[1]} 9-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][9], `${keys.FLESH_2014[1]} 10-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][10], `${keys.FLESH_2014[1]} 11-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][11], `${keys.FLESH_2014[1]} 12-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][12], `${keys.FLESH_2014[1]} 13-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][13], `${keys.FLESH_2014[1]} 14-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][14], `${keys.FLESH_2014[1]} 15-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][15], `${keys.FLESH_2014[1]} 16-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][16], `${keys.FLESH_2014[1]} 17-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][17], `${keys.FLESH_2014[1]} 18-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][18], `${keys.FLESH_2014[1]} 19-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][19], `${keys.FLESH_2014[1]} 20-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][20], `${keys.FLESH_2014[1]} 21-qism`)
            await send_video(id, MOVIE.FLESH_2014[0][21], `${keys.FLESH_2014[1]} 22-qism`)
            send_video(id, MOVIE.FLESH_2014[0][22], `${keys.FLESH_2014[1]} 23-qism`)
            break;
        case keys.FLESH_2014[2]:
            await send_video(id, MOVIE.FLESH_2014[1][0], `${keys.FLESH_2014[2]} 1-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][1], `${keys.FLESH_2014[2]} 2-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][2], `${keys.FLESH_2014[2]} 3-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][3], `${keys.FLESH_2014[2]} 4-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][4], `${keys.FLESH_2014[2]} 5-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][5], `${keys.FLESH_2014[2]} 6-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][6], `${keys.FLESH_2014[2]} 7-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][7], `${keys.FLESH_2014[2]} 8-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][8], `${keys.FLESH_2014[2]} 9-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][9], `${keys.FLESH_2014[2]} 10-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][10], `${keys.FLESH_2014[2]} 11-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][11], `${keys.FLESH_2014[2]} 12-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][12], `${keys.FLESH_2014[2]} 13-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][13], `${keys.FLESH_2014[2]} 14-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][14], `${keys.FLESH_2014[2]} 15-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][15], `${keys.FLESH_2014[2]} 16-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][16], `${keys.FLESH_2014[2]} 17-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][17], `${keys.FLESH_2014[2]} 18-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][18], `${keys.FLESH_2014[2]} 19-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][19], `${keys.FLESH_2014[2]} 20-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][20], `${keys.FLESH_2014[2]} 21-qism`)
            await send_video(id, MOVIE.FLESH_2014[1][21], `${keys.FLESH_2014[2]} 22-qism`)
            send_video(id, MOVIE.FLESH_2014[1][22], `${keys.FLESH_2014[2]} 23-qism`)
            break;
        case keys.FLESH_2014[3]:
            await send_video(id, MOVIE.FLESH_2014[2][0], `${keys.FLESH_2014[3]} 1-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][1], `${keys.FLESH_2014[3]} 2-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][2], `${keys.FLESH_2014[3]} 3-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][3], `${keys.FLESH_2014[3]} 4-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][4], `${keys.FLESH_2014[3]} 5-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][5], `${keys.FLESH_2014[3]} 6-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][6], `${keys.FLESH_2014[3]} 7-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][7], `${keys.FLESH_2014[3]} 8-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][8], `${keys.FLESH_2014[3]} 9-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][9], `${keys.FLESH_2014[3]} 10-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][10], `${keys.FLESH_2014[3]} 11-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][11], `${keys.FLESH_2014[3]} 12-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][12], `${keys.FLESH_2014[3]} 13-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][13], `${keys.FLESH_2014[3]} 14-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][14], `${keys.FLESH_2014[3]} 15-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][15], `${keys.FLESH_2014[3]} 16-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][16], `${keys.FLESH_2014[3]} 17-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][17], `${keys.FLESH_2014[3]} 18-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][18], `${keys.FLESH_2014[3]} 19-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][19], `${keys.FLESH_2014[3]} 20-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][20], `${keys.FLESH_2014[3]} 21-qism`)
            await send_video(id, MOVIE.FLESH_2014[2][21], `${keys.FLESH_2014[3]} 22-qism`)
            send_video(id, MOVIE.FLESH_2014[2][22], `${keys.FLESH_2014[3]} 23-qism`)
            break;
        case keys.FLESH_2014[4]:
            await send_video(id, MOVIE.FLESH_2014[3][0], `${keys.FLESH_2014[4]} 1-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][1], `${keys.FLESH_2014[4]} 2-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][2], `${keys.FLESH_2014[4]} 3-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][3], `${keys.FLESH_2014[4]} 4-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][4], `${keys.FLESH_2014[4]} 5-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][5], `${keys.FLESH_2014[4]} 6-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][6], `${keys.FLESH_2014[4]} 7-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][7], `${keys.FLESH_2014[4]} 8-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][8], `${keys.FLESH_2014[4]} 9-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][9], `${keys.FLESH_2014[4]} 10-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][10], `${keys.FLESH_2014[4]} 11-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][11], `${keys.FLESH_2014[4]} 12-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][12], `${keys.FLESH_2014[4]} 13-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][13], `${keys.FLESH_2014[4]} 14-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][14], `${keys.FLESH_2014[4]} 15-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][15], `${keys.FLESH_2014[4]} 16-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][16], `${keys.FLESH_2014[4]} 17-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][17], `${keys.FLESH_2014[4]} 18-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][18], `${keys.FLESH_2014[4]} 19-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][19], `${keys.FLESH_2014[4]} 20-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][20], `${keys.FLESH_2014[4]} 21-qism`)
            await send_video(id, MOVIE.FLESH_2014[3][21], `${keys.FLESH_2014[4]} 22-qism`)
            send_video(id, MOVIE.FLESH_2014[3][22], `${keys.FLESH_2014[4]} 23-qism`)
            break;
        case keys.FLESH_2014[5]:
            await send_video(id, MOVIE.FLESH_2014[4][0], `${keys.FLESH_2014[5]} 1-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][1], `${keys.FLESH_2014[5]} 2-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][2], `${keys.FLESH_2014[5]} 3-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][3], `${keys.FLESH_2014[5]} 4-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][4], `${keys.FLESH_2014[5]} 5-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][5], `${keys.FLESH_2014[5]} 6-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][6], `${keys.FLESH_2014[5]} 7-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][7], `${keys.FLESH_2014[5]} 8-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][8], `${keys.FLESH_2014[5]} 9-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][9], `${keys.FLESH_2014[5]} 10-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][10], `${keys.FLESH_2014[5]} 11-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][11], `${keys.FLESH_2014[5]} 12-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][12], `${keys.FLESH_2014[5]} 13-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][13], `${keys.FLESH_2014[5]} 14-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][14], `${keys.FLESH_2014[5]} 15-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][15], `${keys.FLESH_2014[5]} 16-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][16], `${keys.FLESH_2014[5]} 17-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][17], `${keys.FLESH_2014[5]} 18-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][18], `${keys.FLESH_2014[5]} 19-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][19], `${keys.FLESH_2014[5]} 20-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][20], `${keys.FLESH_2014[5]} 21-qism`)
            await send_video(id, MOVIE.FLESH_2014[4][21], `${keys.FLESH_2014[5]} 22-qism`)
            send_video(id, MOVIE.FLESH_2014[4][22], `${keys.FLESH_2014[5]} 23-qism`)
            break;
        case keys.FLESH_2014[6]:
            await send_video(id, MOVIE.FLESH_2014[5][0], `${keys.FLESH_2014[6]} 1-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][1], `${keys.FLESH_2014[6]} 2-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][2], `${keys.FLESH_2014[6]} 3-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][3], `${keys.FLESH_2014[6]} 4-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][4], `${keys.FLESH_2014[6]} 5-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][5], `${keys.FLESH_2014[6]} 6-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][6], `${keys.FLESH_2014[6]} 7-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][7], `${keys.FLESH_2014[6]} 8-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][8], `${keys.FLESH_2014[6]} 9-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][9], `${keys.FLESH_2014[6]} 10-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][10], `${keys.FLESH_2014[6]} 11-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][11], `${keys.FLESH_2014[6]} 12-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][12], `${keys.FLESH_2014[6]} 13-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][13], `${keys.FLESH_2014[6]} 14-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][14], `${keys.FLESH_2014[6]} 15-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][15], `${keys.FLESH_2014[6]} 16-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][16], `${keys.FLESH_2014[6]} 17-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][17], `${keys.FLESH_2014[6]} 18-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][18], `${keys.FLESH_2014[6]} 19-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][19], `${keys.FLESH_2014[6]} 20-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][20], `${keys.FLESH_2014[6]} 21-qism`)
            await send_video(id, MOVIE.FLESH_2014[5][21], `${keys.FLESH_2014[6]} 22-qism`)
            send_video(id, MOVIE.FLESH_2014[5][22], `${keys.FLESH_2014[6]} 23-qism`)
            break;
        case keys.FLESH_2014[7]:
            await send_video(id, MOVIE.FLESH_2014[6][0], `${keys.FLESH_2014[7]} 1-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][1], `${keys.FLESH_2014[7]} 2-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][2], `${keys.FLESH_2014[7]} 3-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][3], `${keys.FLESH_2014[7]} 4-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][4], `${keys.FLESH_2014[7]} 5-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][5], `${keys.FLESH_2014[7]} 6-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][6], `${keys.FLESH_2014[7]} 7-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][7], `${keys.FLESH_2014[7]} 8-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][8], `${keys.FLESH_2014[7]} 9-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][9], `${keys.FLESH_2014[7]} 10-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][10], `${keys.FLESH_2014[7]} 11-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][11], `${keys.FLESH_2014[7]} 12-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][12], `${keys.FLESH_2014[7]} 13-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][13], `${keys.FLESH_2014[7]} 14-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][14], `${keys.FLESH_2014[7]} 15-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][15], `${keys.FLESH_2014[7]} 16-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][16], `${keys.FLESH_2014[7]} 17-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][17], `${keys.FLESH_2014[7]} 18-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][18], `${keys.FLESH_2014[7]} 19-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][19], `${keys.FLESH_2014[7]} 20-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][20], `${keys.FLESH_2014[7]} 21-qism`)
            await send_video(id, MOVIE.FLESH_2014[6][21], `${keys.FLESH_2014[7]} 22-qism`)
            send_video(id, MOVIE.FLESH_2014[6][22], `${keys.FLESH_2014[7]} 23-qism`)
            break;
        case keys.FLESH_2014[8]:
            await send_video(id, MOVIE.FLESH_2014[7][0], `${keys.FLESH_2014[8]} 1-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][1], `${keys.FLESH_2014[8]} 2-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][2], `${keys.FLESH_2014[8]} 3-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][3], `${keys.FLESH_2014[8]} 4-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][4], `${keys.FLESH_2014[8]} 5-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][5], `${keys.FLESH_2014[8]} 6-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][6], `${keys.FLESH_2014[8]} 7-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][7], `${keys.FLESH_2014[8]} 8-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][8], `${keys.FLESH_2014[8]} 9-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][9], `${keys.FLESH_2014[8]} 10-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][10], `${keys.FLESH_2014[8]} 11-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][11], `${keys.FLESH_2014[8]} 12-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][12], `${keys.FLESH_2014[8]} 13-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][13], `${keys.FLESH_2014[8]} 14-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][14], `${keys.FLESH_2014[8]} 15-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][15], `${keys.FLESH_2014[8]} 16-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][16], `${keys.FLESH_2014[8]} 17-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][17], `${keys.FLESH_2014[8]} 18-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][18], `${keys.FLESH_2014[8]} 19-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][19], `${keys.FLESH_2014[8]} 20-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][20], `${keys.FLESH_2014[8]} 21-qism`)
            await send_video(id, MOVIE.FLESH_2014[7][21], `${keys.FLESH_2014[8]} 22-qism`)
            send_video(id, MOVIE.FLESH_2014[7][22], `${keys.FLESH_2014[8]} 23-qism`)
            break;
        case keys.FLESH_2014[9]:
            await send_video(id, MOVIE.FLESH_2014[8][0], `${keys.FLESH_2014[9]} 1-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][1], `${keys.FLESH_2014[9]} 2-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][2], `${keys.FLESH_2014[9]} 3-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][3], `${keys.FLESH_2014[9]} 4-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][4], `${keys.FLESH_2014[9]} 5-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][5], `${keys.FLESH_2014[9]} 6-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][6], `${keys.FLESH_2014[9]} 7-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][7], `${keys.FLESH_2014[9]} 8-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][8], `${keys.FLESH_2014[9]} 9-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][9], `${keys.FLESH_2014[9]} 10-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][10], `${keys.FLESH_2014[9]} 11-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][11], `${keys.FLESH_2014[9]} 12-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][12], `${keys.FLESH_2014[9]} 13-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][13], `${keys.FLESH_2014[9]} 14-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][14], `${keys.FLESH_2014[9]} 15-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][15], `${keys.FLESH_2014[9]} 16-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][16], `${keys.FLESH_2014[9]} 17-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][17], `${keys.FLESH_2014[9]} 18-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][18], `${keys.FLESH_2014[9]} 19-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][19], `${keys.FLESH_2014[9]} 20-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][20], `${keys.FLESH_2014[9]} 21-qism`)
            await send_video(id, MOVIE.FLESH_2014[8][21], `${keys.FLESH_2014[9]} 22-qism`)
            send_video(id, MOVIE.FLESH_2014[8][22], `${keys.FLESH_2014[9]} 23-qism`)
            break;
        case keys.BACK[0]:
            send_msg(id, `O'zingizga kerakli bo'limni tanlang.`, KEYBOARD.START)
            break;
        case keys.BACK[1]:
            send_msg(id, `O'zingizga kerakli filmni tanlang.`, KEYBOARD.MARVEL_MOVIE)
            break;
        case keys.BACK[2]:
            break;
        case keys.BACK[3]:
            send_msg(id, `O'zingizga kerakli filmni tanlang.`, KEYBOARD.NETFLIX_MOVIE)
            break;
        default:
            break
    }
})


// qulay funksiyalar
function send_msg(chat_id, msg, keyboard) {
    return bot.sendMessage(chat_id, msg, {
        reply_markup: {
            keyboard
        }
    })
}
function send_video(chat_id, url, caption, keyboard) {
    return bot.sendVideo(chat_id, url, {
        caption: `${caption} 
@tarjima_kinolar_ht_bot`}, {
        reply_markup: {
            keyboard
        }
    })
}
