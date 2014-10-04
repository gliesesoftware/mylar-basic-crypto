Package.describe({
  summary: 'Basic crypto'
});

Package.onUse(function (api) {
    api.addFiles(['sjcl.js', 'crypto.js'], ['client', 'server']);

    api.export("sjcl");
    api.export("base_crypto");
    api.export("deserialize_keys");
    api.export("serialize_keys");
    api.export("serialize_private");
    api.export("serialize_public");
    api.export("format_cert");
});
