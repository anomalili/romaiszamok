QUnit.module('romaiSzamok', function() {

    QUnit.test('A függvény létezik e?', function (assert) {
        assert.ok(romaiSzamok, "létezik a római számok");
    });
    QUnit.test('függvénye', function(assert) {
        assert.ok(typeof romaiSzamok === "function", "fv a lómai számok");
      });
    QUnit.test('1ggyeees', function(assert) {
      assert.equal(romaiSzamok(1), "I");
    });
    QUnit.test('tíz', function(assert) {
      assert.equal(romaiSzamok(10), "X");
    });
    QUnit.test('húsz', function(assert) {
      assert.equal(romaiSzamok(20), "XX");
    });
    QUnit.test('harminc', function(assert) {
      assert.equal(romaiSzamok(30), "XXX");
    });
    QUnit.test('negyven', function(assert) {
      assert.equal(romaiSzamok(40), "XL");
    });
    QUnit.test('otven', function(assert) {
      assert.equal(romaiSzamok(50), "L");
    });
    QUnit.test('huszonharom', function(assert) {
      assert.equal(romaiSzamok(23), "XXIII");
    });
    
    QUnit.test('TIZENharom', function(assert) {
      assert.equal(romaiSzamok(13), "XIII");
    });
    QUnit.test('harmicharom', function(assert) {
      assert.equal(romaiSzamok(33), "XXXIII");
    });
    QUnit.test('negyvenharom', function(assert) {
      assert.equal(romaiSzamok(43), "XLIII");
    });
    QUnit.test('otvenharom', function(assert) {
      assert.equal(romaiSzamok(53), "LIII");
    });




  });