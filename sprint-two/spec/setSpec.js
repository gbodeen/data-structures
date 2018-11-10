describe('set', function () {
  var set;

  beforeEach(function () {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function () {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function () {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function () {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should handle numbers as well as strings', function () {
    set.add(-42.5);
    set.add(0);
    set.add(14);
    set.remove(14);
    expect(set.contains(-42.5)).to.equal(true);
    expect(set.contains(0)).to.equal(true);
    expect(set.contains(14)).to.equal(false);
  });

  it('should handle input objects of any type', function () {
    set.add([]);
    set.add([4, 5, 6]);
    set.add({ a: 'apple', b: 'banana' });
    set.add(function (x) { return 2 * x; });
    expect(set.contains([])).to.equal(true);
    expect(set.contains([4, 5, 6])).to.equal(true);
    expect(set.contains({ a: 'apple', b: 'banana' })).to.equal(true);
    expect(set.contains(function (x) { return 2 * x; })).to.equal(true);
  });

});
