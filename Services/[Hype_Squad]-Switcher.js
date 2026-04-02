// HypeSquad House Switcher (Discord Internal API)
// ------------------------------------------------
// This script allows you to set your HypeSquad house using Discord’s internal API.
//
// Instructions:
// 1. Open Discord (Desktop or Web).
// 2. Open Developer Tools:
//    - Web: Press F12
//    - Desktop App: Press Ctrl + Shift + I
// 3. Go to the Console tab.
// 4. Paste this script and press Enter.
//
// Note: This uses Discord's internal modules and may stop working at any time.

let wreq = webpackChunkdiscord_app.push([[Symbol()], {}, r => r]);
webpackChunkdiscord_app.pop();

const chunks = Object.entries(wreq.m);

const findChunkByCode = (...codes) => {
    for (let i = 0; i < chunks.length; i++) {
        const [id, func] = chunks[i];
        const chunkCode = func.toString();

        if (codes.every(code => chunkCode.includes(code))) {
            return wreq(id);
        }
    }
};

const api = Object.values(findChunkByCode("HTTPUtils")).find(e => e?.get);

// HypeSquad House IDs (Internal Mapping)
// 1 = Bravery
// 2 = Brilliance
// 3 = Balance
// Change the house_id value below to switch your HypeSquad house.

api.post({
    url: "/hypesquad/online",
    body: {
        house_id: 1 // Set to 1, 2, or 3 depending on your preferred house
    }
});
