Package.describe({
    summary: "flot is a library for jQuery, with a focus on simple usage, attractive looks and interactive features"
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files([
      './lib/jquery.flot.min.js',
      './lib/jquery.flot.time.min.js',
      './lib/jquery.flot.direction.min.js'], 'client');
});

Package.on_test(function (api) {
    api.use(['flot', 'tinytest', 'test-helpers'], ['client', 'server']);
    api.add_files('tests/_tests.js', ['client', 'server']);
});
