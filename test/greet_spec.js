
var greet = require("../lib/index");
describe('greet', function(){
  it("should greet a person by name", function(){
    expect(greet('howard')).to.eql('hello howard');
  });
  it("should greet a person flirtatiously if drunk", function(){
    expect(greet('howard',true)).to.eql('hello howard, you look sexy today');
  });
});
