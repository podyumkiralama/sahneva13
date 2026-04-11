(() => {
  if (!window.trustedTypes || window.trustedTypes.defaultPolicy) return;

  try {
    window.trustedTypes.createPolicy("default", {
      createHTML: (value) => value,
      createScript: (value) => value,
      createScriptURL: (value) => value,
    });
  } catch {
    // Another script may have registered the default policy first.
  }
})();
