module.exports = describe('Close connections', () => {
    
  it('Close app', done => {
    /**
    * Force to close app
    */
    process.exit();
  });
});
  