exports.command = function(selector, text) {

  this
    .getAttribute(selector, 'NameProperty', function(result) {
      this.verify.equal(result.value, text)
    })

  return this;
};