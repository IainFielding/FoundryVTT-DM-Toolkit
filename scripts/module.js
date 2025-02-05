Hooks.once('init', async function() {
    foundry.utils.mergeObject(CONFIG.DND5E.facilities, {
        advancement: {
          basic: { 0: 2 },
          special: { 0: 2 }
        }
      })
});

Hooks.once('ready', async function() {

});
